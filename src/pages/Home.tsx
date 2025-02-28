import React, { useState } from 'react';
import Header from '../components/Header';
import HomeTabs from '../components/HomeTabs';
import TweetComposer from '../components/TweetComposer';
import Tweet from '../components/Tweet';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useGetTweetsQuery, useGetFollowingTweetsQuery, useCreateTweetMutation } from '../store/api/apiSlice';
import { useToast } from '../hooks/useToast';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'for-you' | 'following'>('for-you');
  const { user } = useSelector((state: RootState) => state.auth);
  const { showToast } = useToast();
  
  // Fetch tweets based on active tab
  const { data: forYouTweets, isLoading: isLoadingForYou } = useGetTweetsQuery();
  const { data: followingTweets, isLoading: isLoadingFollowing } = 
    useGetFollowingTweetsQuery(user?.id || '', { skip: !user || activeTab !== 'following' });
  
  const [createTweet] = useCreateTweetMutation();
  
  const handleTweet = async (content: string) => {
    if (!user) return;
    
    try {
      await createTweet({
        content,
        userId: user.id,
      }).unwrap();
      
      showToast('Tweet posted successfully!', 'success');
    } catch (error) {
      showToast('Failed to post tweet. Please try again.', 'error');
      console.error('Failed to post tweet:', error);
    }
  };
  
  const handleTabChange = (tab: 'for-you' | 'following') => {
    setActiveTab(tab);
  };
  
  const isLoading = activeTab === 'for-you' ? isLoadingForYou : isLoadingFollowing;
  const tweets = activeTab === 'for-you' ? forYouTweets : followingTweets;
  
  return (
    <>
      <Header title="Home" />
      <HomeTabs onTabChange={handleTabChange} />
      <TweetComposer onTweet={handleTweet} />
      
      {isLoading ? (
        <div style={{ padding: '20px', textAlign: 'center' }}>Loading tweets...</div>
      ) : tweets && tweets.length > 0 ? (
        tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
      ) : (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          {activeTab === 'following' ? 'Follow people to see their tweets!' : 'No tweets found.'}
        </div>
      )}
    </>
  );
};

export default Home;