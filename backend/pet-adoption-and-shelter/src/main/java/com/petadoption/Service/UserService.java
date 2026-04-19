package com.petadoption.Service;

import com.petadoption.model.User;
import com.petadoption.pattern.UserFactory;
import com.petadoption.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User register(String role, String name, String email) {
        User user = UserFactory.createUser(role, name, email);
        return repo.save(user);
    }
}