package com.MC.Project.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MC.Project.Entity.Superadmin;
import com.MC.Project.Repo.SuperadminRepository;

@Service
public class SuperadminService {
    @Autowired
    private SuperadminRepository superadminRepository;

    public Superadmin login(String Superadminidentifier, String Superadminpassword) {
        Superadmin superadmin = superadminRepository
                .findBySuperadminNameOrSuperadminEmailOrSuperadminMobileNumber(Superadminidentifier,
                        Superadminidentifier, Superadminidentifier);
        if (superadmin != null && superadmin.getSuperadminPassword().equals(Superadminpassword)) {
            return superadmin;
        }
        return null;
    }
}