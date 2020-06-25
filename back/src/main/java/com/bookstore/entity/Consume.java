package com.bookstore.entity;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "consume")
public class Consume {
    @Id
    Long orderId;
    Long userId;
    Long totalQuantity;
    Double totalMoney;

    public Consume(){}

    public Consume(Long userId, Long totalQuantity, Double totalMoney) {
        this.userId = userId;
        this.totalQuantity = totalQuantity;
        this.totalMoney = totalMoney;
    }

    public Long getOrderId() { return orderId; }

    public void setOrderId(Long orderId) { this.orderId = orderId; }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getTotalQuantity() { return totalQuantity; }

    public void setTotalQuantity(Long totalQuantity) {
        this.totalQuantity = totalQuantity;
    }

    public Double getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(Double totalMoney) {
        this.totalMoney = totalMoney;
    }
}
