import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from '../../services/tweet.service';
import { CommentService } from '../../services/comment.service';
import { Tweet } from 'src/app/types/tweet.type';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss'],
})
export class TweetCardComponent implements OnInit {
  @Input() tweet;
  @Input() isComment: boolean = false;

  isRetweeted: boolean = false;

  isLiked: boolean = false;

  baseUrl = 'http://localhost:1337';

  constructor(
    private router: Router,
    private tweetService: TweetService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {}

  goToTweetDetails() {
    this.router.navigateByUrl(`/tweets/${this.tweet.id}`);
  }

  retweet() {
    this.tweet.retweet++;

    if (!this.isComment) {
      this.tweetService
        .updateTweet(this.tweet)
        .subscribe((response) => (this.tweet = response));
    } else {
      this.commentService
        .updateComment(this.tweet)
        .subscribe((response) => (this.tweet = response));
    }

    this.isRetweeted = true;
  }

  removeRetweet() {
    this.tweet.retweet--;

    if (!this.isComment) {
      this.tweetService
        .updateTweet(this.tweet)
        .subscribe((response) => (this.tweet = response));
    } else {
      this.commentService
        .updateComment(this.tweet)
        .subscribe((response) => (this.tweet = response));
    }

    this.isRetweeted = false;
  }

  like() {
    this.tweet.like++;

    if (!this.isComment) {
      this.tweetService
        .updateTweet(this.tweet)
        .subscribe((response) => (this.tweet = response));
    } else {
      this.commentService
        .updateComment(this.tweet)
        .subscribe((response) => (this.tweet = response));
    }

    this.isLiked = true;
  }

  removeLike() {
    this.tweet.like--;

    if (!this.isComment) {
      this.tweetService
        .updateTweet(this.tweet)
        .subscribe((response) => (this.tweet = response));
    } else {
      this.commentService
        .updateComment(this.tweet)
        .subscribe((response) => (this.tweet = response));
    }

    this.isLiked = false;
  }
}
