package students.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import students.demo.models.Student;
import students.demo.services.StudentService;

@RestController
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/registerStudent")
    public Student registerStudent(@RequestBody Student student) {
        return studentService.registerStudent(student);
    }

}
