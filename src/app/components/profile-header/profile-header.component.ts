import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  get user() {
    return this.userService.getUser();
  }
}
