package com.mikolaj.mroz.storeapi.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "external_id", nullable = false)
    private String externalId;

    @Column(nullable = false)
    private String store;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(name = "final_price", nullable = false)
    private BigDecimal finalPrice;

    @Column(nullable = false, length = 1000)
    private String url;

    @Column(name = "image_url", length = 1000)
    private String imageUrl;

    private String gender;

    @ElementCollection
    @CollectionTable(
            name = "product_sizes",
            joinColumns = @JoinColumn(name = "product_id")
    )
    private List<ProductSize> sizes = new ArrayList<>();

    @ElementCollection
    @CollectionTable(
            name = "product_categories",
            joinColumns = @JoinColumn(name = "product_id")
    )
    @Column(name = "category")
    private List<String> categories = new ArrayList<>();

    protected Product() {
    }

    public Product(
            String externalId,
            String store,
            String name,
            BigDecimal price,
            BigDecimal finalPrice,
            String url,
            String imageUrl,
            String gender,
            List<ProductSize> sizes,
            List<String> categories
    ) {
        this.externalId = externalId;
        this.store = store;
        this.name = name;
        this.price = price;
        this.finalPrice = finalPrice;
        this.url = url;
        this.imageUrl = imageUrl;
        this.gender = gender;
        this.sizes = sizes;
        this.categories = categories;
    }

    public Long getId() {
        return id;
    }

    public String getExternalId() {
        return externalId;
    }

    public String getStore() {
        return store;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public BigDecimal getFinalPrice() {
        return finalPrice;
    }

    public String getUrl() {
        return url;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getGender() {
        return gender;
    }

    public List<ProductSize> getSizes() {
        return sizes;
    }

    public List<String> getCategories() {
        return categories;
    }
}