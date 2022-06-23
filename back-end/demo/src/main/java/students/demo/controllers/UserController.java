package students.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
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

    @PostMapping()
    public User registerUser(@RequestBody User user)    {
        return userService.registerUser(user);
    }

    @GetMapping({"/forAdmin"})
    public String forAdmin() {
        return "Esta área da aplicação é acessível somente ao administrador.";
    }

    @GetMapping({"/forUser"})
    public String forUser() {
        return "Esta área da aplicação é acessível somente ao usuário.";
    }

    // TODO: Criar users, roles e user_roles no DB.
}