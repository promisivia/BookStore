package com.bookstore.utils.multikeys;

import java.io.Serializable;
import java.util.Objects;

public class CartMultiKeys implements Serializable {
    private Long userId;
    private Long bookId;

    public CartMultiKeys() {
    }

    public CartMultiKeys(Long userId, Long bookId) {
        this.userId = userId;
        this.bookId = bookId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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
        if (!(o instanceof CartMultiKeys)) return false;
        CartMultiKeys that = (CartMultiKeys) o;
        return Objects.equals(getUserId(), that.getUserId()) &&
                Objects.equals(getBookId(), that.getBookId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUserId(), getBookId());
    }
}
