import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerService } from '../services/passenger.service';
import { Passenger } from '../passenger.model';

@Component({
  selector: 'app-passenger-update',
  templateUrl: './passenger-update.component.html',
  styleUrls: ['./passenger-update.component.css']
})
export class PassengerUpdateComponent implements OnInit {
  id!: number;
  passenger: Passenger = new Passenger();

  constructor(private passengerService: PassengerService,
    private route: ActivatedRoute, private router: Router) { }

  private getPassengerById() {
    this.id = this.route.snapshot.params['id'];
    this.passengerService.getPassengerById(this.id).subscribe({
      next: (data: Passenger) => {
        this.passenger = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getPassengerById();
  }

  updatePassenger() {
    this.passengerService.updatePassenger(this.id, this.passenger).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToPassengerList();
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
    this.updatePassenger();
  }
}
