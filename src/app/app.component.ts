import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booking-system';
  showSignup = false;
  constructor(private router: Router) { }

  logout(){
    this.router.navigate(['/login']);
  }
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
  navigateToAppointments(){
    this.router.navigate(['appointemnt-Search']);
  }
}
