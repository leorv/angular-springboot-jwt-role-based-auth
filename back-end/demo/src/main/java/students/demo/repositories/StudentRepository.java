package students.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import students.demo.models.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, Integer> {
    
}
