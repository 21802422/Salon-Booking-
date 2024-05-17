import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../service/booking.service';


@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css'
})
export class BookingPageComponent {
  HairstyleType: string = "";
  TimeSlot: string = "";
  AppointmentDate: Date = new Date();
  Length: string = "";
  price: number | undefined;
  appointmentData: any={};

  ngOnInit() {
    this. appointmentData= {
    // Populate appointment data based on the form inputs
    hairstyleType: this.HairstyleType,
    timeSlot: this.TimeSlot,
    appointmentDate: this.AppointmentDate,
    length: this.Length,
    price: this.price
  };
}

  constructor(private router: Router, private booking: BookingService) { }

  navigateToSearch(){
    this.router.navigate(['appointemnt-Search']);
  }
  bookNow() {
    this.price = this.calculatePrice();
    this. appointmentData= {
      // Populate appointment data based on the form inputs
      hairstyleType: this.HairstyleType,
      timeSlot: this.TimeSlot,
      appointmentDate: this.AppointmentDate,
      length: this.Length,
      price: this.price
    };
    this.booking.createAppointment(this.appointmentData).subscribe({
      next: (res) => {
        alert(res.message);
        this.appointmentData.reset();
      },
      error: (err) => {
        alert(err?.error.message);
      }
    });
  }
  calculatePrice() {
    let price = 0;
  
    // Calculate price based on length
    switch (this.Length) {
      case 'short':
        price += 50;
        break;
      case 'medium':
        price += 70;
        break;
      case 'long':
        price += 100;
        break;
    }
  
    // Calculate price based on hairstyle
    switch (this.HairstyleType) {
      case 'freehand':
        price += 100;
        break;
      case 'straight-back':
        price += 300;
        break;
      case 'straight-up':
        price += 350;
        break;
      case 'knotless-braids':
        price += 400;
        break;
      case 'normal-braids':
        price += 350;
        break;
      case 'tribal-braids':
        price += 350;
        break;
    }
  
    return price;
  }
  
  
}
