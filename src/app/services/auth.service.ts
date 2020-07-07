import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:1337/auth';

  constructor(private http: HttpClient) {}

  signup(signupData: object) {
    return this.http.post(`${this.baseUrl}/local/register`, signupData);
  }

  setToken(token: string) {
    window.localStorage.setItem('token', token);
  }
}
