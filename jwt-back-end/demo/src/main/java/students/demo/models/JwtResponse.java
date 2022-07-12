package students.demo.models;

public class JwtResponse {
    private User user;
    private String jwtToken;

    public JwtResponse(User user, String jwtToken) {
        this.user = user;
        this.jwtToken = jwtToken;
    }

    /**
     * @return User return the user
     */
    public User getUser() {
        return user;
    }

    /**
     * @param user the user to set
     */
    public void setUser(User user) {
        this.user = user;
    }

    /**
     * @return String return the jwtToken
     */
    public String getJwtToken() {
        return jwtToken;
    }

    /**
     * @param jwtToken the jwtToken to set
     */
    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }

}
