import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassengerService } from '../services/passenger.service';
import { Passenger } from '../passenger.model';

@Component({
  selector: 'app-passenger-create',
  templateUrl: './passenger-create.component.html',
  styleUrls: ['./passenger-create.component.css']
})
export class PassengerCreateComponent implements OnInit {
  passenger: Passenger = new Passenger();

  constructor(private passengerService: PassengerService, private router: Router) { }

  ngOnInit(): void {
  }

  savePassenger() {
    this.passengerService.createPassenger(this.passenger).subscribe({
      next: (data) => {
        console.log(data);
        // this.redirectToPassengerList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToPassengerList() {
    this.router.navigate(['/passengers']);
  }

  onSubmit() {
    console.log(this.passenger);
    this.savePassenger();
  }

  messageStatus: string = '';
sendMessage() {
 
  this.messageStatus = 'Registered successfully!';
}
}
