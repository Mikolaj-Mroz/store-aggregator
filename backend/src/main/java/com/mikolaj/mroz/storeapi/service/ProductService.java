package com.mikolaj.mroz.storeapi.service;

import com.mikolaj.mroz.storeapi.dto.ProductResponse;
import com.mikolaj.mroz.storeapi.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(
            ProductRepository productRepository
    ) {
        this.productRepository = productRepository;
    }

    public List<ProductResponse> getProducts() {
        return productRepository
                .findAll()
                .stream()
                .map(product -> new ProductResponse(
                        product.getId(),
                        product.getExternalId(),
                        product.getStore(),
                        product.getName(),
                        product.getPrice(),
                        product.getFinalPrice(),
                        product.getUrl(),
                        product.getImageUrl(),
                        product.getGender(),
                        product.getSizes(),
                        product.getCategories()
                ))
                .toList();
    }
}