package com.example.labfinal;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Chuyển đến HomeActivity khi mở ứng dụng
        Intent intent = new Intent(MainActivity.this, HomeActivity.class);
        startActivity(intent);
        finish(); // Đóng MainActivity sau khi chuyển sang HomeActivity
    }
}
