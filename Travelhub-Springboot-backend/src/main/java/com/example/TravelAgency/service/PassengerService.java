package com.example.TravelAgency.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TravelAgency.Repository.PassengerRepository;
import com.example.TravelAgency.entity.Passenger;

import java.util.List;

@Service
public class PassengerService {
    private final PassengerRepository passengerRepository;

    @Autowired
    public PassengerService(PassengerRepository passengerRepository) {
        this.passengerRepository = passengerRepository;
    }

    public List<Passenger> findAllPassengers() {
        return (List<Passenger>) passengerRepository.findAll();
    }

    public Passenger findPassengerById(int id) {
        return passengerRepository.findById(id).orElse(null);
    }

    public Passenger createPassenger(Passenger passenger) {
        return passengerRepository.save(passenger);
    }

    public Passenger updatePassenger(int id, Passenger updatedPassenger) {
        Passenger existingPassenger = passengerRepository.findById(id).orElse(null);
        if (existingPassenger != null) {
            // Update the existing passenger's details
            existingPassenger.setName(updatedPassenger.getName());
            existingPassenger.setAge(updatedPassenger.getAge());
            existingPassenger.setDate(updatedPassenger.getDate());
            existingPassenger.setMobile(updatedPassenger.getMobile());
            existingPassenger.setLocation(updatedPassenger.getLocation());
            existingPassenger.setDestination(updatedPassenger.getDestination());
            existingPassenger.setAmount(updatedPassenger.getAmount());
            return passengerRepository.save(existingPassenger);
        }
        return null;
    }

    public void deletePassenger(int id) {
        passengerRepository.deleteById(id);
    }
}
