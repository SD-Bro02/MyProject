package com.MC.Project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.MC.Project.Entity.Nurse;
import com.MC.Project.Service.NurseService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping("/api/nurses")
@CrossOrigin(origins = "http://localhost:3000")
public class NurseController {
    @Autowired
    private NurseService nurseService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody NurseLoginRequest nurseloginRequest) {
        Nurse nurse = nurseService.login(nurseloginRequest.getNurseidentifier(), nurseloginRequest.getNursepassword());
        if (nurse != null) {
            return ResponseEntity.ok(nurse);
        }
        return ResponseEntity.status(401).body("Invalid inputs. Please try again.");
    }
}

@NoArgsConstructor
@AllArgsConstructor
@Data
class NurseLoginRequest {
    private String nurseidentifier; // NurseName, NurseEmail, or NurseMobileNumber
    private String nursepassword;

}