package com.MC.Project.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MC.Project.Entity.Nurse;
import com.MC.Project.Repo.NurseRepository;

@Service
public class NurseService {
    @Autowired
    private NurseRepository nurseRepository;

    public Nurse login(String nurseidentifier, String nursepassword) {
        Nurse nurse = nurseRepository.findByNurseNameOrNurseEmailOrNurseMobileNumber(nurseidentifier, nurseidentifier,
                nurseidentifier);
        if (nurse != null && nurse.getNursePassword().equals(nursepassword)) {
            return nurse;
        }
        return null;
    }
}
