import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/types/tweet.type';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss'],
})
export class TweetCardComponent implements OnInit {
  @Input() tweet;
  @Input() isComment: boolean = false;

  baseUrl = 'http://localhost:1337';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToTweetDetails() {
    this.router.navigateByUrl(`/tweets/${this.tweet.id}`);
  }
}
