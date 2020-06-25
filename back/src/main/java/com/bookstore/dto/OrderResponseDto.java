package com.bookstore.dto;

import com.bookstore.entity.Order;

import java.util.Date;
import java.util.List;

public class OrderResponseDto {
    private Long orderId;
    private Long userId;
    private Double price;
    private Boolean payed;
    private Date date;
    private List<ProductDto> productList;

    public OrderResponseDto(Order order, List<ProductDto> bookList) {
        this.orderId = order.getOrderId();
        this.userId = order.getUserId();
        this.price = order.getPrice();
        this.payed = order.getPayed();
        this.date = order.getDate();
        this.productList = bookList;
    }

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

    public List<ProductDto> getProductList() {
        return productList;
    }

    public void setProductList(List<ProductDto> productList) {
        this.productList = productList;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
