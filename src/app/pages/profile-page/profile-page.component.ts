import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  get user() {
    return this.userService.getUser();
  }
}
