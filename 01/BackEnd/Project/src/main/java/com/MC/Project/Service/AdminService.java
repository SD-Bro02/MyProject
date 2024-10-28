package com.MC.Project.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MC.Project.Entity.Admin;
import com.MC.Project.Repo.AdminRepository;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public Admin login(String adminidentifier, String adminpassword) {
        Admin admin = adminRepository.findByAdminNameOrAdminEmailOrAdminMobileNumber(adminidentifier, adminidentifier,
                adminidentifier);
        if (admin != null && admin.getAdminPassword().equals(adminpassword)) {
            return admin;
        }
        return null;
    }
}