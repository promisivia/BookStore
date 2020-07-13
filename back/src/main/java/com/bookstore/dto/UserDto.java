package com.bookstore.dto;

import com.bookstore.document.Avatar;
import com.bookstore.entity.User;

public class UserDto {
    private Long userId;
    private String username;
    private String password;
    private String email;
    private String type;
    private Boolean disable;
    private String avatar;

    public UserDto(User user, Avatar avatar) {
        this.userId = user.getUserId();
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.email = user.getEmail();
        this.type = user.getType();
        this.disable = user.getDisable();
        if(avatar!=null) this.avatar=avatar.getAvatar();
    }

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

    public void setDisable(Boolean disable) {
        this.disable = disable;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
