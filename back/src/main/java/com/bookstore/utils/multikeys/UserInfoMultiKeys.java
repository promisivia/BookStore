package com.bookstore.utils.multikeys;

import com.bookstore.entity.User;

import java.io.Serializable;
import java.util.Objects;

public class UserInfoMultiKeys implements Serializable{
    private User user;
    private String phone;
    private String address;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserInfoMultiKeys)) return false;
        UserInfoMultiKeys that = (UserInfoMultiKeys) o;
        return Objects.equals(getUser(), that.getUser()) &&
                Objects.equals(getPhone(), that.getPhone()) &&
                Objects.equals(getAddress(), that.getAddress());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUser(), getPhone(), getAddress());
    }
}
