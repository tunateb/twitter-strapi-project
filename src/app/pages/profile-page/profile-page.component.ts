import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TweetService } from '../../services/tweet.service';
import { Tweet } from 'src/app/types/tweet.type';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private tweetService: TweetService
  ) {}

  ngOnInit(): void {}

  get user() {
    return this.userService.getUser();
  }

  get userTweets() {
    return this.tweetService
      .getTweets()
      .filter((tweet: Tweet) => tweet.userId === this.user.id).sort();
  }
}
