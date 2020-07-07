import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { AuthResponse } from 'src/app/types/authResponse.type';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
  form = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  isLoading = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;

    const signupData = {
      username: this.form.username,
      email: this.form.email,
      password: this.form.password,
    };

    this.authService.signup(signupData).subscribe((response: AuthResponse) => {
      this.authService.setToken(response.jwt);
      this.userService.setUser(response.user);
    });

    this.form = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.isLoading = false;

    this.router.navigateByUrl('/me')
  }
}
