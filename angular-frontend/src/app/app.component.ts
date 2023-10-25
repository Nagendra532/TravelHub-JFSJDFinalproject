
import { Component, OnInit } from '@angular/core';
import { PassengerService } from './services/passenger.service';
import { Passenger } from './passenger.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  passengers: Passenger[] = [];
  filteredPassengers: Passenger[] = [];
  searchDestination: string = '';

  constructor(private passengerService: PassengerService,public authService: AuthService) {}

  ngOnInit(): void {
    this.passengerService.getPassengerList().subscribe(data => {
      this.passengers = data;
      this.filteredPassengers = data;
    });
  }

  onSearch(destination: string) {
    // Filter passengers by destination
    this.filteredPassengers = this.passengers.filter(passenger => {
      return passenger.destination.toLowerCase().includes(destination.toLowerCase());
    });
  }
  
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }

  isUser: boolean = false; // Set this based on the user's role or authentication status
  isAdmin: boolean = false; // Set this based on the user's role or authentication status
  
  
  
  logout() {
    this.authService.logout(); // Call the logout method from AuthService
    // You can also add a redirection to the login page here if needed
  }
  
}
