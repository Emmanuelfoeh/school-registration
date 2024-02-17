package com.example.springbootkeycloak.Model;
import jakarta.persistence.*;

//import javax.persistence.*;

@Entity
@Table(name = "MenuItem")
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String itemName;
    private double price;

    private Long menuId;

    // Constructor
    public MenuItem(){}
    public MenuItem(String itemName, double price) {
        this.itemName = itemName;
        this.price = price;
    }

    // Getter and Setter methods

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "MenuItem{" +
                "itemName='" + itemName + '\'' +
                ", price=" + price +
                '}';
    }
}
