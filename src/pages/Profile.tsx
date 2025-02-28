import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { Calendar, Link as LinkIcon, MapPin } from 'lucide-react';
import Avatar from '../components/Avatar';
import Tweet from '../components/Tweet';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useGetUserTweetsQuery } from '../store/api/apiSlice';

const ProfileHeader = styled.div`
  position: relative;
`;

const CoverPhoto = styled.div`
  height: 200px;
  background-color: var(--primary-color);
`;

const ProfileInfo = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
`;

const ProfileAvatar = styled.div`
  position: absolute;
  top: 150px;
  left: 16px;
  border: 4px solid var(--background-color);
  border-radius: 50%;
`;

const EditProfileButton = styled.button`
  float: right;
  margin-top: 12px;
  background-color: var(--profile-button-bg);
  color: var(--text-color);
  border: 1px solid var(--profile-button-border);
  border-radius: 9999px;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--profile-button-hover);
  }
`;

const ProfileName = styled.h2`
  font-size: 20px;
  font-weight: 800;
  margin: 60px 0 0 0;
  color: var(--text-color);
`;

const ProfileUsername = styled.div`
  font-size: 15px;
  color: var(--secondary-text-color);
  margin-bottom: 12px;
`;

const ProfileBio = styled.p`
  font-size: 15px;
  margin-bottom: 12px;
  line-height: 1.3;
  color: var(--text-color);
`;

const ProfileMetadata = styled.div`
  display: flex;
  gap: 12px;
  color: var(--secondary-text-color);
  font-size: 15px;
  margin-bottom: 12px;
`;

const ProfileMetadataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ProfileStats = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 12px;
`;

const ProfileStat = styled.div`
  font-size: 15px;
  
  span {
    font-weight: 700;
    color: var(--text-color);
  }
  
  color: var(--secondary-text-color);
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
`;

const Tab = styled.div<{ active?: boolean }>`
  flex: 1;
  text-align: center;
  padding: 16px 0;
  font-weight: ${props => props.active ? '700' : '500'};
  color: ${props => props.active ? 'var(--text-color)' : 'var(--secondary-text-color)'};
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.active ? '56px' : '0'};
    height: 4px;
    background-color: var(--primary-color);
    border-radius: 9999px;
  }
`;

const Profile: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { data: userTweets, isLoading } = useGetUserTweetsQuery(user?.id || '', { skip: !user });
  
  if (!user) {
    return <div>Loading profile...</div>;
  }
  
  return (
    <>
      <Header title={user.name} />
      
      <ProfileHeader>
        <CoverPhoto />
        <ProfileAvatar>
          <Avatar src={user.profileImageUrl} alt={user.name} size={80} />
        </ProfileAvatar>
      </ProfileHeader>
      
      <ProfileInfo>
        <EditProfileButton>Edit profile</EditProfileButton>
        
        <ProfileName>{user.name}</ProfileName>
        <ProfileUsername>@{user.username}</ProfileUsername>
        
        <ProfileBio>{user.bio}</ProfileBio>
        
        <ProfileMetadata>
          <ProfileMetadataItem>
            <Calendar size={18} />
            <span>Joined {user.joinedDate}</span>
          </ProfileMetadataItem>
        </ProfileMetadata>
        
        <ProfileStats>
          <ProfileStat>
            <span>{user.following}</span> Following
          </ProfileStat>
          <ProfileStat>
            <span>{user.followers}</span> Followers
          </ProfileStat>
        </ProfileStats>
      </ProfileInfo>
      
      <TabsContainer>
        <Tab active={true}>Tweets</Tab>
        <Tab active={false}>Replies</Tab>
        <Tab active={false}>Media</Tab>
        <Tab active={false}>Likes</Tab>
      </TabsContainer>
      
      {isLoading ? (
        <div style={{ padding: '20px', textAlign: 'center' }}>Loading tweets...</div>
      ) : userTweets && userTweets.length > 0 ? (
        userTweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
      ) : (
        <div style={{ padding: '20px', textAlign: 'center' }}>No tweets yet.</div>
      )}
    </>
  );
};

export default Profile;