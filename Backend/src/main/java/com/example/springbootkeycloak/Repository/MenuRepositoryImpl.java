package com.example.springbootkeycloak.Repository;

import com.example.springbootkeycloak.Model.Menu;
import org.springframework.stereotype.Repository;
import jakarta.persistence.*;
//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;
import java.util.Optional;

@Repository
public class MenuRepositoryImpl implements MenuRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Optional<Menu> findById(Long id) {
        return Optional.ofNullable(entityManager.find(Menu.class, id));
    }
}
