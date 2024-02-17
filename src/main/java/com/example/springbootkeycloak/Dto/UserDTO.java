package com.example.springbootkeycloak.Dto;

import java.util.List;
import java.util.Map;

public class UserDTO {

    private String id;

    private String firstname;

    private String lastname;

    private String email;

    private String userName;

    private Map<String, List<String>> attributes;

    private String password;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Map<String, List<String>> getAttributes() {
        return attributes;
    }

//    2th

    public void setAttributes(Map<String, List<String>> attributes) {
        this.attributes = attributes;
    }
}
