package com.MC.Project.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MC.Project.Entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin findByAdminNameOrAdminEmailOrAdminMobileNumber(String adminname, String email, String mobileNumber);
}
