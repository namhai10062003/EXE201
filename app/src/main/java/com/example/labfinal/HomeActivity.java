package com.example.labfinal;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

import com.bumptech.glide.Glide;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

public class HomeActivity extends AppCompatActivity {

    private FirebaseAuth mAuth;
    private Button btnLogin, btnRegister;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        mAuth = FirebaseAuth.getInstance();
        ImageView backgroundImageView = findViewById(R.id.backgroundImageView);

        String imageUrl = "https://png.pngtree.com/thumb_back/fw800/background/20240412/pngtree-wisteria-flower-art-image_15713385.jpg";
        Glide.with(this)
                .load(imageUrl)
                .into(backgroundImageView);
        // Kiểm tra nếu người dùng đã đăng nhập
        FirebaseUser user = mAuth.getCurrentUser();
        if (user != null) {
            startActivity(new Intent(HomeActivity.this, DashboardActivity.class));
            finish(); // Kết thúc HomeActivity
            return; // Thoát khỏi phương thức để tránh chạy code tiếp theo
        }

        // Ánh xạ Button từ XML
        btnLogin = findViewById(R.id.btn_login);
        btnRegister = findViewById(R.id.btn_register);

        // Xử lý sự kiện khi nhấn nút Đăng nhập
        btnLogin.setOnClickListener(v -> startActivity(new Intent(HomeActivity.this, LoginActivity.class)));

        // Xử lý sự kiện khi nhấn nút Đăng ký
        btnRegister.setOnClickListener(v -> startActivity(new Intent(HomeActivity.this, RegisterActivity.class)));
    }
}
