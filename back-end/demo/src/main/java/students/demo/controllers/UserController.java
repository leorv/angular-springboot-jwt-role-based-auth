package students.demo.controllers;

import javax.annotation.PostConstruct;

// import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import students.demo.models.User;
import students.demo.services.UserService;

@RestController
@RequestMapping(value = "users")
public class UserController {

    @Autowired
    private UserService userService;

    // TODO: disable this later.
    @PostConstruct
    public void initRoleAndUsers() {
        userService.initRoleAndUsers();
    }

    @PostMapping({"/registerNewUser"})
    public User registerUser(@RequestBody User user)    {
        return userService.registerUser(user);
    }

    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('admin')")
    public String forAdmin() {
        return "Esta área da aplicação é acessível somente ao administrador.";
    }

    @GetMapping({"/forUser"})
    @PreAuthorize("hasAnyRole('admin','user')")
    public String forUser() {
        return "Esta área da aplicação é acessível somente ao usuário.";
    }
    
}
