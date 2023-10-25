import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassengerService } from '../services/passenger.service';
import { Passenger } from '../passenger.model';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details-component.component.html',
  styleUrls: ['./passenger-details-component.component.css']
})
export class PassengerDetailsComponentComponent implements OnInit {
  passenger: Passenger = {
    id: 0,
    name: '',
    age: 0,
    mobile: '',
    location: '',
    destination: '',
    date: new Date(), // Provide a default Date object
    amount: 0
  };

  constructor(
    private route: ActivatedRoute,
    private passengerService: PassengerService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.passengerService.getPassengerById(id).subscribe((data: Passenger) => {
      data.date = new Date(data.date); // Parse the date string to a Date object
      this.passenger = data;
    });
  }
}
