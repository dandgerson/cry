import React from "react";
import Header from "../components/Header";
import {
  TrendsContainer,
  TrendItem,
  TrendCategory,
  TrendName,
  TrendTweets,
} from "../components/styled";

const Explore: React.FC = () => {
  return (
    <>
      <Header title="Explore" />

      <TrendsContainer style={{ borderRadius: 0, background: "transparent" }}>
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

        <TrendItem>
          <TrendCategory>Technology · Trending</TrendCategory>
          <TrendName>#AI</TrendName>
          <TrendTweets>120K Tweets</TrendTweets>
        </TrendItem>

        <TrendItem>
          <TrendCategory>Gaming · Trending</TrendCategory>
          <TrendName>#GamingNews</TrendName>
          <TrendTweets>45.3K Tweets</TrendTweets>
        </TrendItem>

        <TrendItem>
          <TrendCategory>Music · Trending</TrendCategory>
          <TrendName>#NewAlbum</TrendName>
          <TrendTweets>67.8K Tweets</TrendTweets>
        </TrendItem>
      </TrendsContainer>
    </>
  );
};

export default Explore;
