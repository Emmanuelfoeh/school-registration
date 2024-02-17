package com.example.springbootkeycloak.Model;

import jakarta.persistence.*;

//import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;
    private String customerName;
    private String customerAddress;
   // private List<OrderItem> orderedItems;
    private double totalCost;

    public Order(){

    }

    // Constructor
    public Order(int orderId, String customerName, String customerAddress, Menu menu) {

        this.customerName = customerName;
        this.customerAddress = customerAddress;
        //this.orderedItems = new ArrayList<>();
        this.totalCost = 0.0;
    }

    // Getter and Setter methods

    public Long getOrderId() {
        return orderId;
    }


    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

//    public List<OrderItem> getOrderedItems() {
//        return orderedItems;
//    }
//
//    public void setOrderedItems(List<OrderItem> orderedItems) {
//        this.orderedItems = orderedItems;
//    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }
}
