package com.MC.Project.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MC.Project.Entity.User;
import com.MC.Project.Repo.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User login(String identifier, String password) {
        User user = userRepository.findByUserNameOrUserEmailOrUserMobileNumber(identifier, identifier, identifier);
        if (user != null && user.getUserPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
