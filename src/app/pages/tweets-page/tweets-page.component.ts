import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../../types/tweet.type';

@Component({
  selector: 'app-tweets-page',
  templateUrl: './tweets-page.component.html',
  styleUrls: ['./tweets-page.component.scss'],
})
export class TweetsPageComponent implements OnInit {
  baseUrl = 'http://localhost:1337';

  tweets: Tweet[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`${this.baseUrl}/tweets?userId=1`)
      .subscribe((response: Tweet[]) => (this.tweets = response));
  }
}
