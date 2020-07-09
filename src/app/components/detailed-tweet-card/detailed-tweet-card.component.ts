import { Component, OnInit, Input } from '@angular/core';
import { TweetService} from '../../services/tweet.service'
import { Tweet } from 'src/app/types/tweet.type';

@Component({
  selector: 'app-detailed-tweet-card',
  templateUrl: './detailed-tweet-card.component.html',
  styleUrls: ['./detailed-tweet-card.component.scss'],
})
export class DetailedTweetCardComponent implements OnInit {
  @Input() tweet;

  isRetweeted: boolean = false;

  isLiked: boolean = false;

  baseUrl = 'http://localhost:1337';

  constructor(private tweetService:TweetService) {}

  ngOnInit(): void {}

  retweet() {
    this.tweet.retweet++;
    this.tweetService
      .updateTweet(this.tweet)
      .subscribe((response) => console.log(response));

    this.isRetweeted = true;
  }

  removeRetweet() {
    this.tweet.retweet--;
    this.tweetService
      .updateTweet(this.tweet)
      .subscribe((response) => console.log(response));

    this.isRetweeted = false;
  }

  removeLike() {
    this.tweet.like--;
    this.tweetService
      .updateTweet(this.tweet)
      .subscribe((response) => (this.tweet = response));

    this.isLiked = false;
  }

  like() {
    this.tweet.like++;
    this.tweetService
      .updateTweet(this.tweet)
      .subscribe((response) => (this.tweet = response));

    this.isLiked = true;
  }
}
