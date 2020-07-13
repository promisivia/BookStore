package com.bookstore.controller;

import com.bookstore.dto.UserDto;
import com.bookstore.entity.User;
import com.bookstore.service.UserService;
import com.bookstore.utils.response.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.bookstore.constant.ResponseCode.*;

@RestController
public class AuthController {
    @Autowired
    private UserService userService;

    @RequestMapping(value="/login")
    public HttpResponse login(@RequestParam("username") String username,
                              @RequestParam("password") String password){
        UserDto user = userService.checkUser(username, password);
        if (user==null){
            return HttpResponse.fail(USER_LOGIN_ERROR);
        }else if(user.getDisable()){
            return HttpResponse.fail(USER_ACCOUNT_FORBIDDEN);
        }
        return HttpResponse.success(user);
    }

    @PostMapping(value="/register")
    public HttpResponse addUser(@RequestParam("email") String email,
                                @RequestParam("password") String password,
                                @RequestParam("username") String username){
        if(userService.hasUser(username))
            return HttpResponse.fail(USER_ALREADY_REGISTERED);
        else {
            User user = userService.saveUser(new User(username, password, email));
            return HttpResponse.success(user);
        }
    }
}
