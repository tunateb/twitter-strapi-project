import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../types/tweet.type';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  baseUrl = 'http://localhost:1337';

  private tweets: Tweet[];

  constructor(private http: HttpClient) {}

  getAllTweets() {
    this.http
      .get(`${this.baseUrl}/tweets?_sort=created_at:DESC`)
      .subscribe((response: Tweet[]) => (this.tweets = response));
  }

  getTweets() {
    return this.tweets;
  }

  pushTweet(newTweet: Tweet) {
    this.tweets.push(newTweet);
  }

  postTweet(tweetData: object) {
    const token = window.localStorage.getItem('token');

    return this.http.post(`${this.baseUrl}/tweets`, tweetData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  updateTweet(tweet: Tweet) {
    const token = window.localStorage.getItem('token');

    return this.http.put(`${this.baseUrl}/tweets/${tweet.id}`, tweet, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
