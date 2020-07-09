import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from '../../services/tweet.service';
import { Tweet } from 'src/app/types/tweet.type';

@Component({
  selector: 'app-tweet-details-page',
  templateUrl: './tweet-details-page.component.html',
  styleUrls: ['./tweet-details-page.component.scss'],
})
export class TweetDetailsPageComponent implements OnInit {
  tweetId: number = +this.route.snapshot.paramMap.get('id');

  formPlaceholder: string = "Tweet your reply";
  buttonText:string = "Reply"

  constructor(
    private route: ActivatedRoute,
    private tweetService: TweetService
  ) {}

  ngOnInit(): void {}

  get tweet() {
    return this.tweetService
      .getTweets()
      .find((tweet) => tweet.id === this.tweetId);
  }
}
