package students.demo.services;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import students.demo.models.Role;

import students.demo.models.User;
import students.demo.repositories.RoleRepository;
import students.demo.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        Role role = roleRepository.findById("user").get();

        Set<Role> roles = new HashSet<>();
        roles.add(role);
        user.setRole(roles);

        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        return userRepository.save(user);
    }

    // TODO: Can delete this later..
    public void initRoleAndUsers() {
        Role adminRole = new Role();
        adminRole.setRoleName("admin");
        adminRole.setRoleDescription("admin role");
        roleRepository.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("user");
        userRole.setRoleDescription("user role");
        roleRepository.save(userRole);

        User adminUser = new User();
        adminUser.setUserFirstName("leonardo");
        adminUser.setUserLastName("ruoso vendramini");
        adminUser.setUserName("leonardo");
        adminUser.setUserPassword(getEncodedPassword("admin"));
        Set<Role> adminRoles = new HashSet<Role>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userRepository.save(adminUser);

        // User user = new User();
        // user.setUserFirstName("marla");
        // user.setUserLastName("ruoso vendramini");
        // user.setUserName("marla");
        // user.setUserPassword(getEncodedPassword("12345"));
        // Set<Role> userRoles = new HashSet<Role>();
        // userRoles.add(userRole);
        // user.setRole(userRoles);
        // userRepository.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}
