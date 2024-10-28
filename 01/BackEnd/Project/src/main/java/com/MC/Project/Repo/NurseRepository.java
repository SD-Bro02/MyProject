package com.MC.Project.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MC.Project.Entity.Nurse;

public interface NurseRepository extends JpaRepository<Nurse, Long> {
    Nurse findByNurseNameOrNurseEmailOrNurseMobileNumber(String nursename, String email, String mobileNumber);
}