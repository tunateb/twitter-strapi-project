import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Twitter';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.tryLogin();
  }
}
