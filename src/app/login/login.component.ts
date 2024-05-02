import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
registrationStatus: any;

  constructor(private router: Router) { }

  login() {
    // Perform login logic
    console.log('Login:', this.email, this.password);
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}
