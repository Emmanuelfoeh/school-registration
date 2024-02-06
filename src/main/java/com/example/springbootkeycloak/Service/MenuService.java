package com.example.springbootkeycloak.Service;

import com.example.springbootkeycloak.Model.Menu;

import java.util.Optional;

public interface MenuService {
    Optional<Menu> findById(Long Id);
}
