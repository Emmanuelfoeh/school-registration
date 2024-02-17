package com.example.springbootkeycloak.Model;

import jakarta.persistence.*;

//import javax.persistence.*;

@Entity
@Table(name = "OrderItem")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String itemName;

    //private MenuItem menuItem;
    private int quantity;

    // Constructor

    public OrderItem(){}
    public OrderItem(MenuItem menuItem, int quantity) {
        //this.menuItem = menuItem;
        this.quantity = quantity;
    }

    // Getter and Setter methods

//    public MenuItem getMenuItem() {
//        return menuItem;
//    }
//
//    public void setMenuItem(MenuItem menuItem) {
//        this.menuItem = menuItem;
//    }


    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    // Method to calculate the total cost for this order item
//    public double getTotalCost() {
//        return menuItem.getPrice() * quantity;
//    }
//
//    @Override
//    public String toString() {
//        return "OrderItem{" +
//                "menuItem=" + menuItem +
//                ", quantity=" + quantity +
//                '}';
//    }
}
