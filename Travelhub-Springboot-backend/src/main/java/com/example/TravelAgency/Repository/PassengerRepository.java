package com.example.TravelAgency.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.TravelAgency.entity.Passenger;

@Repository
public interface PassengerRepository extends CrudRepository<Passenger, Integer> {
    // You can add custom query methods here if needed
}
