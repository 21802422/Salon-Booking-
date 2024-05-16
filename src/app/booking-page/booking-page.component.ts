import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css'
})
export class BookingPageComponent {
  constructor(private router: Router) { }

  navigateToSearch(){
    this.router.navigate(['appointemnt-Search']);
  }
}
