package com.example.springbootkeycloak.Service;

import com.example.springbootkeycloak.Model.Restaurant;

import java.util.List;

public interface RestaurantService {

    List<Restaurant> getRestaurantByName(String name);
}
