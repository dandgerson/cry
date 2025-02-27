import React from "react";
import { Search as SearchIcon } from "lucide-react";
import {
  SidebarRight,
  SearchContainer,
  SearchInput,
  TrendsContainer,
  TrendsHeader,
  TrendItem,
  TrendCategory,
  TrendName,
  TrendTweets,
  SuggestedUsersContainer,
  SuggestedUserItem,
  UserInfo,
  UserName,
  UserUsername,
  FollowButton,
} from "./styled";
import { suggestedUsers } from "../data/mockData";
import Avatar from "./Avatar";

const RightSidebar: React.FC = () => {
  return (
    <SidebarRight>
      <SearchContainer>
        <SearchInput placeholder="Search" />
        <div
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <SearchIcon size={20} color="#536471" />
        </div>
      </SearchContainer>

      <TrendsContainer>
        <TrendsHeader>Trends for you</TrendsHeader>

        <TrendItem>
          <TrendCategory>Technology · Trending</TrendCategory>
          <TrendName>#ReactJS</TrendName>
          <TrendTweets>97.5K Tweets</TrendTweets>
        </TrendItem>

        <TrendItem>
          <TrendCategory>Business & finance · Trending</TrendCategory>
          <TrendName>#TechLayoffs</TrendName>
          <TrendTweets>52.7K Tweets</TrendTweets>
        </TrendItem>

        <TrendItem>
          <TrendCategory>Entertainment · Trending</TrendCategory>
          <TrendName>#NewMovie</TrendName>
          <TrendTweets>35.2K Tweets</TrendTweets>
        </TrendItem>

        <TrendItem>
          <TrendCategory>Sports · Trending</TrendCategory>
          <TrendName>#WorldCup</TrendName>
          <TrendTweets>128K Tweets</TrendTweets>
        </TrendItem>

        <TrendItem>
          <TrendCategory>Politics · Trending</TrendCategory>
          <TrendName>#Election2024</TrendName>
          <TrendTweets>75.1K Tweets</TrendTweets>
        </TrendItem>
      </TrendsContainer>

      <SuggestedUsersContainer>
        <TrendsHeader>Who to follow</TrendsHeader>

        {suggestedUsers.map((user) => (
          <SuggestedUserItem key={user.id}>
            <Avatar src={user.profileImageUrl} alt={user.name} size={48} />
            <UserInfo>
              <UserName>{user.name}</UserName>
              <UserUsername>@{user.username}</UserUsername>
            </UserInfo>
            <FollowButton>Follow</FollowButton>
          </SuggestedUserItem>
        ))}
      </SuggestedUsersContainer>
    </SidebarRight>
  );
};

export default RightSidebar;
