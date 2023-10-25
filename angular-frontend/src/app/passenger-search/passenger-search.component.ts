import { Component } from '@angular/core';
import { PassengerService } from '../services/passenger.service';
import { Passenger } from '../passenger.model';

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css']
})
export class PassengerSearchComponent {
  id: number;
  passenger: Passenger | null;

  constructor(private passengerService: PassengerService) {
    this.id = 0; // Initialize id
    this.passenger = null; // Initialize passenger
  }

  searchPassenger() {
    this.passengerService.getPassengerById(this.id).subscribe(
      (data: Passenger) => {
        this.passenger = data;
      },
      (error) => {
        console.log(error);
        this.passenger = null;
      }
    );
  }
}
