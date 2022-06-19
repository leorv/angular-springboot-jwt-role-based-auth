package students.demo.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import students.demo.models.Role;
import students.demo.services.RoleService;

@RestController
@RequestMapping(value = "roles")
public class RoleController {

    private RoleService roleService;

    public RoleController(RoleService roleService){
        this.roleService = roleService;
    }

    @PostMapping("/create")
    public Role createNewRole(@RequestBody Role role){
        return roleService.createNewRole(role);
    }

}
