import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  get user() {
    return this.userService.getUser();
  }
}
