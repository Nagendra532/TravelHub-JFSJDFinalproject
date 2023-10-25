import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassengerService } from '../services/passenger.service'; // Check the import path and name
import { Passenger } from '../passenger.model';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
  passengers: Passenger[] = []; // Initialize the array

  constructor(private passengerService: PassengerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getPassengers();
  }

  private getPassengers() {
    this.passengerService.getPassengerList().subscribe((data: Passenger[]) => { // Specify the type for 'data'
      this.passengers = data;
    });
  }

  updatePassenger(id: number) {
    this.router.navigate(['update-passenger', id]);
  }

  deletePassenger(id: number) {
    this.passengerService.deletePassenger(id).subscribe(() => { // Specify the type for the parameter or use inference
      console.log('Passenger deleted.')
      this.getPassengers();
    });
  }

  viewPassengerDetails(id: number) {
    // Here, you can navigate to a new route or open a modal to display passenger details.
    // For simplicity, let's assume you want to navigate to a new route.
    this.router.navigate(['view-passenger', id]);
}

}
