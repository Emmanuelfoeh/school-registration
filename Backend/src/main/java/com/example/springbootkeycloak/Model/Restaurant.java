package com.example.springbootkeycloak.Model;

import jakarta.persistence.*;

//import javax.persistence.*;
import java.awt.*;
import java.util.List;

@Entity
@Table(name = "Restaurant")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String location;
    //private List<MenuItem> menu;

    public Restaurant() {
    }

    public Restaurant(String name, String location, List<MenuItem> menu) {
        this.name = name;
        this.location = location;
        //this.menu = menu;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

//    public List<MenuItem> getMenu() {
//        return menu;
//    }
//
//    public void setMenu(List<MenuItem> menu) {
//        this.menu = menu;
//    }
}
