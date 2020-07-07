import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User;

  baseUrl = 'http://localhost:1337/users';

  constructor(private http: HttpClient, private router: Router) {}

  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  tryLogin() {
    const token = window.localStorage.getItem('token');

    if (!token) {
      this.router.navigateByUrl('/');
    } else {
      this.http
        .get(`${this.baseUrl}/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .subscribe((response: User) => {
          console.log(response);
          (this.user = response)
        });

      this.router.navigateByUrl('/me');
    }
  }
}
