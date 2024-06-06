import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../service/booking.service';
import { Appointment } from '../models/Appointment';
import { MatDialog } from '@angular/material/dialog';
import { InfomartiveComponentComponent } from '../infomartive-component/infomartive-component.component';

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
  price: number = 0;
  appointmentData = {} as Appointment;
  userId: number = 0;
  username: string = '';

  ngOnInit() {
    const localStorageAvailable = typeof localStorage !== 'undefined';

    if (localStorageAvailable) {
      this.username = localStorage.getItem('username') ?? '';
      this.userId = Number(localStorage.getItem('userId'));
    }

    // Populate appointment data based on the form inputs
    this. appointmentData.hairstyleType = this.HairstyleType,
    this. appointmentData.timeSlot = this.TimeSlot,
    this. appointmentData.appointmentDate = new Date(this.AppointmentDate.getFullYear(), this.AppointmentDate.getMonth(), this.AppointmentDate.getDate()),
    this. appointmentData.length = this.Length,
    this. appointmentData.price = this.price,
    this. appointmentData.userId = this.userId
  };

  constructor(private router: Router, private booking: BookingService, private dialog: MatDialog) { }

  // navigateToSearch(){
  //   this.router.navigate(['appointemnt-Search']);
  // }
  bookNow() {
    this.price = this.calculatePrice();
      // Populate appointment data based on the form inputs
      this. appointmentData.hairstyleType = this.HairstyleType,
      this. appointmentData.timeSlot = this.TimeSlot,
      this. appointmentData.appointmentDate = this.AppointmentDate,
      this. appointmentData.length = this.Length,
      this. appointmentData.price = this.price,
      this. appointmentData.userId = this.userId

    this.booking.createAppointment(this.appointmentData).subscribe({
      next: (res) => {
        alert("Appointment Created Successfully");
        console.log(res)
        this.openDialog(this.appointmentData);
        this.reset();
      },
      error: (err) => {
        alert(err?.error.message);
      }
    });
  }
   
  openDialog(appointmentData: any): void {
    const dialogRef = this.dialog.open(InfomartiveComponentComponent, {
      data: appointmentData,
      panelClass: 'InfomartiveComponentComponent'
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the dialog is closed
    });
  }

  reset(){
    this.HairstyleType = '';
    this.TimeSlot = '';
    this.AppointmentDate = new Date();
    this.Length = '';
    this.price = 0;
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
