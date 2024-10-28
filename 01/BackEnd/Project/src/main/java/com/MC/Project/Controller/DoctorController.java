package com.MC.Project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.MC.Project.Entity.Doctor;
import com.MC.Project.Service.DoctorService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:3000")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody dLoginRequest dloginRequest) {
        Doctor doctor = doctorService.login(dloginRequest.getDidentifier(), dloginRequest.getDpassword());
        if (doctor != null) {
            return ResponseEntity.ok(doctor);
        }
        return ResponseEntity.status(401).body("Invalid inputs. Please try again.");
    }
}

@NoArgsConstructor
@AllArgsConstructor
@Data
class dLoginRequest {
    private String didentifier; // DoctorName, DoctorEmail, or DoctorMobileNumber
    private String dpassword;

}