package com.bookstore.utils.multikeys;

import java.io.Serializable;
import java.util.Objects;

public class OrderMultiKeys implements Serializable {
    private Long orderId;
    private Long bookId;

    public OrderMultiKeys() {
    }

    public OrderMultiKeys(Long orderId, Long bookId) {
        this.orderId = orderId;
        this.bookId = bookId;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OrderMultiKeys)) return false;
        OrderMultiKeys that = (OrderMultiKeys) o;
        return Objects.equals(getOrderId(), that.getOrderId()) &&
                Objects.equals(getBookId(), that.getBookId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrderId(), getBookId());
    }
}
