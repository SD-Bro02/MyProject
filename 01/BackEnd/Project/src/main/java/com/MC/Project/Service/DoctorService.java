package com.MC.Project.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MC.Project.Entity.Doctor;
import com.MC.Project.Repo.DoctorRepository;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor login(String didentifier, String dpassword) {
        Doctor doctor = doctorRepository.findByDoctorNameOrDoctorEmailOrDoctorMobileNumber(didentifier, didentifier,
                didentifier);
        if (doctor != null && doctor.getDoctorPassword().equals(dpassword)) {
            return doctor;
        }
        return null;
    }
}