package com.MC.Project.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MC.Project.Entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    Doctor findByDoctorNameOrDoctorEmailOrDoctorMobileNumber(String doctorname, String email, String mobileNumber);
}
