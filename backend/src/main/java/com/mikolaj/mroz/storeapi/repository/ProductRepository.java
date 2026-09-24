package com.mikolaj.mroz.storeapi.repository;

import com.mikolaj.mroz.storeapi.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository
        extends JpaRepository<Product, Long> {
}