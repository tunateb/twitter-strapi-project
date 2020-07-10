import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  get user() {
    return this.userService.getUser();
  }

  editProfile() {
    this.router.navigateByUrl('/editprofile');
  }

  editAccount() {
    this.router.navigateByUrl('/editaccount');
  }
}
