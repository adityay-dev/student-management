package com.management.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.student.entity.Student;
import com.management.student.repository.StudentRepo;

@Service
public class StudentService {
    @Autowired
private StudentRepo repo;

//add method
public Student add(Student student){
 return  repo.save(student);
}

//get all 

 public List<Student> getAll(){
    return repo.findAll();
 }

 // Get Student By Id
    public Student getById(Integer id) {
        return repo.findById(id).orElse(null);
    }
   
    
    // Update Student
    public Student update(Integer id, Student student) {
        Student existing = repo.findById(id).orElse(null);

        if (existing != null) {
            existing.setName(student.getName());
            existing.setCourse(student.getCourse());
            existing.setEmail(student.getEmail());

            return repo.save(existing);
        }

        return null;
    }
     

     // Delete Student
    public String delete(Integer id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return "Student Deleted Successfully";
        }
        return "Student Not Found";
    }
     public long count() {
        return repo.count();
    }

}


