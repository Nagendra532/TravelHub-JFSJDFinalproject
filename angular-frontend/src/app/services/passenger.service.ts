
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from '../passenger.model'; // Import your Passenger model

@Injectable({
  providedIn: 'root'
})
export class PassengerService { // Rename the service to PassengerService
  private baseUrl = "http://localhost:9999/passengers"; // Update the base URL

  constructor(private httpClient: HttpClient) {
  }

  getPassengerList(): Observable<Passenger[]> { // Update method name and return type
    return this.httpClient.get<Passenger[]>(`${this.baseUrl}`);
  }

  createPassenger(passenger: Passenger): Observable<Object> { // Update method name and parameter type
    return this.httpClient.post(`${this.baseUrl}`, passenger);
  }

  getPassengerById(id: number): Observable<Passenger> { // Update method name and return type
    return this.httpClient.get<Passenger>(`${this.baseUrl}/${id}`);
  }

  updatePassenger(id: number, passenger: Passenger): Observable<Object> { // Update method name and parameter type
    return this.httpClient.put(`${this.baseUrl}/${id}`, passenger);
  }

  deletePassenger(id: number): Observable<Object> { // Update method name and parameter type
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
