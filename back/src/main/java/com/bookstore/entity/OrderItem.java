package com.bookstore.entity;

import com.bookstore.utils.multikeys.OrderMultiKeys;
import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;

@Entity
@Table(name = "ORDER_ITEM")
@IdClass(OrderMultiKeys.class)
@JsonIgnoreProperties(value = {"order","orderId","bookId","hibernateLazyInitializer","fieldHandler"})
public class OrderItem extends BaseItem {
    private Long orderId;
    private Long bookId;

    public OrderItem() {}

    public OrderItem(Long orderId, Long bookId, Long quantity) {
        this.orderId = orderId;
        this.bookId = bookId;
        this.quantity = quantity;
    }

    @Id
    @Column(name="order_id",insertable = false, updatable = false)
    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    @Id
    @Column(name="book_id", insertable = false, updatable = false)
    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }
}
