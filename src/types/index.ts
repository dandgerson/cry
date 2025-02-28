export interface User {
  id: string;
  name: string;
  username: string;
  profileImageUrl: string;
  bio?: string;
  following: number;
  followers: number;
  joinedDate: string;
}

export interface Tweet {
  id: string;
  content: string;
  user: User;
  createdAt: string;
  likes: number;
  retweets: number;
  replies: number;
  views: number;
  images?: string[];
}