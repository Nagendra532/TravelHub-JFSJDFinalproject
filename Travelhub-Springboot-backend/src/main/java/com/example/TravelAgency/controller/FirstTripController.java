package com.example.TravelAgency.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.TravelAgency.entity.FirstTrip;
import com.example.TravelAgency.service.FirstTripService;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/firsttrips")
@CrossOrigin(origins = "http://localhost:4200")
public class FirstTripController {
    private final FirstTripService firstTripService;

    @Autowired
    public FirstTripController(FirstTripService firstTripService) {
        this.firstTripService = firstTripService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public FirstTrip createFirstTrip(@RequestBody FirstTrip firstTrip) {
        return firstTripService.createFirstTrip(firstTrip);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<FirstTrip> findAllFirstTrips() {
        return firstTripService.findAllFirstTrips();
    }

    @GetMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public FirstTrip findFirstTripById(@PathVariable int id) {
        return firstTripService.findFirstTripById(id);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public FirstTrip updateFirstTrip(@PathVariable int id, @RequestBody FirstTrip firstTrip) {
        return firstTripService.updateFirstTrip(id, firstTrip);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFirstTrip(@PathVariable int id) {
        firstTripService.deleteFirstTrip(id);
    }
}
