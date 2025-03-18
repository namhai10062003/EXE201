package com.example.labfinal;

import android.app.AlertDialog;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.PopupMenu;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.bumptech.glide.request.RequestOptions;

import java.util.List;

public class ProductAdapter extends RecyclerView.Adapter<ProductAdapter.ProductViewHolder> {
    private List<Product> productList;
    private Context context;
    private DatabaseHelper dbHelper;
    public void updateList(List<Product> newList) {
        this.productList = newList;
        notifyDataSetChanged();
    }

    public ProductAdapter(Context context, List<Product> productList) {
        this.context = context;
        this.productList = productList;
        this.dbHelper = new DatabaseHelper(context);
    }

    @NonNull
    @Override
    public ProductViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.item_product, parent, false);
        return new ProductViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ProductViewHolder holder, int position) {
        Product product = productList.get(position);

        holder.title.setText(product.getTitle() != null ? product.getTitle() : "Không có tiêu đề");
        holder.price.setText(product.getPrice() > 0 ? String.format("%,.0f VNĐ", product.getPrice()) : "Liên hệ");
        holder.date.setText(product.getDateAt() != null ? "Ngày tạo: " + product.getDateAt() : "Chưa có ngày tạo");
        holder.status.setText(product.getStatus() != null ? "Trạng thái: " + product.getStatus() : "Chưa có trạng thái");

        // Kiểm tra nếu mô tả quá dài thì rút gọn
        if (product.getDescription() != null && product.getDescription().length() > 100) {
            holder.description.setText(product.getDescription().substring(0, 100) + "...");
        } else {
            holder.description.setText(product.getDescription() != null ? product.getDescription() : "Mô tả không có");
        }

        Glide.with(context)
                .load(product.getImage())
                .apply(new RequestOptions()
                        .placeholder(R.drawable.ic_google_logo)
                        .error(R.drawable.ic_product)
                        .diskCacheStrategy(DiskCacheStrategy.AUTOMATIC)
                        .fitCenter())
                .into(holder.image);

        // Khi click vào item, mở chi tiết sản phẩm
        holder.itemView.setOnClickListener(v -> {
            Intent intent = new Intent(context, ProductDetailActivity.class);
            intent.putExtra("id", product.getId());
            intent.putExtra("title", product.getTitle());
            intent.putExtra("image", product.getImage());
            intent.putExtra("price", product.getPrice());
            intent.putExtra("description", product.getDescription()); // Gửi mô tả đầy đủ
            intent.putExtra("dateAt", product.getDateAt());
            intent.putExtra("status", product.getStatus());
            context.startActivity(intent);
        });
        // Kiểm tra trạng thái trước khi cho phép thêm vào giỏ hàng
        holder.orderButton.setOnClickListener(v -> {
            if ("Hết hàng".equalsIgnoreCase(product.getStatus())) {
                Toast.makeText(context, "Sản phẩm này đã hết hàng!", Toast.LENGTH_SHORT).show();
                return;
            }
            try {
                int productId = Integer.parseInt(product.getId());
                boolean isAdded = dbHelper.addOrUpdateOrder(productId, 1, product.getPrice());
                if (isAdded) {
                    new AlertDialog.Builder(context)
                            .setTitle("Thêm vào giỏ hàng thành công!")
                            .setMessage("Bạn muốn tiếp tục mua sắm hay xem giỏ hàng?")
                            .setPositiveButton("Xem giỏ hàng", (dialog, which) -> {
                                context.startActivity(new Intent(context, CartActivity.class));
                            })
                            .setNegativeButton("Tiếp tục mua sắm", (dialog, which) -> dialog.dismiss())
                            .show();
                } else {
                    Toast.makeText(context, "Lỗi khi thêm vào giỏ hàng!", Toast.LENGTH_SHORT).show();
                }
            } catch (NumberFormatException e) {
                Toast.makeText(context, "Lỗi chuyển đổi ID sản phẩm!", Toast.LENGTH_SHORT).show();
            }
        });

        holder.buyButton.setOnClickListener(v -> {
            Toast.makeText(context, "Bạn muốn mua: " + product.getTitle(), Toast.LENGTH_SHORT).show();
        });

        holder.menuButton.setOnClickListener(v -> {
            Log.d("DEBUG", "Menu button clicked!"); // Kiểm tra xem có nhận sự kiện không

            PopupMenu popup = new PopupMenu(v.getContext(), v);
            popup.getMenuInflater().inflate(R.menu.product_menu, popup.getMenu());

            popup.setOnMenuItemClickListener(item -> {
                Log.d("DEBUG", "Menu item clicked: " + item.getTitle()); // Kiểm tra sự kiện chọn menu

                if (item.getItemId() == R.id.menu_home) {
                    Toast.makeText(context, "Trang chính", Toast.LENGTH_SHORT).show();
                    return true;
                } else if (item.getItemId() == R.id.menu_flower) {
                    Toast.makeText(context, "Hoa", Toast.LENGTH_SHORT).show();
                    return true;
                } else if (item.getItemId() == R.id.menu_price) {
                    Toast.makeText(context, "Giá cả", Toast.LENGTH_SHORT).show();
                    return true;
                }
                return false;
            });

            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q) {
                popup.setForceShowIcon(true);
            }

            popup.show();
            Log.d("DEBUG", "Popup menu should be visible now!");
        });

    }

    @Override
    public int getItemCount() {
        return (productList != null) ? productList.size() : 0;
    }

    public static class ProductViewHolder extends RecyclerView.ViewHolder {
        TextView title, price, description, date, status;
        ImageView image, menuButton;
        Button buyButton, orderButton;

        public ProductViewHolder(@NonNull View itemView) {
            super(itemView);
            title = itemView.findViewById(R.id.productTitle);
            price = itemView.findViewById(R.id.productPrice);
            description = itemView.findViewById(R.id.productDescription);
            date = itemView.findViewById(R.id.productDate);
            status = itemView.findViewById(R.id.productStatus);
            image = itemView.findViewById(R.id.productImage);
            buyButton = itemView.findViewById(R.id.buyButton);
            orderButton = itemView.findViewById(R.id.orderButton);
            menuButton = itemView.findViewById(R.id.menuButton);
        }
    }
}
