package students.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import students.demo.models.Student;
import students.demo.repositories.StudentRepository;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Student registerStudent(Student student){
        return studentRepository.save(student);
    } 

}
