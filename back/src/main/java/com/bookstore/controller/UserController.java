package com.bookstore.controller;

import com.bookstore.dto.ProfileDto;
import com.bookstore.dto.UserDto;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value="/getUsers")
    public List<UserDto> getAllUser(){
        return userService.getAllUser();
    }

    @RequestMapping(value="/setAvatar")
    public @ResponseBody
    UserDto setAvatar(ProfileDto avatar){
        return userService.setAvatar(avatar);
    }

    @RequestMapping(value="/admin/user/disable")
    public void disable(@RequestParam("id") Long id){
        userService.setStatus(id,true);
    }

    @RequestMapping(value="/admin/user/enable")
    public void enable(@RequestParam("id") Long id){
        userService.setStatus(id,false);
    }
}
