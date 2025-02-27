import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Calendar, Link as LinkIcon, MapPin } from "lucide-react";
import Avatar from "../components/Avatar";
import Tweet from "../components/Tweet";
import { currentUser } from "../data/mockData";
import { tweets } from "../data/mockData";

const ProfileHeader = styled.div`
  position: relative;
`;

const CoverPhoto = styled.div`
  height: 200px;
  background-color: #1d9bf0;
`;

const ProfileInfo = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #eff3f4;
`;

const ProfileAvatar = styled.div`
  position: absolute;
  top: 150px;
  left: 16px;
  border: 4px solid white;
  border-radius: 50%;
`;

const EditProfileButton = styled.button`
  float: right;
  margin-top: 12px;
  background-color: white;
  color: #0f1419;
  border: 1px solid #cfd9de;
  border-radius: 9999px;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e7e7e8;
  }
`;

const ProfileName = styled.h2`
  font-size: 20px;
  font-weight: 800;
  margin: 60px 0 0 0;
`;

const ProfileUsername = styled.div`
  font-size: 15px;
  color: #536471;
  margin-bottom: 12px;
`;

const ProfileBio = styled.p`
  font-size: 15px;
  margin-bottom: 12px;
  line-height: 1.3;
`;

const ProfileMetadata = styled.div`
  display: flex;
  gap: 12px;
  color: #536471;
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
    color: #0f1419;
  }

  color: #536471;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #eff3f4;
`;

const Tab = styled.div<{ active?: boolean }>`
  flex: 1;
  text-align: center;
  padding: 16px 0;
  font-weight: ${(props) => (props.active ? "700" : "500")};
  color: ${(props) => (props.active ? "#0f1419" : "#536471")};
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.active ? "56px" : "0")};
    height: 4px;
    background-color: #1d9bf0;
    border-radius: 9999px;
  }
`;

const Profile: React.FC = () => {
  const userTweets = tweets.filter((tweet) => tweet.user.id === currentUser.id);

  return (
    <>
      <Header title={currentUser.name} />

      <ProfileHeader>
        <CoverPhoto />
        <ProfileAvatar>
          <Avatar
            src={currentUser.profileImageUrl}
            alt={currentUser.name}
            size={80}
          />
        </ProfileAvatar>
      </ProfileHeader>

      <ProfileInfo>
        <EditProfileButton>Edit profile</EditProfileButton>

        <ProfileName>{currentUser.name}</ProfileName>
        <ProfileUsername>@{currentUser.username}</ProfileUsername>

        <ProfileBio>{currentUser.bio}</ProfileBio>

        <ProfileMetadata>
          <ProfileMetadataItem>
            <Calendar size={18} />
            <span>Joined {currentUser.joinedDate}</span>
          </ProfileMetadataItem>
        </ProfileMetadata>

        <ProfileStats>
          <ProfileStat>
            <span>{currentUser.following}</span> Following
          </ProfileStat>
          <ProfileStat>
            <span>{currentUser.followers}</span> Followers
          </ProfileStat>
        </ProfileStats>
      </ProfileInfo>

      <TabsContainer>
        <Tab active={true}>Tweets</Tab>
        <Tab active={false}>Replies</Tab>
        <Tab active={false}>Media</Tab>
        <Tab active={false}>Likes</Tab>
      </TabsContainer>

      {userTweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </>
  );
};

export default Profile;
