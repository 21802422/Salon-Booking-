import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  email: string = '';
  password: string = '';
  registrationStatus: any;

  constructor(private router: Router, private auth: AuthService, private formBuilder: FormBuilder )
   {  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });}

  login() {
    console.log('Login:', this.email, this.password);
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.loginForm.reset();
          this.router.navigate(['booking-page'])
          
        },
        error:(err)=>{
          alert(err?.error.message)
        }

      })
    }
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }
  goForgotPassword() {
    this.router.navigate(['/forgotPassword']);
    }
}
