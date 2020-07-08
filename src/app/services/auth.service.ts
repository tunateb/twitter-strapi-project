import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:1337/auth';

  constructor(private http: HttpClient, private router: Router) {}

  signup(signupData: object) {
    return this.http.post(`${this.baseUrl}/local/register`, signupData);
  }

  login(loginData: object) {
    return this.http.post(`${this.baseUrl}/local`, loginData);
  }

  logout() {
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

  setToken(token: string) {
    window.localStorage.setItem('token', token);
  }
}
