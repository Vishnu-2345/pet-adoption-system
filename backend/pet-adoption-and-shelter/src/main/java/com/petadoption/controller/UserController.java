package com.petadoption.controller;

import com.petadoption.model.User;
import com.petadoption.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public User register(@RequestParam String role,
                         @RequestParam String name,
                         @RequestParam String email) {
        return service.register(role, name, email);
    }
}