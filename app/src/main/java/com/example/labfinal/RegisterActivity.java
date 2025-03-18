package com.example.labfinal;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.AuthResult;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;

public class RegisterActivity extends AppCompatActivity {

    private EditText emailedit, passedit, confirmpassedit;
    private Button btnRegister, btnBack;
    private FirebaseAuth mAuth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        mAuth = FirebaseAuth.getInstance();

        emailedit = findViewById(R.id.email);
        passedit = findViewById(R.id.password);
        confirmpassedit = findViewById(R.id.confirm_password);
        btnRegister = findViewById(R.id.btnregister);
        btnBack = findViewById(R.id.btnback);

        btnRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                registerUser();
            }
        });

        btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish(); // Quay lại màn hình đăng nhập
            }
        });
    }

    private void registerUser() {
        String email = emailedit.getText().toString().trim();
        String password = passedit.getText().toString().trim();
        String confirmPassword = confirmpassedit.getText().toString().trim();

        if (TextUtils.isEmpty(email)) {
            Toast.makeText(this, "Vui lòng nhập Email!", Toast.LENGTH_SHORT).show();
            return;
        }

        if (TextUtils.isEmpty(password)) {
            Toast.makeText(this, "Vui lòng nhập Mật khẩu!", Toast.LENGTH_SHORT).show();
            return;
        }

        if (!password.equals(confirmPassword)) {
            Toast.makeText(this, "Mật khẩu xác nhận không khớp!", Toast.LENGTH_SHORT).show();
            return;
        }

        mAuth.createUserWithEmailAndPassword(email, password)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isSuccessful()) {
                            Toast.makeText(RegisterActivity.this, "Đăng ký thành công!", Toast.LENGTH_SHORT).show();
                            startActivity(new Intent(RegisterActivity.this, LoginActivity.class));
                            finish();
                        } else {
                            Toast.makeText(RegisterActivity.this, "Đăng ký thất bại! Vui lòng thử lại.", Toast.LENGTH_SHORT).show();
                        }
                    }
                });
    }
}