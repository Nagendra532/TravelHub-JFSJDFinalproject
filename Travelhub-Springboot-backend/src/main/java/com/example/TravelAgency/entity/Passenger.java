package com.example.TravelAgency.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "TBL_PASSENGERS")
public class Passenger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Column
    private String name;
    
    @Column
    private int age;
    
    @Column
    private String date;
    
    @Column
    private String mobile;
    
    @Column
    private String location;
    
    @Column
    private String destination;
    
    @Column
    private double amount;

	public Passenger() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Passenger(int id, String name, int age, String date, String mobile, String location, String destination, double amount) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.date= date;
		this.mobile=mobile;
		this.location = location;
		this.destination = destination;
		this.amount = amount;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}
    
	
	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	
	public String getMobile() {
		return mobile;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Passenger [id=" + id + ", name=" + name + ", age=" + age + ", date=" + date + ", mobile=" + mobile
				+ ", location=" + location + ", destination=" + destination + ", amount=" + amount + "]";
	}

	
	

    
    
}
