package com.bookstore.dao;

import com.bookstore.dto.UserDto;
import com.bookstore.entity.User;

import java.util.List;

public interface UserDao {
    UserDto getUser(Long userId);
    List<UserDto> getAllUser();
    User saveUser(User user);
    Boolean hasUser(String username);
    UserDto getUserByName(String username);
    void setAvatar(Long userId, String avatar);
    void setStatus(Long userId, Boolean status);
}
