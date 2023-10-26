package com.example.TravelAgency.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.TravelAgency.entity.Passenger;
import com.example.TravelAgency.service.PassengerService;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/passengers")
@CrossOrigin(origins = "http://localhost:4200")
public class PassengerController {
    private final PassengerService passengerService;

    @Autowired
    public PassengerController(PassengerService passengerService) {
        this.passengerService = passengerService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Passenger createPassenger(@RequestBody Passenger passenger) {
        return passengerService.createPassenger(passenger);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Passenger> findAllPassengers() {
        return passengerService.findAllPassengers();
    }

    @GetMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Passenger findPassengerById(@PathVariable int id) {
        return passengerService.findPassengerById(id);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Passenger updatePassenger(@PathVariable int id, @RequestBody Passenger passenger) {
        return passengerService.updatePassenger(id, passenger);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePassenger(@PathVariable int id) {
        passengerService.deletePassenger(id);
    }
}
