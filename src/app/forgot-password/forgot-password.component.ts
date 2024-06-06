import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email: string ="";
  newPassword: string="";
  confirmPassword: string="";
  
 
  constructor(private authService: AuthService, private router: Router, ) { }

  resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService.forgotPassword(this.email, this.newPassword).subscribe(
      () => {
        alert('Password reset successful');
       this.router.navigate(['login']);
        
      }
    );
  }
}

