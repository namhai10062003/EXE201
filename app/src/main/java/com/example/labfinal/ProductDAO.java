package com.example.labfinal;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import java.util.ArrayList;
import java.util.List;

public class ProductDAO {
    private SQLiteDatabase db;
    private DatabaseHelper dbHelper;

    public ProductDAO(Context context) {
        dbHelper = new DatabaseHelper(context);
    }

    public void open() {
        db = dbHelper.getWritableDatabase();
    }

    public void close() {
        dbHelper.close();
    }

    public void addProduct(Product product) {
        ContentValues values = new ContentValues();
        values.put("id", product.getId());
        values.put("title", product.getTitle());
        values.put("image", product.getImage());
        values.put("price", product.getPrice());
        values.put("description", product.getDescription());
        values.put("dateAt", product.getDateAt());
        values.put("status", product.getStatus());
        db.insert("products", null, values);
    }

    public List<Product> getAllProducts() {
        List<Product> productList = new ArrayList<>();
        Cursor cursor = db.rawQuery("SELECT * FROM products", null);

        if (cursor.moveToFirst()) {
            do {
                productList.add(new Product(
                        cursor.getString(cursor.getColumnIndexOrThrow("id")),
                        cursor.getString(cursor.getColumnIndexOrThrow("title")),
                        cursor.getString(cursor.getColumnIndexOrThrow("image")),
                        cursor.getDouble(cursor.getColumnIndexOrThrow("price")),
                        cursor.getString(cursor.getColumnIndexOrThrow("description")),
                        cursor.getString(cursor.getColumnIndexOrThrow("dateAt")),
                        cursor.getString(cursor.getColumnIndexOrThrow("status"))
                ));
            } while (cursor.moveToNext());
        }
        cursor.close();
        return productList;
    }

    public List<Product> getProductsByStatus(String status) {
        List<Product> productList = new ArrayList<>();
        Cursor cursor = db.rawQuery("SELECT * FROM products WHERE status = ?", new String[]{status});

        if (cursor.moveToFirst()) {
            do {
                productList.add(new Product(
                        cursor.getString(cursor.getColumnIndexOrThrow("id")),
                        cursor.getString(cursor.getColumnIndexOrThrow("title")),
                        cursor.getString(cursor.getColumnIndexOrThrow("image")),
                        cursor.getDouble(cursor.getColumnIndexOrThrow("price")),
                        cursor.getString(cursor.getColumnIndexOrThrow("description")),
                        cursor.getString(cursor.getColumnIndexOrThrow("dateAt")),
                        cursor.getString(cursor.getColumnIndexOrThrow("status"))
                ));
            } while (cursor.moveToNext());
        }
        cursor.close();
        return productList;
    }

    public List<Product> getProductsByPriceRange(double minPrice, double maxPrice) {
        List<Product> productList = new ArrayList<>();
        Cursor cursor = db.rawQuery("SELECT * FROM products WHERE price BETWEEN ? AND ?",
                new String[]{String.valueOf(minPrice), String.valueOf(maxPrice)});

        if (cursor.moveToFirst()) {
            do {
                productList.add(new Product(
                        cursor.getString(cursor.getColumnIndexOrThrow("id")),
                        cursor.getString(cursor.getColumnIndexOrThrow("title")),
                        cursor.getString(cursor.getColumnIndexOrThrow("image")),
                        cursor.getDouble(cursor.getColumnIndexOrThrow("price")),
                        cursor.getString(cursor.getColumnIndexOrThrow("description")),
                        cursor.getString(cursor.getColumnIndexOrThrow("dateAt")),
                        cursor.getString(cursor.getColumnIndexOrThrow("status"))
                ));
            } while (cursor.moveToNext());
        }
        cursor.close();
        return productList;
    }
}
