import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { formatDistanceToNow } from 'date-fns';
import { Tweet, User } from '../../types';

// Define base query with URL
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3001',
});

// Define interface for tweet response from API
interface TweetResponse {
  id: string;
  content: string;
  userId: string;
  createdAt: string;
  likes: number;
  retweets: number;
  replies: number;
  views: number;
  images?: string[];
}

// Define interface for user response from API
interface UserResponse {
  id: string;
  name: string;
  username: string;
  profileImageUrl: string;
  bio?: string;
  following: number;
  followers: number;
  joinedDate: string;
}

// Define interface for trend response from API
interface TrendResponse {
  id: string;
  name: string;
  category: string;
  tweetCount: number;
}

// Define interface for bookmark response from API
interface BookmarkResponse {
  id: string;
  userId: string;
  tweetId: string;
}

// Create API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Tweet', 'User', 'Trend', 'Bookmark'],
  endpoints: (builder) => ({
    // Get all tweets
    getTweets: builder.query<Tweet[], void>({
      query: () => '/tweets',
      transformResponse: async (response: TweetResponse[]) => {
        // Fetch users for each tweet
        const users = await fetch('http://localhost:3001/users').then(res => res.json());
        
        // Map tweets to include user data
        return response.map(tweet => ({
          id: tweet.id,
          content: tweet.content,
          user: users.find((user: UserResponse) => user.id === tweet.userId),
          createdAt: formatDistanceToNow(new Date(tweet.createdAt), { addSuffix: true }),
          likes: tweet.likes,
          retweets: tweet.retweets,
          replies: tweet.replies,
          views: tweet.views,
          images: tweet.images
        }));
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tweet' as const, id })),
              { type: 'Tweet', id: 'LIST' },
            ]
          : [{ type: 'Tweet', id: 'LIST' }],
    }),
    
    // Get tweets by user ID
    getUserTweets: builder.query<Tweet[], string>({
      query: (userId) => `/tweets?userId=${userId}`,
      transformResponse: async (response: TweetResponse[], _, userId) => {
        // Fetch user data
        const user = await fetch(`http://localhost:3001/users/${userId}`).then(res => res.json());
        
        // Map tweets to include user data
        return response.map(tweet => ({
          id: tweet.id,
          content: tweet.content,
          user,
          createdAt: formatDistanceToNow(new Date(tweet.createdAt), { addSuffix: true }),
          likes: tweet.likes,
          retweets: tweet.retweets,
          replies: tweet.replies,
          views: tweet.views,
          images: tweet.images
        }));
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tweet' as const, id })),
              { type: 'Tweet', id: 'LIST' },
            ]
          : [{ type: 'Tweet', id: 'LIST' }],
    }),
    
    // Get tweets for user's feed (following)
    getFollowingTweets: builder.query<Tweet[], string>({
      query: (userId) => `/follows?followerId=${userId}`,
      transformResponse: async (response: { followingId: string }[], _, userId) => {
        // Get IDs of users being followed
        const followingIds = response.map(follow => follow.followingId);
        
        // Fetch tweets from followed users
        let tweets: TweetResponse[] = [];
        for (const id of followingIds) {
          const userTweets = await fetch(`http://localhost:3001/tweets?userId=${id}`).then(res => res.json());
          tweets = [...tweets, ...userTweets];
        }
        
        // Sort tweets by date
        tweets.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        
        // Fetch users for each tweet
        const users = await fetch('http://localhost:3001/users').then(res => res.json());
        
        // Map tweets to include user data
        return tweets.map(tweet => ({
          id: tweet.id,
          content: tweet.content,
          user: users.find((user: UserResponse) => user.id === tweet.userId),
          createdAt: formatDistanceToNow(new Date(tweet.createdAt), { addSuffix: true }),
          likes: tweet.likes,
          retweets: tweet.retweets,
          replies: tweet.replies,
          views: tweet.views,
          images: tweet.images
        }));
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tweet' as const, id })),
              { type: 'Tweet', id: 'LIST' },
            ]
          : [{ type: 'Tweet', id: 'LIST' }],
    }),
    
    // Get a single tweet by ID
    getTweet: builder.query<Tweet, string>({
      query: (id) => `/tweets/${id}`,
      transformResponse: async (response: TweetResponse) => {
        // Fetch user data
        const user = await fetch(`http://localhost:3001/users/${response.userId}`).then(res => res.json());
        
        return {
          id: response.id,
          content: response.content,
          user,
          createdAt: formatDistanceToNow(new Date(response.createdAt), { addSuffix: true }),
          likes: response.likes,
          retweets: response.retweets,
          replies: response.replies,
          views: response.views,
          images: response.images
        };
      },
      providesTags: (_, __, id) => [{ type: 'Tweet', id }],
    }),
    
    // Create a new tweet
    createTweet: builder.mutation<Tweet, Omit<TweetResponse, 'id' | 'createdAt' | 'likes' | 'retweets' | 'replies' | 'views'>>({
      query: (tweet) => ({
        url: '/tweets',
        method: 'POST',
        body: {
          ...tweet,
          createdAt: new Date().toISOString(),
          likes: 0,
          retweets: 0,
          replies: 0,
          views: 0
        },
      }),
      invalidatesTags: [{ type: 'Tweet', id: 'LIST' }],
    }),
    
    // Like a tweet
    likeTweet: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tweets/${id}`,
        method: 'PATCH',
        body: {
          likes: {
            function: 'increment'
          }
        },
      }),
      // Custom queryFn to handle the increment operation
      async queryFn(id, api, extraOptions, baseQuery) {
        // First get the current tweet
        const getTweetResult = await baseQuery(`/tweets/${id}`);
        if (getTweetResult.error) return { error: getTweetResult.error };
        
        const tweet = getTweetResult.data as TweetResponse;
        
        // Then update with incremented likes
        const updateResult = await baseQuery({
          url: `/tweets/${id}`,
          method: 'PATCH',
          body: {
            likes: tweet.likes + 1
          }
        });
        
        if (updateResult.error) return { error: updateResult.error };
        return { data: undefined };
      },
      invalidatesTags: (_, __, id) => [{ type: 'Tweet', id }],
    }),
    
    // Retweet a tweet
    retweetTweet: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tweets/${id}`,
        method: 'PATCH',
        body: {
          retweets: {
            function: 'increment'
          }
        },
      }),
      // Custom queryFn to handle the increment operation
      async queryFn(id, api, extraOptions, baseQuery) {
        // First get the current tweet
        const getTweetResult = await baseQuery(`/tweets/${id}`);
        if (getTweetResult.error) return { error: getTweetResult.error };
        
        const tweet = getTweetResult.data as TweetResponse;
        
        // Then update with incremented retweets
        const updateResult = await baseQuery({
          url: `/tweets/${id}`,
          method: 'PATCH',
          body: {
            retweets: tweet.retweets + 1
          }
        });
        
        if (updateResult.error) return { error: updateResult.error };
        return { data: undefined };
      },
      invalidatesTags: (_, __, id) => [{ type: 'Tweet', id }],
    }),
    
    // Get all users
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'User' as const, id })),
              { type: 'User', id: 'LIST' },
            ]
          : [{ type: 'User', id: 'LIST' }],
    }),
    
    // Get a single user by ID
    getUser: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      providesTags: (_, __, id) => [{ type: 'User', id }],
    }),
    
    // Get suggested users (excluding the current user)
    getSuggestedUsers: builder.query<User[], string>({
      query: () => '/users',
      transformResponse: (response: User[], _, currentUserId) => {
        return response.filter(user => user.id !== currentUserId).slice(0, 3);
      },
      providesTags: [{ type: 'User', id: 'LIST' }],
    }),
    
    // Follow a user
    followUser: builder.mutation<void, { followerId: string; followingId: string }>({
      query: (follow) => ({
        url: '/follows',
        method: 'POST',
        body: follow,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    
    // Unfollow a user
    unfollowUser: builder.mutation<void, { followerId: string; followingId: string }>({
      query: (unfollow) => {
        // Find the follow record ID first
        return {
          url: `/follows?followerId=${unfollow.followerId}&followingId=${unfollow.followingId}`,
          method: 'GET',
        };
      },
      async onQueryStarted({ followerId, followingId }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const followRecord = data[0];
          
          if (followRecord) {
            // Delete the follow record
            await dispatch(
              apiSlice.endpoints.deleteFollow.initiate(followRecord.id)
            );
          }
        } catch (err) {
          console.error('Error unfollowing user:', err);
        }
      },
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    
    // Delete a follow record
    deleteFollow: builder.mutation<void, string>({
      query: (id) => ({
        url: `/follows/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    
    // Get trending topics
    getTrends: builder.query<TrendResponse[], void>({
      query: () => '/trends',
      providesTags: [{ type: 'Trend', id: 'LIST' }],
    }),
    
    // Get bookmarks for a user
    getBookmarks: builder.query<Tweet[], string>({
      query: (userId) => `/bookmarks?userId=${userId}`,
      transformResponse: async (response: BookmarkResponse[]) => {
        // Get tweet IDs from bookmarks
        const tweetIds = response.map(bookmark => bookmark.tweetId);
        
        // Fetch tweets
        let tweets: TweetResponse[] = [];
        for (const id of tweetIds) {
          const tweet = await fetch(`http://localhost:3001/tweets/${id}`).then(res => res.json());
          tweets.push(tweet);
        }
        
        // Fetch users for each tweet
        const users = await fetch('http://localhost:3001/users').then(res => res.json());
        
        // Map tweets to include user data
        return tweets.map(tweet => ({
          id: tweet.id,
          content: tweet.content,
          user: users.find((user: UserResponse) => user.id === tweet.userId),
          createdAt: formatDistanceToNow(new Date(tweet.createdAt), { addSuffix: true }),
          likes: tweet.likes,
          retweets: tweet.retweets,
          replies: tweet.replies,
          views: tweet.views,
          images: tweet.images
        }));
      },
      providesTags: [{ type: 'Bookmark', id: 'LIST' }],
    }),
    
    // Add a bookmark
    addBookmark: builder.mutation<void, { userId: string; tweetId: string }>({
      query: (bookmark) => ({
        url: '/bookmarks',
        method: 'POST',
        body: bookmark,
      }),
      invalidatesTags: [{ type: 'Bookmark', id: 'LIST' }],
    }),
    
    // Remove a bookmark
    removeBookmark: builder.mutation<void, { userId: string; tweetId: string }>({
      query: (bookmark) => {
        // Find the bookmark record ID first
        return {
          url: `/bookmarks?userId=${bookmark.userId}&tweetId=${bookmark.tweetId}`,
          method: 'GET',
        };
      },
      async onQueryStarted({ userId, tweetId }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const bookmarkRecord = data[0];
          
          if (bookmarkRecord) {
            // Delete the bookmark record
            await dispatch(
              apiSlice.endpoints.deleteBookmark.initiate(bookmarkRecord.id)
            );
          }
        } catch (err) {
          console.error('Error removing bookmark:', err);
        }
      },
      invalidatesTags: [{ type: 'Bookmark', id: 'LIST' }],
    }),
    
    // Delete a bookmark record
    deleteBookmark: builder.mutation<void, string>({
      query: (id) => ({
        url: `/bookmarks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Bookmark', id: 'LIST' }],
    }),
  }),
});

// Export hooks for usage in components
export const {
  useGetTweetsQuery,
  useGetUserTweetsQuery,
  useGetFollowingTweetsQuery,
  useGetTweetQuery,
  useCreateTweetMutation,
  useLikeTweetMutation,
  useRetweetTweetMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useGetSuggestedUsersQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
  useGetTrendsQuery,
  useGetBookmarksQuery,
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
} = apiSlice;