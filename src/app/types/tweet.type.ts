import { User } from '../types/user.type';

export type Tweet = {
  id: number;
  text: string;
  image: object[];
  created_at: string;
  updated_at: string;
  time: string;
  user: User;
};
