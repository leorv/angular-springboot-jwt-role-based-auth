package students.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import students.demo.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {
    
}
