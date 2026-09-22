package com.mikolaj.mroz.storeapi.dto;

import java.math.BigDecimal;
import java.util.List;

public record ProductResponse(
        Long id,
        String externalId,
        String store,
        String name,
        BigDecimal price,
        BigDecimal finalPrice,
        String url,
        String imageUrl,
        String gender,
        List<com.mikolaj.mroz.storeapi.model.ProductSize> sizes,
        List<String> categories
) {}