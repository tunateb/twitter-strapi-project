import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private tweetService: TweetService) {}

  ngOnInit(): void {
    this.tweetService.getTweetFlow();
  }

  get tweets() {
    return this.tweetService.getTweets();
  }
}
