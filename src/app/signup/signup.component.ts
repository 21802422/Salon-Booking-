import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = "";
  email: string = "";
  cellphone: string = "";
  password: string = "";
  registrationStatus: string ="";


  constructor(private router: Router) { }

  signup() {
    // Perform signup logic
    console.log('Sign Up:', this.name, this.email, this.cellphone, this.password);
    this.registrationStatus = "Successfully registered";
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
