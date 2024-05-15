import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  name: string = '';
  email: string = '';
  cellphone: string = '';
  password: string = '';
  registrationStatus: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cellphone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required]
    });
  }

  signup() {
    if (this.signUpForm.valid) {
      console.log('Sign Up:', this.name, this.email, this.cellphone, this.password);
      this.registrationStatus = 'Successfully registered';
  
      this.auth.signup(this.signUpForm.value).subscribe({
        next: (res) => {
          alert(res.message);
          this.signUpForm.reset();
          this.router.navigate(['login']);
        },
        error: (err) => {
          alert(err?.error.message);
        }
      });
    } else {
      // Form is not valid, display an error message or prevent the API call
      alert('Please fill in all the required fields.');
    }
  }
  
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
