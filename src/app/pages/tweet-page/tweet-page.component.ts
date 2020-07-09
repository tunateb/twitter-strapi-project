import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-tweet-page',
  templateUrl: './tweet-page.component.html',
  styleUrls: ['./tweet-page.component.scss'],
})
export class TweetPageComponent implements OnInit {
  constructor(private tweetService: TweetService) {}

  ngOnInit(): void {
    this.tweetService.getAllTweets();
  }

  get tweets() {
    return this.tweetService.getTweets();
  }
}
