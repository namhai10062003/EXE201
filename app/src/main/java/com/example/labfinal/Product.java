package com.example.labfinal;

public class Product {
    private String id;
    private String title;
    private String image;
    private double price;
    private String description;
    private String dateAt;
    private String status;

    // Constructor
    public Product(String id, String title, String image, double price, String description, String dateAt, String status) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.price = price;
        this.description = description;
        this.dateAt = dateAt;
        this.status = status;
    }

    // Getter methods
    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getImage() {
        return image;
    }

    public double getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public String getDateAt() {
        return dateAt;
    }

    public String getStatus() {
        return status;
    }
}
