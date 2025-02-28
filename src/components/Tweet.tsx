import React from 'react';
import { 
  MessageCircle, Repeat2, Heart, BarChart2, Share, Bookmark as BookmarkIcon
} from 'lucide-react';
import { 
  TweetContainer, TweetAvatar, TweetContent, 
  TweetHeader, TweetAuthor, TweetUsername, 
  TweetTime, TweetText, TweetImage, 
  TweetActions, TweetActionButton 
} from './styled';
import Avatar from './Avatar';
import { Tweet as TweetType } from '../types';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useLikeTweetMutation, useRetweetTweetMutation, useAddBookmarkMutation } from '../store/api/apiSlice';
import { useToast } from '../hooks/useToast';

interface TweetProps {
  tweet: TweetType;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [likeTweet] = useLikeTweetMutation();
  const [retweetTweet] = useRetweetTweetMutation();
  const [addBookmark] = useAddBookmarkMutation();
  const { showToast } = useToast();
  
  const handleLike = async () => {
    if (!user) return;
    
    try {
      await likeTweet(tweet.id).unwrap();
    } catch (error) {
      showToast('Failed to like tweet. Please try again.', 'error');
      console.error('Failed to like tweet:', error);
    }
  };
  
  const handleRetweet = async () => {
    if (!user) return;
    
    try {
      await retweetTweet(tweet.id).unwrap();
    } catch (error) {
      showToast('Failed to retweet. Please try again.', 'error');
      console.error('Failed to retweet:', error);
    }
  };
  
  const handleBookmark = async () => {
    if (!user) return;
    
    try {
      await addBookmark({
        userId: user.id,
        tweetId: tweet.id
      }).unwrap();
      
      showToast('Tweet bookmarked!', 'success');
    } catch (error) {
      showToast('Failed to bookmark tweet. Please try again.', 'error');
      console.error('Failed to bookmark tweet:', error);
    }
  };
  
  return (
    <TweetContainer>
      <TweetAvatar>
        <Avatar src={tweet.user.profileImageUrl} alt={tweet.user.name} />
      </TweetAvatar>
      
      <TweetContent>
        <TweetHeader>
          <TweetAuthor>{tweet.user.name}</TweetAuthor>
          <TweetUsername>@{tweet.user.username}</TweetUsername>
          <TweetTime>{tweet.createdAt}</TweetTime>
        </TweetHeader>
        
        <TweetText>{tweet.content}</TweetText>
        
        {tweet.images && tweet.images.length > 0 && (
          <TweetImage src={tweet.images[0]} alt="Tweet image" />
        )}
        
        <TweetActions>
          <TweetActionButton>
            <MessageCircle size={18} />
            <span>{tweet.replies}</span>
          </TweetActionButton>
          
          <TweetActionButton onClick={handleRetweet}>
            <Repeat2 size={18} />
            <span>{tweet.retweets}</span>
          </TweetActionButton>
          
          <TweetActionButton onClick={handleLike}>
            <Heart size={18} />
            <span>{tweet.likes}</span>
          </TweetActionButton>
          
          <TweetActionButton>
            <BarChart2 size={18} />
            <span>{tweet.views}</span>
          </TweetActionButton>
          
          <TweetActionButton onClick={handleBookmark}>
            <BookmarkIcon size={18} />
          </TweetActionButton>
        </TweetActions>
      </TweetContent>
    </TweetContainer>
  );
};

export default Tweet;