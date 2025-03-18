package com.example.labfinal;

import android.app.Application;
import android.util.Log;

import com.google.firebase.FirebaseApp;

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        FirebaseApp.initializeApp(this);
        Log.d("FirebaseInit", "Firebase đã được khởi tạo!");
    }
}
