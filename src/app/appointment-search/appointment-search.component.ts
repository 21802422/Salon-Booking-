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
    // Perform the search logic here, e.g., call an API to fetch the appointment details based on the search term
    // Replace the following code with your actual implementation
    this.appointment = {
      name: 'John Doe',
      date: '2022-01-01'
    };
  }

  cancelAppointment() {
    // Perform the cancel booking logic here
    // Replace the following code with your actual implementation
    console.log('Booking cancelled');
  }

  rescheduleAppointment() {
    // Perform the reschedule logic here
    // Replace the following code with your actual implementation
    console.log('Appointment rescheduled');
  }
}
