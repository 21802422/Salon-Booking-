import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email: string ="";
  newPassword: string="";
  confirmPassword: string="";

  resetPassword() {
    // Add your password reset logic here
    console.log('Email:', this.email);
    console.log('New Password:', this.newPassword);
    console.log('Confirm Password:', this.confirmPassword);
  }
}
