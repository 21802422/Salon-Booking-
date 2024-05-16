import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-search',
  templateUrl: './appointment-search.component.html',
  styleUrl: './appointment-search.component.css'
})
export class AppointmentSearchComponent {
  searchTerm: string="";
  appointment: any;
  search() {
    
    this.appointment = {
      name: 'John Doe',
      date: '2022-01-01'
    };
  }

  cancelAppointment() {
    console.log('Booking cancelled');
  }

  rescheduleAppointment() {
    console.log('Appointment rescheduled');
  }
}
