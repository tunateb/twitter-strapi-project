import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TweetService } from '../../services/tweet.service';
import { Tweet } from 'src/app/types/tweet.type';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-tweetform',
  templateUrl: './tweetform.component.html',
  styleUrls: ['./tweetform.component.scss'],
})
export class TweetformComponent implements OnInit {
  @Input() formPlaceholder: string;
  @Input() buttonText: string;
  @Input() isComment: boolean;

  tweetId = +this.route.snapshot.paramMap.get('id');

  form = {
    text: '',
  };

  constructor(
    private userService: UserService,
    private tweetService: TweetService,
    private route: ActivatedRoute,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {}

  get user() {
    return this.userService.getUser();
  }

  get tweet() {
    return this.tweetService
      .getTweets()
      .find((tweet) => tweet.id === this.tweetId);
  }

  onSubmit() {
    const tweetData = {
      text: this.form.text,
      user: this.user,
      userId: this.user.id,
    };

    const commentData = {
      text: this.form.text,
      user: this.user,
      userId: this.user.id,
      tweet: this.tweet,
      tweetId: this.tweetId,
    };

    if (!this.isComment) {
      this.tweetService.postTweet(tweetData).subscribe((response: Tweet) => {
        this.tweetService.pushTweet(response);
      });
    } else {
      this.commentService
        .postComment(commentData)
        .subscribe((response) => this.commentService.pushComment(response));
    }

    this.form = {
      text: '',
    };

    window.location.reload();
  }
}
