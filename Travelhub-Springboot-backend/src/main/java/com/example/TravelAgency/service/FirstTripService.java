package com.example.TravelAgency.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TravelAgency.Repository.FirstTripRepository;
import com.example.TravelAgency.entity.FirstTrip;

import java.util.List;

@Service
public class FirstTripService {
    private final FirstTripRepository firstTripRepository;

    @Autowired
    public FirstTripService(FirstTripRepository firstTripRepository) {
        this.firstTripRepository = firstTripRepository;
    }

    public List<FirstTrip> findAllFirstTrips() {
        return (List<FirstTrip>) firstTripRepository.findAll();
    }

    public FirstTrip findFirstTripById(int id) {
        return firstTripRepository.findById(id).orElse(null);
    }

    public FirstTrip createFirstTrip(FirstTrip firstTrip) {
        return firstTripRepository.save(firstTrip);
    }

    public FirstTrip updateFirstTrip(int id, FirstTrip updatedFirstTrip) {
        FirstTrip existingFirstTrip = firstTripRepository.findById(id).orElse(null);
        if (existingFirstTrip != null) {
            // Update the existing first trip's details
            existingFirstTrip.setName(updatedFirstTrip.getName());
            existingFirstTrip.setAge(updatedFirstTrip.getAge());
            existingFirstTrip.setMobile(updatedFirstTrip.getMobile());
            existingFirstTrip.setLocation(updatedFirstTrip.getLocation());
            existingFirstTrip.setDestination(updatedFirstTrip.getDestination());
            existingFirstTrip.setAmount(updatedFirstTrip.getAmount());
            return firstTripRepository.save(existingFirstTrip);
        }
        return null;
    }

    public void deleteFirstTrip(int id) {
        firstTripRepository.deleteById(id);
    }
}
