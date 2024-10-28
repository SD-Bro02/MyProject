package com.MC.Project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.MC.Project.Entity.Superadmin;
import com.MC.Project.Service.SuperadminService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping("/api/superadmins")
@CrossOrigin(origins = "http://localhost:3000")
public class SuperadminController {
    @Autowired
    private SuperadminService superadminService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody SuperadminLoginRequest SuperadminLoginRequest) {
        Superadmin superadmin = superadminService.login(SuperadminLoginRequest.getSuperadminidentifier(),
                SuperadminLoginRequest.getSuperadminpassword());
        if (superadmin != null) {
            return ResponseEntity.ok(superadmin);
        }
        return ResponseEntity.status(401).body("Invalid inputs. Please try again.");
    }
}

@NoArgsConstructor
@AllArgsConstructor
@Data
class SuperadminLoginRequest {
    private String Superadminidentifier; // SuperadminName, SuperadminEmail, or SuperadminMobileNumber
    private String Superadminpassword;

}