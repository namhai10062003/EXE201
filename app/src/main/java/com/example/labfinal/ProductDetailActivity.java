package com.example.labfinal;

import android.app.AlertDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.bumptech.glide.Glide;

public class ProductDetailActivity extends AppCompatActivity {
    private TextView title, price, description, date, status;
    private ImageView image;
    private Button addToCartButton;
    private Button btnViewCart;
    private Button btnBack;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_detail);

        title = findViewById(R.id.detailTitle);
        price = findViewById(R.id.detailPrice);
        description = findViewById(R.id.detailDescription);
        date = findViewById(R.id.detailDate);
        status = findViewById(R.id.detailStatus);
        image = findViewById(R.id.detailImage);
        addToCartButton = findViewById(R.id.addToCartButton);

        // Ánh xạ các View
        btnBack = findViewById(R.id.btnBack);
        // Xử lý sự kiện nhấn nút "Quay lại"
        btnBack.setOnClickListener(v -> {
            finish(); // Đóng Activity hiện tại và quay lại màn hình trước
        });
        // Ánh xạ các View
        btnViewCart = findViewById(R.id.btnViewCart);
        // Xử lý sự kiện nhấn nút "Xem giỏ hàng"
        btnViewCart.setOnClickListener(v -> {
            Intent intent = new Intent(ProductDetailActivity.this, CartActivity.class);
            startActivity(intent);
        });
        // Lấy dữ liệu từ Intent
        Intent intent = getIntent();
        if (intent != null) {
            String productId = intent.getStringExtra("id");
            String productTitle = intent.getStringExtra("title");
            String productImage = intent.getStringExtra("image");
            double productPrice = intent.getDoubleExtra("price", 0);
            String productDescription = intent.getStringExtra("description");
            String productDate = intent.getStringExtra("dateAt");
            String productStatus = intent.getStringExtra("status");

            // Gán dữ liệu vào View
            title.setText(productTitle);
            price.setText(String.format("%,.0f VNĐ", productPrice));
            description.setText(productDescription);
            date.setText("Ngày tạo: " + productDate);
            status.setText("Trạng thái: " + productStatus);

            Glide.with(this).load(productImage).into(image);

            addToCartButton.setOnClickListener(v -> {
                if ("Hết hàng".equalsIgnoreCase(productStatus)) {
                    Toast.makeText(this, "Sản phẩm đã hết hàng!", Toast.LENGTH_SHORT).show();
                    return;
                }

                try {
                    int productIdInt = Integer.parseInt(productId);
                    DatabaseHelper dbHelper = new DatabaseHelper(this);
                    boolean isAdded = dbHelper.addOrUpdateOrder(productIdInt, 1, productPrice);

                    if (isAdded) {
                        new AlertDialog.Builder(this)
                                .setTitle("Thêm vào giỏ hàng thành công!")
                                .setMessage("Bạn muốn tiếp tục mua sắm hay xem giỏ hàng?")
                                .setPositiveButton("Xem giỏ hàng", (dialog, which) -> {
                                    startActivity(new Intent(this, CartActivity.class));
                                })
                                .setNegativeButton("Tiếp tục mua sắm", (dialog, which) -> dialog.dismiss())
                                .show();
                    } else {
                        Toast.makeText(this, "Lỗi khi thêm vào giỏ hàng!", Toast.LENGTH_SHORT).show();
                    }
                } catch (NumberFormatException e) {
                    Toast.makeText(this, "Lỗi chuyển đổi ID sản phẩm!", Toast.LENGTH_SHORT).show();
                }
            });
        }
    }
}
