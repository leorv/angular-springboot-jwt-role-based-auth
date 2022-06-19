package students.demo.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Role {
    @Id
    private String roleName;
    private String roleDescription;

    

    /**
     * @return String return the roleName
     */
    public String getRoleName() {
        return roleName;
    }

    /**
     * @param roleName the roleName to set
     */
    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    /**
     * @return String return the roleDescription
     */
    public String getRoleDescription() {
        return roleDescription;
    }

    /**
     * @param roleDescription the roleDescription to set
     */
    public void setRoleDescription(String roleDescription) {
        this.roleDescription = roleDescription;
    }

}
