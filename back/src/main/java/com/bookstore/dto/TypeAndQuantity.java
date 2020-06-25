package com.bookstore.dto;

public class TypeAndQuantity {
    String type;
    Long quantity;

    public TypeAndQuantity(){}

    public TypeAndQuantity(String type, Long quantity) {
        this.type = type;
        this.quantity = quantity;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}
