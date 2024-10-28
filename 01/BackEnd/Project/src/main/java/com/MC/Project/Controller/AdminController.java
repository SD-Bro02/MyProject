package com.MC.Project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.MC.Project.Entity.Admin;
import com.MC.Project.Service.AdminService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping("/api/admins")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AdminLoginRequest adminloginRequest) {
        Admin admin = adminService.login(adminloginRequest.getAdminidentifier(), adminloginRequest.getAdminpassword());
        if (admin != null) {
            return ResponseEntity.ok(admin);
        }
        return ResponseEntity.status(401).body("Invalid inputs. Please try again.");
    }
}

@NoArgsConstructor
@AllArgsConstructor
@Data
class AdminLoginRequest {
    private String adminidentifier; // AdminName, AdminEmail, or AdminMobileNumber
    private String adminpassword;

}