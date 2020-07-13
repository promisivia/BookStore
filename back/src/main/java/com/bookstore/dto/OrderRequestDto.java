package com.bookstore.dto;

import java.util.List;

public class OrderRequestDto {
    private Long userId;
    private Double price;
    private Boolean payed;
    private List<IdAndQuantity> productList;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Boolean getPayed() {
        return payed;
    }

    public void setPayed(Boolean payed) {
        this.payed = payed;
    }

    public List<IdAndQuantity> getProductList() {
        return productList;
    }

    public void setProductList(List<IdAndQuantity> productList) {
        this.productList = productList;
    }
}
