import React from "react";
import { MessageCircle, Repeat2, Heart, BarChart2, Share } from "lucide-react";
import {
  TweetContainer,
  TweetAvatar,
  TweetContent,
  TweetHeader,
  TweetAuthor,
  TweetUsername,
  TweetTime,
  TweetText,
  TweetImage,
  TweetActions,
  TweetActionButton,
} from "./styled";
import Avatar from "./Avatar";
import { Tweet as TweetType } from "../types";

interface TweetProps {
  tweet: TweetType;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
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

          <TweetActionButton>
            <Repeat2 size={18} />
            <span>{tweet.retweets}</span>
          </TweetActionButton>

          <TweetActionButton>
            <Heart size={18} />
            <span>{tweet.likes}</span>
          </TweetActionButton>

          <TweetActionButton>
            <BarChart2 size={18} />
            <span>{tweet.views}</span>
          </TweetActionButton>

          <TweetActionButton>
            <Share size={18} />
          </TweetActionButton>
        </TweetActions>
      </TweetContent>
    </TweetContainer>
  );
};

export default Tweet;
