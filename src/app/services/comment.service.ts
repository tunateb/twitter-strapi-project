import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Tweet } from '../types/tweet.type';
import { Comment } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  baseUrl: string = 'http://localhost:1337';

  private comments;

  constructor(private userService: UserService, private http: HttpClient) {}

  getTweetComments(id: number) {
    return this.http.get(`${this.baseUrl}/comments?tweetId=${id}`);
  }

  getComments() {
    return this.comments;
  }

  postComment(data) {
    const token = window.localStorage.getItem('token');

    return this.http.post(`${this.baseUrl}/comments`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  pushComment(newComment) {
    this.comments.push(newComment);
  }
}
