package com.example.labfinal;

import android.content.Intent;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.Fragment;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.firebase.auth.FirebaseAuth;

public class DashboardActivity extends AppCompatActivity {
    private ProductFragment productFragment;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dashboard);

        // Gán Toolbar làm ActionBar
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        // Khởi tạo database và chèn dữ liệu mẫu
        DatabaseHelper dbHelper = new DatabaseHelper(this);
        SQLiteDatabase db = dbHelper.getWritableDatabase();
        dbHelper.insertSampleProducts(db);
        db.close();

        BottomNavigationView bottomNavigationView = findViewById(R.id.bottomNavigationView);

        // Khởi tạo và hiển thị ProductFragment
        productFragment = new ProductFragment();
        getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, productFragment).commit();

        bottomNavigationView.setOnItemSelectedListener(item -> {
            Fragment selectedFragment = null;

            if (item.getItemId() == R.id.nav_product) {
                selectedFragment = productFragment; // Giữ nguyên ProductFragment
            } else if (item.getItemId() == R.id.nav_profile) {
                selectedFragment = new ProfileFragment();
            } else if (item.getItemId() == R.id.nav_logout) {
                FirebaseAuth.getInstance().signOut();
                startActivity(new Intent(DashboardActivity.this, LoginActivity.class));
                finish();
                return true;
            }

            if (selectedFragment != null) {
                getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, selectedFragment).commit();
            }
            return true;
        });
    }

    // Hiển thị menu trong Toolbar
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.product_menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        int itemId = item.getItemId();

        // Nếu ProductFragment chưa được khởi tạo, tạo mới
        if (productFragment == null) {
            productFragment = new ProductFragment();
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, productFragment).commit();
        }

        if (itemId == R.id.menu_home) {
            Toast.makeText(this, "Trang chính", Toast.LENGTH_SHORT).show();
            productFragment.filterProducts(null, null, null); // Xóa boolean
            return true;
        } else if (itemId == R.id.menu_flower) {
            Toast.makeText(this, "Hoa", Toast.LENGTH_SHORT).show();
            productFragment.filterProducts(null, null, null); //
        } else if (itemId == R.id.menu_price) {
            Toast.makeText(this, "Lọc theo Giá cả (từ thấp đến cao)", Toast.LENGTH_SHORT).show();
            productFragment.filterProducts(null, 100.0, 500.0); // Xóa boolean
            return true;
        }

        return super.onOptionsItemSelected(item);
    }



}
