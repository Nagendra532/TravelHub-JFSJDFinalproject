import { Component, OnInit } from '@angular/core';
import { FirstTripService } from '../services/firsttrip.service';
import { FirstTrip } from '../first-trip.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-first-trip-list',
  templateUrl: './first-trip-list.component.html',
  styleUrls: ['./first-trip-list.component.css']
})
export class FirstTripListComponent implements OnInit {
  firstTrips: FirstTrip[] = [];
  totalCount: number=0;
  constructor(private firstTripService: FirstTripService, private router: Router) {}
  
  

  ngOnInit(): void {
    
    this.getFirstTrips();
    this.totalCount = this.firstTrips.length;
  }

  getFirstTrips() {
    this.firstTripService.getFirstTripList().subscribe((data: FirstTrip[]) => {
      this.firstTrips = data;
    });
  }
  deleteFirstTrip(id: number) {
    this.firstTripService.deleteFirstTrip(id).subscribe(() => { // Specify the type for the parameter or use inference
      console.log('Passenger deleted.')
      this.getFirstTrips();
    });
  }

  viewFirstTrip(id: number) {
    // Here, you can navigate to a new route or open a modal to display passenger details.
    // For simplicity, let's assume you want to navigate to a new route.
    this.router.navigate(['view-firsttrip', id]);
}

messageStatus: string = '';
sendMessage() {
 
  this.messageStatus = 'Message sent successfully!';
}




  

}
