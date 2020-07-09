import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from 'src/app/types/tweet.type';

@Component({
  selector: 'app-detailed-tweet-card',
  templateUrl: './detailed-tweet-card.component.html',
  styleUrls: ['./detailed-tweet-card.component.scss'],
})
export class DetailedTweetCardComponent implements OnInit {
  @Input() tweet;

  baseUrl = 'http://localhost:1337';

  constructor() {}

  ngOnInit(): void {}
}
