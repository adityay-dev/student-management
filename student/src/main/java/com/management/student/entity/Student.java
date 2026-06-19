package com.management.student.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private  Integer id;
    @NotBlank(message="name is required")
    private String name;
    @NotBlank(message="course is required")
    private String course;
     @Column(unique = true, nullable = false)
    @NotBlank(message="email is required")
    private String email;
     private String gender;
     private LocalDate dob;

}
