package com.bookstore.utils.multikeys;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

public class BookPriceMultiKeys implements Serializable {
    private Date date;
    private Long id;

    public BookPriceMultiKeys(){
    }

    public BookPriceMultiKeys(Date date, Long id) {
        this.date = date;
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof BookPriceMultiKeys)) return false;
        BookPriceMultiKeys that = (BookPriceMultiKeys) o;
        return Objects.equals(getDate(), that.getDate()) &&
                Objects.equals(getId(), that.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getDate(), getId());
    }
}
