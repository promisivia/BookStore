package com.bookstore.daoimpl;

import com.bookstore.dao.UserDao;
import com.bookstore.dto.UserDto;
import com.bookstore.document.Avatar;
import com.bookstore.entity.User;
import com.bookstore.repository.AvatarRepository;
import com.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserDaoImpl implements UserDao {
    UserRepository userRepository;
    AvatarRepository avatarRepository;

    @Autowired
    public UserDaoImpl(UserRepository userRepository, AvatarRepository avatarRepository){
        this.userRepository = userRepository;
        this.avatarRepository = avatarRepository;
    }

    @Override
    public UserDto getUser(Long userId){
        User user = userRepository.findByUserId(userId);
        Avatar avatar = avatarRepository.getById(userId);
        return new UserDto(user,avatar);
    }

    @Override
    public List<UserDto> getAllUser(){
        List<User> userList = userRepository.findAll();
        List<UserDto> res = new ArrayList<>();
        for(User user:userList){
            Avatar avatar = avatarRepository.getById(user.getUserId());
            res.add(new UserDto(user,avatar));
        }
        return res;
    }

    @Override
    public User saveUser(User user){
        return userRepository.save(user);
    }

    @Override
    public Boolean hasUser(String username){
        return userRepository.findByUsername(username) != null;
    }

    @Override
    public UserDto getUserByName(String username){
        User user = userRepository.findByUsername(username);
        if(user==null) return null;
        Avatar avatar = avatarRepository.getById(user.getUserId());
        return new UserDto(user,avatar);
    }

    @Override
    public void setAvatar(Long userId, String avatar){
        avatarRepository.save(new Avatar(userId,avatar));
    }

    @Override
    public void setStatus(Long userId, Boolean status){
        userRepository.setStatus(userId,status);
    }
}
