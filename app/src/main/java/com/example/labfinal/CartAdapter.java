package com.example.labfinal;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import com.bumptech.glide.Glide;
import java.util.List;

public class CartAdapter extends RecyclerView.Adapter<CartAdapter.ViewHolder> {
    private Context context;
    private List<Order> orderList;
    private OnDeleteClickListener deleteListener;
    private OnTotalPriceChangeListener totalPriceChangeListener;


    public interface OnDeleteClickListener {
        void onDelete(int orderId);
    }

    // Interface để cập nhật tổng tiền
    public interface OnTotalPriceChangeListener {
        void onTotalPriceChanged();
    }

    public CartAdapter(Context context, List<Order> orderList, OnDeleteClickListener deleteListener, OnTotalPriceChangeListener totalPriceChangeListener) {
        this.context = context;
        this.orderList = orderList;
        this.deleteListener = deleteListener;
        this.totalPriceChangeListener = totalPriceChangeListener;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.item_cart, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Order order = orderList.get(position);
        holder.title.setText(order.getTitle());
        holder.quantity.setText("Số lượng: " + order.getQuantity());
        holder.price.setText(String.format("%,.0f VNĐ", order.getTotalPrice()));
        Glide.with(context).load(order.getImage()).into(holder.image);

        // Xử lý sự kiện nhấn nút xóa
        holder.btnDelete.setOnClickListener(v -> {
            if (order.getQuantity() > 1) {
                // Giảm số lượng và trừ tiền theo giá sản phẩm
                order.setQuantity(order.getQuantity() - 1);
                order.setTotalPrice(order.getTotalPrice() - order.getUnitPrice());
                notifyItemChanged(position);
            } else {
                // Xóa hẳn đơn hàng nếu số lượng là 1
                orderList.remove(position);
                notifyItemRemoved(position);
                if (deleteListener != null) {
                    deleteListener.onDelete(order.getId());
                }
            }

            // Cập nhật tổng tiền
            if (totalPriceChangeListener != null) {
                totalPriceChangeListener.onTotalPriceChanged();
            }

        });
    }

    @Override
    public int getItemCount() {
        return (orderList != null) ? orderList.size() : 0;
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        TextView title, quantity, price;
        ImageView image;
        Button btnDelete;

        public ViewHolder(View itemView) {
            super(itemView);
            title = itemView.findViewById(R.id.cartTitle);
            quantity = itemView.findViewById(R.id.cartQuantity);
            price = itemView.findViewById(R.id.cartPrice);
            image = itemView.findViewById(R.id.cartImage);
            btnDelete = itemView.findViewById(R.id.btnDelete);
        }
    }
}
