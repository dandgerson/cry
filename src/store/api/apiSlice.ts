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
    
    // Get all categories
    getCategories: builder.query<Category[], void>({
      query: () => '/categories',
      providesTags: [{ type: 'Category', id: 'LIST' }],
    }),
    
    // Get all help types
    getHelpTypes: builder.query<HelpType[], void>({
      query: () => '/helpTypes',
      providesTags: [{ type: 'HelpType', id: 'LIST' }],
    }),
    
    // Get all urgency levels
    getUrgencyLevels: builder.query<UrgencyLevel[], void>({
      query: () => '/urgencyLevels',
      providesTags: [{ type: 'UrgencyLevel', id: 'LIST' }],
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
    
    // Get bookmarks for a user
    getBookmarks: builder.query<Cry[], string>({
      query: (userId) => `/bookmarks?userId=${userId}`,
      transformResponse: async (response: BookmarkResponse[]) => {
        // Get cry IDs from bookmarks
        const cryIds = response.map(bookmark => bookmark.cryId);
        
        // Fetch cries
        let cries: CryResponse[] = [];
        for (const id of cryIds) {
          const cry = await fetch(`http://localhost:3001/cries/${id}`).then(res => res.json());
          cries.push(cry);
        }
        
        // Fetch users for each cry
        const users = await fetch('http://localhost:3001/users').then(res => res.json());
        
        // Map cries to include user data
        return cries.map(cry => ({
          id: cry.id,
          content: cry.content,
          user: users.find((user: UserResponse) => user.id === cry.userId),
          createdAt: formatDistanceToNow(new Date(cry.createdAt), { addSuffix: true }),
          likes: cry.likes,
          shares: cry.shares,
          replies: cry.replies,
          views: cry.views,
          images: cry.images,
          category: cry.category,
          helpType: cry.helpType,
          status: cry.status,
          urgency: cry.urgency,
          location: cry.location,
          amountNeeded: cry.amountNeeded,
          amountRaised: cry.amountRaised,
          validatedBy: cry.validatedBy,
          validatedAt: cry.validatedAt,
          documents: cry.documents,
          rejectionReason: cry.rejectionReason
        }));
      },
      providesTags: [{ type: 'Bookmark', id: 'LIST' }],
    }),
    
    // Add a bookmark
    addBookmark: builder.mutation<void, { userId: string; cryId: string }>({
      query: (bookmark) => ({
        url: '/bookmarks',
        method: 'POST',
        body: bookmark,
      }),
      invalidatesTags: [{ type: 'Bookmark', id: 'LIST' }],
    }),
    
    // Remove a bookmark
    removeBookmark: builder.mutation<void, { userId: string; cryId: string }>({
      query: (bookmark) => {
        // Find the bookmark record ID first
        return {
          url: `/bookmarks?userId=${bookmark.userId}&cryId=${bookmark.cryId}`,
          method: 'GET',
        };
      },
      async onQueryStarted({ userId, cryId }, { dispatch, queryFulfilled }) {
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
    
    // Create a donation
    createDonation: builder.mutation<void, Omit<DonationResponse, 'id' | 'createdAt'>>({
      query: (donation) => ({
        url: '/donations',
        method: 'POST',
        body: {
          ...donation,
          createdAt: new Date().toISOString()
        },
      }),
      async onQueryStarted({ cryId, amount }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          
          // Update the cry's amountRaised
          const getCryResult = await dispatch(
            apiSlice.endpoints.getCry.initiate(cryId)
          ).unwrap();
          
          await dispatch(
            apiSlice.endpoints.updateCryAmount.initiate({
              id: cryId,
              amountRaised: getCryResult.amountRaised + amount
            })
          );
        } catch (err) {
          console.error('Error updating cry amount after donation:', err);
        }
      },
      invalidatesTags: [{ type: 'Donation', id: 'LIST' }, { type: 'Stats', id: 'LIST' }],
    }),
    
    // Update cry amount raised
    updateCryAmount: builder.mutation<void, { id: string, amountRaised: number }>({
      query: ({ id, amountRaised }) => ({
        url: `/cries/${id}`,
        method: 'PATCH',
        body: {
          amountRaised
        },
      }),
      invalidatesTags: (_, __, { id }) => [{ type: 'Cry', id }],
    }),
    
    // Get donations for a cry
    getDonationsForCry: builder.query<Donation[], string>({
      query: (cryId) => `/donations?cryId=${cryId}`,
      transformResponse: async (response: DonationResponse[]) => {
        // Fetch users for each donation
        const users = await fetch('http://localhost:3001/users').then(res => res.json());
        
        // Map donations to include user data
        return response.map(donation => ({
          ...donation,
          user: users.find((user: UserResponse) => user.id === donation.userId)
        }));
      },
      providesTags: [{ type: 'Donation', id: 'LIST' }],
    }),
    
    // Create a response (volunteer or emotional)
    createResponse: builder.mutation<void, Omit<ResponseResponse, 'id' | 'createdAt' | 'status'>>({
      query: (response) => ({
        url: '/responses',
        method: 'POST',
        body: {
          ...response,
          createdAt: new Date().toISOString(),
          status: 'pending'
        },
      }),
      invalidatesTags: [{ type: 'Response', id: 'LIST' }, { type: 'Stats', id: 'LIST' }],
    }),
    
    // Update response status
    updateResponseStatus: builder.mutation<void, { id: string, status: 'accepted' | 'rejected' }>({
      query: ({ id, status }) => ({
        url: `/responses/${id}`,
        method: 'PATCH',
        body: {
          status
        },
      }),
      invalidatesTags: (_, __, { id }) => [{ type: 'Response', id }],
    }),
    
    // Get responses for a cry
    getResponsesForCry: builder.query<Response[], string>({
      query: (cryId) => `/responses?cryId=${cryId}`,
      transformResponse: async (response: ResponseResponse[]) => {
        // Fetch users for each response
        const users = await fetch('http://localhost:3001/users').then(res => res.json());
        
        // Map responses to include user data
        return response.map(resp => ({
          ...resp,
          user: users.find((user: UserResponse) => user.id === resp.userId)
        }));
      },
      providesTags: [{ type: 'Response', id: 'LIST' }],
    }),
    
    // Get stats
    getStats: builder.query<Stats, void>({
      query: () => '/stats',
      providesTags: [{ type: 'Stats', id: 'LIST' }],
    }),
  }),
});

// Export hooks for usage in components
export const {
  useGetCriesQuery,
  useGetUserCriesQuery,
  useGetFollowingCriesQuery,
  useGetCriesByCategoryQuery,
  useGetCriesByHelpTypeQuery,
  useGetCriesByUrgencyQuery,
  useGetCriesByStatusQuery,
  useGetCryQuery,
  useCreateCryMutation,
  useUpdateCryStatusMutation,
  useLikeCryMutation,
  useShareCryMutation,
  useGetCategoriesQuery,
  useGetHelpTypesQuery,
  useGetUrgencyLevelsQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useGetSuggestedUsersQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
  useGetBookmarksQuery,
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
  useCreateDonationMutation,
  useGetDonationsForCryQuery,
  useCreateResponseMutation,
  useUpdateResponseStatusMutation,
  useGetResponsesForCryQuery,
  useGetStatsQuery,
  
  // Legacy hooks for backward compatibility
  // useGetTweetsQuery: useGetCriesQuery,
  // useGetUserTweetsQuery: useGetUserCriesQuery,
  // useGetFollowingTweetsQuery: useGetFollowingCriesQuery,
  // useGetTweetQuery: useGetCryQuery,
  // useCreateTweetMutation: useCreateCryMutation,
  // useLikeTweetMutation: useLikeCryMutation,
  // useRetweetTweetMutation: useShareCryMutation,
} = apiSlice;