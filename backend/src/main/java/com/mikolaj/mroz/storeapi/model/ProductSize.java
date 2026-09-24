package com.mikolaj.mroz.storeapi.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class ProductSize {

    private String label;
    private int stock;

    protected ProductSize() {
    }

    public ProductSize(String label, int stock) {
        this.label = label;
        this.stock = stock;
    }

    public String getLabel() {
        return label;
    }

    public int getStock() {
        return stock;
    }
}