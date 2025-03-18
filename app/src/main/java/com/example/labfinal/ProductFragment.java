package com.example.labfinal;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class ProductFragment extends Fragment {
    private RecyclerView recyclerView;
    private ProductAdapter productAdapter;
    private ProductDAO productDAO;
    private List<Product> productList;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_product, container, false);

        recyclerView = view.findViewById(R.id.recyclerView);
        productDAO = new ProductDAO(getContext());

        // Lấy danh sách sản phẩm từ database
        productDAO.open();
        productList = productDAO.getAllProducts();
        productDAO.close();

        // Cấu hình RecyclerView với GridLayoutManager (2 cột)
        GridLayoutManager layoutManager = new GridLayoutManager(getContext(), 2);
        recyclerView.setLayoutManager(layoutManager);

        // Gán adapter sau khi có dữ liệu
        productAdapter = new ProductAdapter(getContext(), productList);
        recyclerView.setAdapter(productAdapter);

        return view;
    }

    // Hàm gốc có tham số sortByAlphabet
    public void filterProducts(String type, Double minPrice, Double maxPrice, boolean sortByAlphabet) {
        productDAO.open();

        // Lấy toàn bộ danh sách sản phẩm từ database
        List<Product> filteredList = productDAO.getAllProducts();

        // Lọc theo loại sản phẩm nếu có
        if (type != null && !type.isEmpty()) {
            filteredList = filteredList.stream()
                    .filter(product -> product.getStatus().equalsIgnoreCase(type))
                    .collect(Collectors.toList());
        }

        // Lọc theo khoảng giá nếu có
        if (minPrice != null && maxPrice != null) {
            filteredList = filteredList.stream()
                    .filter(product -> product.getPrice() >= minPrice && product.getPrice() <= maxPrice)
                    .collect(Collectors.toList());
        }

        // Sắp xếp theo bảng chữ cái nếu được yêu cầu
        if (sortByAlphabet) {
            filteredList.sort(Comparator.comparing(Product::getTitle));
        } else {
            filteredList.sort(Comparator.comparingDouble(Product::getPrice));
        }

        // Cập nhật adapter với danh sách đã lọc
        productAdapter.updateList(filteredList);
        productAdapter.notifyDataSetChanged();

        productDAO.close();
    }

    // ✅ Overload phương thức để không cần truyền `sortByAlphabet`
    public void filterProducts(String type, Double minPrice, Double maxPrice) {
        filterProducts(type, minPrice, maxPrice, false); // Mặc định không sắp xếp theo bảng chữ cái
    }


}
