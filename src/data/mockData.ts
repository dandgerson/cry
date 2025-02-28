import { User, Tweet } from '../types';
import { formatDistanceToNow } from 'date-fns';

export const currentUser: User = {
  id: '1',
  name: 'John Doe',
  username: 'johndoe',
  profileImageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
  bio: 'Software developer | React enthusiast | Coffee lover',
  following: 234,
  followers: 567,
  joinedDate: 'January 2020'
};

export const users: User[] = [
  currentUser,
  {
    id: '2',
    name: 'Jane Smith',
    username: 'janesmith',
    profileImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    bio: 'UX Designer | Travel enthusiast',
    following: 345,
    followers: 1234,
    joinedDate: 'March 2019'
  },
  {
    id: '3',
    name: 'Alex Johnson',
    username: 'alexj',
    profileImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    bio: 'Product Manager | Tech enthusiast',
    following: 567,
    followers: 890,
    joinedDate: 'June 2021'
  }
];

export const tweets: Tweet[] = [
  {
    id: '1',
    content: 'Just launched my new website! Check it out at example.com #webdev #react',
    user: users[1],
    createdAt: formatDistanceToNow(new Date(Date.now() - 1000 * 60 * 30), { addSuffix: true }),
    likes: 45,
    retweets: 12,
    replies: 8,
    views: 1234
  },
  {
    id: '2',
    content: 'React 18 has some amazing new features. Loving the new concurrent rendering capabilities!',
    user: users[0],
    createdAt: formatDistanceToNow(new Date(Date.now() - 1000 * 60 * 60 * 2), { addSuffix: true }),
    likes: 89,
    retweets: 23,
    replies: 14,
    views: 2345
  },
  {
    id: '3',
    content: 'Beautiful sunset today! 🌅',
    user: users[2],
    createdAt: formatDistanceToNow(new Date(Date.now() - 1000 * 60 * 60 * 5), { addSuffix: true }),
    likes: 123,
    retweets: 34,
    replies: 12,
    views: 3456,
    images: ['https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80']
  },
  {
    id: '4',
    content: 'Just finished reading "Atomic Habits" by James Clear. Highly recommend it to everyone!',
    user: users[1],
    createdAt: formatDistanceToNow(new Date(Date.now() - 1000 * 60 * 60 * 8), { addSuffix: true }),
    likes: 67,
    retweets: 15,
    replies: 9,
    views: 1876
  },
  {
    id: '5',
    content: 'Working on a new project using TypeScript and React. The type safety is amazing!',
    user: users[0],
    createdAt: formatDistanceToNow(new Date(Date.now() - 1000 * 60 * 60 * 24), { addSuffix: true }),
    likes: 56,
    retweets: 14,
    replies: 7,
    views: 1543
  }
];

export const suggestedUsers: User[] = [
  {
    id: '4',
    name: 'Sarah Williams',
    username: 'sarahw',
    profileImageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    following: 234,
    followers: 567,
    joinedDate: 'April 2022'
  },
  {
    id: '5',
    name: 'Mike Brown',
    username: 'mikeb',
    profileImageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    following: 345,
    followers: 789,
    joinedDate: 'May 2021'
  },
  {
    id: '6',
    name: 'Emily Davis',
    username: 'emilyd',
    profileImageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    following: 456,
    followers: 890,
    joinedDate: 'January 2023'
  }
];