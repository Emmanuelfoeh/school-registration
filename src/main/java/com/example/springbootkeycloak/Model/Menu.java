package com.example.springbootkeycloak.Model;

import jakarta.persistence.*;

//import javax.persistence.*;
import java.awt.*;
import java.util.List;

@Entity
@Table(name = "Menu")
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String menuName;

    //private List<MenuItem> items;

    public Menu(){

    }

    public Menu(String menuName, List<MenuItem> items) {
        this.menuName = menuName;
        //this.items = items;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

//    public List<MenuItem> getItems() {
//        return items;
//    }
//
//    public void setItems(List<MenuItem> items) {
//        this.items = items;
//    }
}
