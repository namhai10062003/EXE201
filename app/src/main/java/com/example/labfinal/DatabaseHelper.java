package com.example.labfinal;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class DatabaseHelper extends SQLiteOpenHelper {
    private static final String DATABASE_NAME = "shop.db";
    private static final int DATABASE_VERSION = 1;

    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL("CREATE TABLE products (" +
                "id INTEGER PRIMARY KEY, " +
                "title TEXT NOT NULL, " +
                "image TEXT, " +
                "price REAL NOT NULL CHECK(price > 0), " +
                "description TEXT, " +
                "dateAt TEXT NOT NULL, " +
                "status TEXT CHECK(status IN ('Còn hàng', 'Hết hàng')) NOT NULL)");

        db.execSQL("CREATE TABLE orders (" +
                "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                "product_id INTEGER NOT NULL, " +
                "quantity INTEGER NOT NULL CHECK(quantity > 0), " +
                "total_price REAL NOT NULL CHECK(total_price >= 0), " +
                "order_date TEXT NOT NULL, " +
                "FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE)");

        insertSampleProducts(db);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS orders");
        db.execSQL("DROP TABLE IF EXISTS products");
        onCreate(db);
    }

    public void insertSampleProducts(SQLiteDatabase db) {
        Cursor cursor = db.rawQuery("SELECT COUNT(*) FROM products", null);
        cursor.moveToFirst();
        int count = cursor.getInt(0);
        cursor.close();

        if (count == 0) {
            db.execSQL("INSERT INTO products (id, title, image, price, description, dateAt, status) VALUES " +
                    "(1, 'Hoa Hồng Đỏ', 'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/05/hinh-nen-hoa-hong-do-cho-dien-thoai-10.jpg.webp', 150.00, 'Hoa hồng đỏ tượng trưng cho tình yêu và sự lãng mạn. Đây là loài hoa phổ biến nhất trong các dịp đặc biệt như Valentine, kỷ niệm hay cầu hôn.', '2024-03-06', 'Còn hàng'), " +
                    "(2, 'Hoa Cẩm Tú Cầu', 'https://cdn-media.sforum.vn/storage/app/media/ctv_seo10/anh-hoa-cam-tu-cau-thumb.jpg', 200.00, 'Hoa cẩm tú cầu mang vẻ đẹp tinh tế và sang trọng, thể hiện sự biết ơn và chân thành. Loài hoa này có thể thay đổi màu sắc theo độ pH của đất.', '2024-03-06', 'Còn hàng'), " +
                    "(3, 'Hoa Ly', 'https://i.pinimg.com/736x/61/1e/8e/611e8e9bddb8f499f392415cb8deb02e.jpg', 180.00, 'Hoa ly có mùi hương thơm ngát, thường được sử dụng trong các dịp lễ lớn. Loài hoa này tượng trưng cho sự thanh khiết, sang trọng và lòng tôn kính.', '2024-03-06', 'Hết hàng'), " +
                    "(4, 'Hoa Cúc Họa Mi', 'https://hellohoa.com/wp-content/uploads/2019/01/bong-hoa-cuc-hoa-mi-dep-nhat.jpg', 120.00, 'Cúc họa mi là loài hoa nhỏ nhắn, tinh khôi, tượng trưng cho sự ngây thơ, trong sáng. Mùa cúc họa mi thường rơi vào cuối thu, tạo nên một nét đẹp nhẹ nhàng và lãng mạn.', '2024-03-06', 'Còn hàng'), " +
                    "(5, 'Hoa Sen', 'https://24hstore.vn/upload_images/images/hinh-nen-hoa-sen/hinh-nen-hoa-sen-4K_(9).jpg', 250.00, 'Hoa sen mang vẻ đẹp thanh tao và tinh khiết, tượng trưng cho sự giác ngộ trong Phật giáo. Đây cũng là quốc hoa của Việt Nam, biểu tượng cho sự vươn lên mạnh mẽ.', '2024-03-06', 'Còn hàng'), " +
                    "(6, 'Hoa Hướng Dương', 'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/05/hinh-nen-hoa-huong-duong-1.jpg.webp', 170.00, 'Hoa hướng dương luôn hướng về phía mặt trời, biểu tượng cho sự kiên trì, niềm hy vọng và hạnh phúc. Loài hoa này thường được dùng để truyền tải thông điệp tích cực.', '2024-03-06', 'Còn hàng'), " +
                    "(7, 'Hoa Oải Hương', 'https://hoatuoi360.vn/uploads/file/y-nghia-hoa-oai-huong-trong-tinh-yeu-15-06.jpg', 220.00, 'Hoa oải hương có hương thơm dễ chịu, giúp thư giãn và giảm căng thẳng. Nó còn tượng trưng cho sự bình yên và hạnh phúc.', '2024-03-06', 'Còn hàng'), " +
                    "(8, 'Hoa Lan Hồ Điệp', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGehE9cYhJXv8-OhjUYH9ohkt6_X3bA1YLjw&s', 300.00, 'Hoa lan hồ điệp đại diện cho sự tinh tế, quyền quý và mang lại may mắn. Đây là loài hoa thường được dùng trong các dịp quan trọng.', '2024-03-06', 'Còn hàng'), " +
                    "(9, 'Hoa Mộc Lan', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWr506qItAiEUmiwkFSBnWjtKhygSaFcdBw&s', 280.00, 'Hoa mộc lan tượng trưng cho vẻ đẹp thanh khiết, lòng dũng cảm và tình yêu mãnh liệt. Loài hoa này thường xuất hiện trong văn hóa phương Đông.', '2024-03-06', 'Còn hàng'), " +
                    "(10, 'Hoa Tử Đằng', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bSL0o19GwTB4zlAIeTGep3fsKdSY8z2Llw&s', 260.00, 'Hoa tử đằng mang ý nghĩa về tình yêu vĩnh cửu, lòng chung thủy và sự kiên trì. Loài hoa này thường mọc thành từng chùm rủ xuống tạo nên cảnh sắc lãng mạn.', '2024-03-06', 'Hết hàng') ");
        }
    }


    // ✅ Thêm đơn hàng mới hoặc cập nhật số lượng nếu sản phẩm đã tồn tại
    public boolean addOrUpdateOrder(int productId, int quantity, double price) {
        SQLiteDatabase db = this.getWritableDatabase();
        String orderDate = new SimpleDateFormat("yyyy-MM-dd", Locale.getDefault()).format(new Date());

        Cursor cursor = db.rawQuery("SELECT quantity FROM orders WHERE product_id=?", new String[]{String.valueOf(productId)});
        if (cursor.moveToFirst()) {
            int currentQuantity = cursor.getInt(0);
            int newQuantity = currentQuantity + quantity;
            ContentValues values = new ContentValues();
            values.put("quantity", newQuantity);
            values.put("total_price", newQuantity * price);
            values.put("order_date", orderDate);
            int rowsUpdated = db.update("orders", values, "product_id=?", new String[]{String.valueOf(productId)});
            cursor.close();
            db.close();
            return rowsUpdated > 0;
        } else {
            ContentValues values = new ContentValues();
            values.put("product_id", productId);
            values.put("quantity", quantity);
            values.put("total_price", quantity * price);
            values.put("order_date", orderDate);
            long result = db.insert("orders", null, values);
            cursor.close();
            db.close();
            return result != -1;
        }
    }

    // ✅ Lấy danh sách đơn hàng
    public Cursor getAllOrders() {
        SQLiteDatabase db = this.getReadableDatabase();
        return db.rawQuery("SELECT orders.id, products.title, orders.quantity, orders.total_price, orders.order_date " +
                "FROM orders " +
                "INNER JOIN products ON orders.product_id = products.id " +
                "ORDER BY orders.order_date DESC", null);
    }


    // ✅ Xóa đơn hàng theo ID
    public boolean deleteOrder(int orderId) {
        SQLiteDatabase db = this.getWritableDatabase();
        int deletedRows = db.delete("orders", "id = ?", new String[]{String.valueOf(orderId)});
        db.close();
        return deletedRows > 0;
    }
    // ✅ Lấy danh sách hoa theo thứ tự bảng chữ cái
    public Cursor getFlowersSortedByAlphabet() {
        SQLiteDatabase db = this.getReadableDatabase();
        return db.rawQuery("SELECT * FROM products ORDER BY title ASC", null);
    }
}
