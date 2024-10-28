package com.MC.Project.Entity;

import jakarta.persistence.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "NurseInfo")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Nurse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long nurseId;
    private String nurseName;
    private String nurseEmail;
    private String nurseMobileNumber;
    private String nursePassword;

}