package com.example.springbootkeycloak.Repository;

import com.example.springbootkeycloak.Model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MenuRepository{
    Optional<Menu> findById(Long id);
}
