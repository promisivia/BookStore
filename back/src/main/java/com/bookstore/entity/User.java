package com.bookstore.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;

@Entity
@Table(name = "user")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class User {
    private Long userId;
    private String username;
    private String password;
    private String email;
    private String type;
    private Boolean disable;

    public User() {}

    public User(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.type = "NORMAL";
        this.disable = false;
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Boolean getDisable() {
        return disable;
    }

    public void setDisable(Boolean status) {
        this.disable = status;
    }
}
