import { Tweet } from './tweet.type';
import { User } from './user.type';

export type Comment = {
  id: number;
  text: string;
  tweetId: number;
  userId: number;
  tweet: Tweet;
  user: User;
  created_at: string;
  image: object;
};
