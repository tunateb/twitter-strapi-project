import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    
  }

  goToSignup() {
    this.router.navigateByUrl('/signup');
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
