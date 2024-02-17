package com.example.springbootkeycloak.ServiceImpl;

import com.example.springbootkeycloak.Model.Restaurant;
import com.example.springbootkeycloak.Repository.RestaurantRepository;
import com.example.springbootkeycloak.Service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    private final RestaurantRepository restaurantRepository;

    @Autowired
    public RestaurantServiceImpl(RestaurantRepository restaurantRepository){
        this.restaurantRepository = restaurantRepository;
    }

    @Override
    public List<Restaurant> getRestaurantByName(String name){
        return restaurantRepository.findByName(name);
    }

}
