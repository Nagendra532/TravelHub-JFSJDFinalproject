package com.example.TravelAgency.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.TravelAgency.entity.FirstTrip;

@Repository
public interface FirstTripRepository extends CrudRepository<FirstTrip, Integer> {
    // You can add custom query methods here if needed
}
