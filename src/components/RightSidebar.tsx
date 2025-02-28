import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { 
  SidebarRight, SearchContainer, SearchInput, 
  TrendsContainer, TrendsHeader, TrendItem, 
  TrendCategory, TrendName, TrendTweets,
  SuggestedUsersContainer, SuggestedUserItem,
  UserInfo, UserName, UserUsername, FollowButton
} from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useGetSuggestedUsersQuery, useGetTrendsQuery, useFollowUserMutation } from '../store/api/apiSlice';
import Avatar from './Avatar';
import { useToast } from '../hooks/useToast';

const RightSidebar: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { data: suggestedUsers, isLoading: isLoadingSuggestions } = 
    useGetSuggestedUsersQuery(user?.id || '', { skip: !user });
  const { data: trends, isLoading: isLoadingTrends } = useGetTrendsQuery();
  const [followUser] = useFollowUserMutation();
  const { showToast } = useToast();
  
  const handleFollow = async (userId: string) => {
    if (!user) return;
    
    try {
      await followUser({
        followerId: user.id,
        followingId: userId
      }).unwrap();
      
      showToast('User followed successfully!', 'success');
    } catch (error) {
      showToast('Failed to follow user. Please try again.', 'error');
      console.error('Failed to follow user:', error);
    }
  };
  
  return (
    <SidebarRight>
      <SearchContainer>
        <SearchInput placeholder="Search" />
        <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
          <SearchIcon size={20} color="var(--secondary-text-color)" />
        </div>
      </SearchContainer>

      <TrendsContainer>
        <TrendsHeader>Trends for you</TrendsHeader>
        
        {isLoadingTrends ? (
          <div style={{ padding: '12px 16px', color: 'var(--secondary-text-color)' }}>Loading trends...</div>
        ) : (
          trends?.slice(0, 5).map(trend => (
            <TrendItem key={trend.id}>
              <TrendCategory>{trend.category} · Trending</TrendCategory>
              <TrendName>{trend.name}</TrendName>
              <TrendTweets>{(trend.tweetCount / 1000).toFixed(1)}K Tweets</TrendTweets>
            </TrendItem>
          ))
        )}
      </TrendsContainer>

      <SuggestedUsersContainer>
        <TrendsHeader>Who to follow</TrendsHeader>
        
        {isLoadingSuggestions ? (
          <div style={{ padding: '12px 16px', color: 'var(--secondary-text-color)' }}>Loading suggestions...</div>
        ) : (
          suggestedUsers?.map(suggestedUser => (
            <SuggestedUserItem key={suggestedUser.id}>
              <Avatar src={suggestedUser.profileImageUrl} alt={suggestedUser.name} size={48} />
              <UserInfo>
                <UserName>{suggestedUser.name}</UserName>
                <UserUsername>@{suggestedUser.username}</UserUsername>
              </UserInfo>
              <FollowButton onClick={() => handleFollow(suggestedUser.id)}>Follow</FollowButton>
            </SuggestedUserItem>
          ))
        )}
      </SuggestedUsersContainer>
    </SidebarRight>
  );
};

export default RightSidebar;