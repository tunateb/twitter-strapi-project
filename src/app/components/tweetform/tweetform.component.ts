import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TweetService } from '../../services/tweet.service';
import { Tweet } from 'src/app/types/tweet.type';

@Component({
  selector: 'app-tweetform',
  templateUrl: './tweetform.component.html',
  styleUrls: ['./tweetform.component.scss'],
})
export class TweetformComponent implements OnInit {
  @Input() formPlaceholder: string;
  @Input() buttonText: string;

  form = {
    text: '',
  };

  constructor(
    private userService: UserService,
    private tweetService: TweetService
  ) {}

  ngOnInit(): void {}

  get user() {
    return this.userService.getUser();
  }

  tweet() {
    const tweetData = {
      text: this.form.text,
      user: this.user,
      userId: this.user.id,
    };

    this.tweetService.postTweet(tweetData).subscribe((response: Tweet) => {
      console.log(response);
      this.tweetService.pushTweet(response);
    });

    this.form = {
      text: '',
    };

    window.location.reload();
  }
}
