package students.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import students.demo.models.Role;

@Repository
public interface RoleRepository extends CrudRepository<Role,String> {
    
}
