package com.example.labfinal;

public class Order {
    private int id, quantity;
    private String title, image;
    private double totalPrice;
    private double unitPrice; // Giá của một sản phẩm

    public Order(int id, String title, String image, int quantity, double totalPrice, double unitPrice) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.quantity = quantity;
        this.totalPrice = totalPrice; // Tổng tiền đã có sẵn
        this.unitPrice = unitPrice;   // Giá của 1 sản phẩm
    }

    public int getId() { return id; }
    public int getQuantity() { return quantity; }
    public String getTitle() { return title; }
    public String getImage() { return image; }
    public double getTotalPrice() { return totalPrice; }
    public double getUnitPrice() { return unitPrice; }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }


    public void decreaseTotalPrice() {
        this.totalPrice -= this.unitPrice;
    }
}
