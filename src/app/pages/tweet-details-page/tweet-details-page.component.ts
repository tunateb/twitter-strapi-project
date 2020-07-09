import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from '../../services/tweet.service';
import { CommentService } from '../../services/comment.service';
import { Tweet } from 'src/app/types/tweet.type';

@Component({
  selector: 'app-tweet-details-page',
  templateUrl: './tweet-details-page.component.html',
  styleUrls: ['./tweet-details-page.component.scss'],
})
export class TweetDetailsPageComponent implements OnInit {
  tweetId: number = +this.route.snapshot.paramMap.get('id');

  tweetComments;

  formPlaceholder: string = 'Tweet your reply';
  buttonText: string = 'Reply';

  constructor(
    private route: ActivatedRoute,
    private tweetService: TweetService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.commentService.getTweetComments(this.tweetId)
      .subscribe((response) => {
        console.log(response);
        this.tweetComments = response;
    });
  }

  get tweet() {
    return this.tweetService
      .getTweets()
      .find((tweet) => tweet.id === this.tweetId);
  }
}
