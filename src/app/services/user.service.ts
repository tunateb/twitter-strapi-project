import { Injectable } from '@angular/core';
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;

  constructor() {}

  setUser(user: User) {
    this.user = user;
  }
}
