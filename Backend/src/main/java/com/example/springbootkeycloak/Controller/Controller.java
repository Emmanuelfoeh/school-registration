package com.example.springbootkeycloak.Controller;

import com.example.springbootkeycloak.Model.Menu;
import com.example.springbootkeycloak.ServiceImpl.MenuServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class Controller {


    private final MenuServiceImpl menuService;

    @GetMapping
    public String homePage(){
        return "Welcome Page";
    }

    @Autowired
    public Controller(MenuServiceImpl menuService) {
        this.menuService = menuService;
    }

    @GetMapping("/menu/{id}")
    public void getMenu(@RequestParam Long id, MenuServiceImpl menuService){
        Optional<Menu> menu = menuService.findById(id);

        //SpringApplication.run(SpringbootKeycloakApplication.class, args);
        System.out.println("Menu name: " +  menu);
    }
}
