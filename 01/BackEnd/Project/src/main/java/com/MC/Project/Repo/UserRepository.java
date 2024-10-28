package com.MC.Project.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MC.Project.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserNameOrUserEmailOrUserMobileNumber(String username, String email, String mobileNumber);
}
