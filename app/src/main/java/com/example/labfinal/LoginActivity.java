package com.example.labfinal;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthCredential;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.GoogleAuthProvider;

public class LoginActivity extends AppCompatActivity {
    private static final String TAG = "LoginActivity";
    private FirebaseAuth mAuth;
    private GoogleSignInClient googleSignInClient;
    private ProgressDialog progressDialog;

    private EditText email, pass;
    private Button btnLogin, btnRegister, btnGoogleSignIn, btnBack;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        mAuth = FirebaseAuth.getInstance();
        email = findViewById(R.id.email);
        pass = findViewById(R.id.password);
        btnLogin = findViewById(R.id.btnlogin);
        btnRegister = findViewById(R.id.btnregis);
        btnGoogleSignIn = findViewById(R.id.btn_google_sign_in);
        btnBack = findViewById(R.id.btnBack);
        btnBack.setOnClickListener(v -> {
            Intent intent = new Intent(LoginActivity.this, HomeActivity.class);
            intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP); // Xóa tất cả các Activity phía trên HomeActivity
            startActivity(intent);
        });

        progressDialog = new ProgressDialog(this);
        progressDialog.setMessage("Đang đăng nhập...");

        // Cấu hình Google Sign-In
        GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestIdToken(getString(R.string.default_web_client_id))
                .requestEmail()
                .build();
        googleSignInClient = GoogleSignIn.getClient(this, gso);

        // Xử lý sự kiện nhấn nút
        btnLogin.setOnClickListener(v -> loginWithEmail());
        btnRegister.setOnClickListener(v -> startActivity(new Intent(LoginActivity.this, RegisterActivity.class)));
        btnGoogleSignIn.setOnClickListener(v -> signInWithGoogle());
    }

    // Đăng nhập bằng Email và Password
    private void loginWithEmail() {
        String emailText = email.getText().toString().trim();
        String passText = pass.getText().toString().trim();

        if (TextUtils.isEmpty(emailText) || TextUtils.isEmpty(passText)) {
            Toast.makeText(this, "Vui lòng nhập đầy đủ thông tin!", Toast.LENGTH_SHORT).show();
            return;
        }

        progressDialog.show();
        mAuth.signInWithEmailAndPassword(emailText, passText).addOnCompleteListener(task -> {
            progressDialog.dismiss();
            if (task.isSuccessful()) {
                updateUI(mAuth.getCurrentUser());
            } else {
                Toast.makeText(LoginActivity.this, "Đăng nhập thất bại!", Toast.LENGTH_SHORT).show();
                Log.e(TAG, "Lỗi đăng nhập: ", task.getException());
            }
        });
    }

    // Đăng nhập bằng Google
    private void signInWithGoogle() {
        Intent signInIntent = googleSignInClient.getSignInIntent();
        googleSignInLauncher.launch(signInIntent);
    }

    private final ActivityResultLauncher<Intent> googleSignInLauncher =
            registerForActivityResult(new ActivityResultContracts.StartActivityForResult(), result -> {
                if (result.getResultCode() == RESULT_OK && result.getData() != null) {
                    Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(result.getData());
                    try {
                        GoogleSignInAccount account = task.getResult(ApiException.class);
                        if (account != null) {
                            firebaseAuthWithGoogle(account);
                        }
                    } catch (ApiException e) {
                        Log.e(TAG, "Google Sign-In thất bại: " + e.getStatusCode(), e);
                        Toast.makeText(this, "Đăng nhập Google thất bại!", Toast.LENGTH_SHORT).show();
                    }
                } else {
                    Toast.makeText(this, "Bạn đã hủy đăng nhập Google!", Toast.LENGTH_SHORT).show();
                }
            });

    private void firebaseAuthWithGoogle(GoogleSignInAccount account) {
        AuthCredential credential = GoogleAuthProvider.getCredential(account.getIdToken(), null);
        progressDialog.show();
        mAuth.signInWithCredential(credential).addOnCompleteListener(this, task -> {
            progressDialog.dismiss();
            if (task.isSuccessful()) {
                updateUI(mAuth.getCurrentUser());
            } else {
                Toast.makeText(this, "Đăng nhập Google thất bại!", Toast.LENGTH_SHORT).show();
                Log.e(TAG, "Firebase Auth thất bại", task.getException());
            }
        });
    }

    private void updateUI(FirebaseUser user) {
        if (user != null) {
            Toast.makeText(this, "Chào, " + user.getDisplayName(), Toast.LENGTH_SHORT).show();
            startActivity(new Intent(this, DashboardActivity.class));
            finish();

        }
    }
}
