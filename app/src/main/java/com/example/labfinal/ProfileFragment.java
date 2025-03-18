package com.example.labfinal;

import static android.app.PendingIntent.getActivity;
import static androidx.core.content.ContextCompat.startActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.bumptech.glide.Glide;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

public class ProfileFragment extends Fragment {
    private ImageView imgAvatar;
    private TextView txtName, txtEmail;
//    private Button btnLogout;

    public ProfileFragment() {
        // Required empty constructor
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_profile, container, false);

        // Ánh xạ view
        imgAvatar = view.findViewById(R.id.imgAvatar);
        txtName = view.findViewById(R.id.txtName);
        txtEmail = view.findViewById(R.id.txtEmail);
//        btnLogout = view.findViewById(R.id.btnLogout);

        // Lấy thông tin người dùng từ Firebase
        FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();
        if (user != null) {
            txtName.setText(user.getDisplayName());
            txtEmail.setText(user.getEmail());
            Glide.with(this).load(user.getPhotoUrl()).into(imgAvatar);
        }

//        // Xử lý sự kiện Logout
//        btnLogout.setOnClickListener(v -> {
//            FirebaseAuth.getInstance().signOut();
//            startActivity(new Intent(getActivity(), LoginActivity.class));
//            getActivity().finish();
//        });

        return view;
    }
}
