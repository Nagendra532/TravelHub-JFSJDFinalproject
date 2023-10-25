import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PassengerService } from '../services/passenger.service';
import { Passenger } from '../passenger.model';
import { FirstTrip } from '../first-trip.model';
import { FirstTripService } from '../services/firsttrip.service';



@Component({
  selector: 'app-destination-search',
  templateUrl: './destination-search.component.html',
  styleUrls: ['./destination-search.component.css']
})
export class DestinationSearchComponent implements OnInit {
  searchTerm: string = '';
  searchnewTerm: string = '';
  passengers: Passenger[] = [];
  filteredPassengers: Passenger[] = [];
  totalCount: number=0;

  @Output() searchEvent = new EventEmitter<string>();

  

  ngOnInit(): void {
    this.getPassengers();
    this.totalCount = this.passengers.length;
  }

  getPassengers() {
    this.passengerService.getPassengerList().subscribe((data: Passenger[]) => {
      this.passengers = data;
      this.filteredPassengers = data;
    });
  }

  search() {
    this.filteredPassengers = this.passengers.filter((passenger) =>
      passenger.destination.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.searchEvent.emit(this.searchTerm);
  }

  searchname() {
    this.filteredPassengers = this.passengers.filter((passenger) =>
      passenger.name.toLowerCase().includes(this.searchnewTerm.toLowerCase())
    );
    this.searchEvent.emit(this.searchnewTerm);  
  }

  id: number;
  passenger: Passenger | null;

  

  constructor(
    private passengerService: PassengerService,
    private firstTripService: FirstTripService // Inject the FirstTrip service
) {
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



    // Function to add a passenger to the FirstTrip table
    addToNextTrip(passenger: Passenger) {
        // Create a new FirstTrip object based on the Passenger data
        const firstTrip: FirstTrip = {
            id:passenger.id,
            name: passenger.name,
            age: passenger.age,
            mobile:passenger.mobile,
            location: passenger.location,
            destination: passenger.destination,
            amount: passenger.amount,
            
        };

        // Use the FirstTrip service to add to the FirstTrip table
        this.firstTripService.createFirstTrip(firstTrip).subscribe(
            (data) => {
                console.log('Passenger added to FirstTrip:', data);
            },
            (error) => {
                console.error('Error adding passenger to FirstTrip:', error);
            }
        );

       

          
    }

    deletePassenger(id: number) {
      this.passengerService.deletePassenger(id).subscribe(() => { // Specify the type for the parameter or use inference
        console.log('Passenger deleted.')
        this.getPassengers();
      });
    }

    
   
   
}


