import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from 'src/app/types/tweet.type';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss'],
})
export class TweetCardComponent implements OnInit {
  @Input() tweet: Tweet;

  baseUrl = 'http://localhost:1337';

  constructor() {}

  ngOnInit(): void {}
}
