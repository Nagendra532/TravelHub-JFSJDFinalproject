import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirstTrip } from '../first-trip.model'; // Import your FirstTrip model

@Injectable({
  providedIn: 'root'
})
export class FirstTripService { // Rename the service to FirstTripService
  private baseUrl = "http://localhost:9999/firsttrips"; // Update the base URL

  constructor(private httpClient: HttpClient) {
  }

  getFirstTripList(): Observable<FirstTrip[]> { // Update method name and return type
    return this.httpClient.get<FirstTrip[]>(`${this.baseUrl}`);
  }

  createFirstTrip(firstTrip: FirstTrip): Observable<Object> { // Update method name and parameter type
    return this.httpClient.post(`${this.baseUrl}`, firstTrip);
  }

  getFirstTripById(id: number): Observable<FirstTrip> { // Update method name and return type
    return this.httpClient.get<FirstTrip>(`${this.baseUrl}/${id}`);
  }

  updateFirstTrip(id: number, firstTrip: FirstTrip): Observable<Object> { // Update method name and parameter type
    return this.httpClient.put(`${this.baseUrl}/${id}`, firstTrip);
  }

  deleteFirstTrip(id: number): Observable<Object> { // Update method name and parameter type
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
