package com.MC.Project.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MC.Project.Entity.Superadmin;

public interface SuperadminRepository extends JpaRepository<Superadmin, Long> {
    Superadmin findBySuperadminNameOrSuperadminEmailOrSuperadminMobileNumber(String superadminname, String email,
            String mobileNumber);
}