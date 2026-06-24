package com.management.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.management.student.entity.Student;
import com.management.student.service.StudentService;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "https://divine-simplicity-production.up.railway.app")
public class StudentCon {

    @Autowired
    private StudentService service;
    // Add Student

    @PostMapping
    public Student add(@RequestBody Student student) {
        return service.add(student);
    }

    // Get All Students
    @GetMapping
    public List<Student> getAll() {
        return service.getAll();
    }

    // count all
    @GetMapping("/count")
    public long getStudentCount() {
        return service.count();
    }

    // Get Student By Id
    @GetMapping("/{id}")
    public Student getById(@PathVariable Integer id) {
        return service.getById(id);
    }

    // Update Student
    @PutMapping("/{id}")
    public Student update(@PathVariable Integer id,
            @RequestBody Student student) {
        return service.update(id, student);
    }

    // Delete Student
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id) {
        return service.delete(id);
    }
}
