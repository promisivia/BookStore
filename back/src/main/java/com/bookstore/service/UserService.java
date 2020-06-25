package com.bookstore.service;
import com.bookstore.dto.ProfileDto;
import com.bookstore.dto.UserDto;
import com.bookstore.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    UserDto checkUser(String username, String password);
    User saveUser(User user);
    Boolean hasUser(String username);
    List<UserDto> getAllUser();
    UserDto setAvatar(ProfileDto avatar);
    void setStatus(Long userId, Boolean status);
}
