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
@Table(name = "SuperadminInfo")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Superadmin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long superadminId;
    private String superadminName;
    private String superadminEmail;
    private String superadminMobileNumber;
    private String superadminPassword;

}