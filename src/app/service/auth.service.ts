import { HttpBackend, HttpClient, provideHttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl:string = "https://localhost:7260/api/User/"
  constructor(private http: HttpClient , private httpBackend: HttpBackend) { this.http = new HttpClient(httpBackend); }

  signup(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj);
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }
  forgotPassword(email: string, newPassword: string) {
    const resetPasswordData = {
      email: email,
      password: newPassword
    };

    return this.http.post<any>(`${this.baseUrl}forgotpassword`, resetPasswordData);
  }
}

