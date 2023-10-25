import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstTrip } from '../first-trip.model';
import { FirstTripService } from '../services/firsttrip.service';

@Component({
  selector: 'app-first-trip-details',
  templateUrl: './first-trip-details.component.html',
  styleUrls: ['./first-trip-details.component.css']
})
export class FirstTripDetailsComponent implements OnInit {

  firsttrip: FirstTrip = {
    id: 0, // Provide a suitable default value or null for each property
    name: '',
    age: 0,
    mobile:'',
    location: '',
    destination: '',
    amount: 0
  };

  constructor(
    private route: ActivatedRoute,
    private firsttripService: FirstTripService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.firsttripService.getFirstTripById(id).subscribe((data: FirstTrip) => {
      this.firsttrip = data;
    });
  }
}
