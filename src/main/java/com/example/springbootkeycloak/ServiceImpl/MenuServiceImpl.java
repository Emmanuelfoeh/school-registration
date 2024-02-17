package com.example.springbootkeycloak.ServiceImpl;

import com.example.springbootkeycloak.Model.Menu;
import com.example.springbootkeycloak.Repository.MenuRepository;
import com.example.springbootkeycloak.Service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MenuServiceImpl implements MenuService {
    private final MenuRepository menuRepository;

    @Autowired
    public MenuServiceImpl(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    @Override
    public Optional<Menu> findById(Long id) {
        return menuRepository.findById(id);
    }
}
