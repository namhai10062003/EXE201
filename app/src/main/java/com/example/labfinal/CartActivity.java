package com.example.labfinal;

import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.MenuItem;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;
import java.util.List;

public class CartActivity extends AppCompatActivity {
    private RecyclerView recyclerView;
    private CartAdapter adapter;
    private DatabaseHelper dbHelper;
    private TextView totalPrice;
    private List<Order> orderList;
    private Button btnPlaceOrder;
    private ImageButton btnBack;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cart);



        if (getSupportActionBar() != null) {
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        }

        recyclerView = findViewById(R.id.recyclerViewCart);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        totalPrice = findViewById(R.id.totalPrice);
        btnPlaceOrder = findViewById(R.id.btnPlaceOrder);
        btnBack = findViewById(R.id.btnBack);
        dbHelper = new DatabaseHelper(this);
        orderList = new ArrayList<>();

        loadCart();

        btnPlaceOrder.setOnClickListener(v -> placeOrder());
        btnBack.setOnClickListener(v -> finish());
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        if (item.getItemId() == android.R.id.home) {
            finish();
            return true;
        }
        return super.onOptionsItemSelected(item);
    }

    private void placeOrder() {
        if (orderList.isEmpty()) {
            Toast.makeText(this, "Giỏ hàng trống!", Toast.LENGTH_SHORT).show();
            return;
        }

        SQLiteDatabase db = dbHelper.getWritableDatabase();
        db.beginTransaction();
        try {
            for (Order order : orderList) {
                dbHelper.addOrUpdateOrder(order.getId(), order.getQuantity(), order.getTotalPrice());
                dbHelper.deleteOrder(order.getId());
            }
            db.setTransactionSuccessful();
            Toast.makeText(this, "Đặt hàng thành công!", Toast.LENGTH_SHORT).show();
        } finally {
            db.endTransaction();
        }

        loadCart();
    }

    private void loadCart() {
        orderList.clear();
        SQLiteDatabase db = dbHelper.getReadableDatabase();
        Cursor cursor = db.rawQuery(
                "SELECT o.id, p.title, p.image, o.quantity, o.total_price FROM orders o " +
                        "INNER JOIN products p ON o.product_id = p.id", null);

        double total = 0;
        while (cursor.moveToNext()) {
            int id = cursor.getInt(0);
            String title = cursor.getString(1);
            String image = cursor.getString(2);
            int quantity = cursor.getInt(3);
            double price = cursor.getDouble(4);
            orderList.add(new Order(id, title, image, quantity, price, price / Math.max(1, quantity)));
            total += price;
        }
        cursor.close();

        if (adapter == null) {
            adapter = new CartAdapter(this, orderList, id -> {
                dbHelper.deleteOrder(id);
                Toast.makeText(this, "Đã xóa sản phẩm", Toast.LENGTH_SHORT).show();
                loadCart();
            }, this::updateTotalPrice);
            recyclerView.setAdapter(adapter);
        } else {
            adapter.notifyDataSetChanged();
        }
        updateTotalPrice();
    }

    private void updateTotalPrice() {
        double total = 0;
        for (Order order : orderList) {
            total += order.getTotalPrice();
        }
        totalPrice.setText(String.format("Tổng tiền: %,.0f VNĐ", total));
    }
}