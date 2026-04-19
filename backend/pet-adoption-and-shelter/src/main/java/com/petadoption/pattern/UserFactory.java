package com.petadoption.pattern;

import com.petadoption.model.User;

public class UserFactory {

    public static User createUser(String role, String name, String email) {
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setRole(role);
        return user;
    }
}