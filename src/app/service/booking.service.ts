import { HttpBackend, HttpClient,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl:string = "https://localhost:7260/api/"
  constructor(private http: HttpClient , ) { }

  createAppointment(appointment: Appointment): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}appointment`, appointment);
  }
}
