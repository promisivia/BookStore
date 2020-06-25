package com.bookstore.serviceimpl;

import com.bookstore.dao.UserDao;
import com.bookstore.dto.ProfileDto;
import com.bookstore.dto.UserDto;
import com.bookstore.entity.User;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

import static com.bookstore.constant.ResponseCode.USER_LOGIN_ERROR;
import static com.bookstore.constant.ResponseCode.USER_NOT_REGISTERED;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Resource
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDto checkUser(String username, String password) {
        UserDto user = userDao.getUserByName(username);
        // does not exist this user
        if(user==null){
            return null;
        }
        if (!bCryptPasswordEncoder.matches(password,user.getPassword()))
            return null;
        return user;
    }

    @Override
    public User saveUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userDao.saveUser(user);
    }

    @Override
    public Boolean hasUser(String username){
        return userDao.hasUser(username);
    }

    @Override
    public List<UserDto> getAllUser(){
        return userDao.getAllUser();
    }

    @Override
    public UserDto setAvatar(ProfileDto avatarDto){
        Long userId = avatarDto.getUserId();
        String avatar = avatarDto.getAvatar();
        userDao.setAvatar(userId, avatar);
        return userDao.getUser(userId);
    }

    @Override
    public void setStatus(Long userId, Boolean status){
        userDao.setStatus(userId, status);
    }
}
