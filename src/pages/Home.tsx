import React, { useState } from "react";
import Header from "../components/Header";
import HomeTabs from "../components/HomeTabs";
import TweetComposer from "../components/TweetComposer";
import Tweet from "../components/Tweet";
import { tweets as initialTweets } from "../data/mockData";
import { Tweet as TweetType } from "../types";
import { formatDistanceToNow } from "date-fns";
import { currentUser } from "../data/mockData";

const Home: React.FC = () => {
  const [tweets, setTweets] = useState<TweetType[]>(initialTweets);
  const [activeTab, setActiveTab] = useState<"for-you" | "following">(
    "for-you"
  );

  const handleTweet = (content: string) => {
    const newTweet: TweetType = {
      id: `tweet-${Date.now()}`,
      content,
      user: currentUser,
      createdAt: formatDistanceToNow(new Date(), { addSuffix: true }),
      likes: 0,
      retweets: 0,
      replies: 0,
      views: 0,
    };

    setTweets([newTweet, ...tweets]);
  };

  return (
    <>
      <Header title="Home" />
      <HomeTabs onTabChange={setActiveTab} />
      <TweetComposer onTweet={handleTweet} />

      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </>
  );
};

export default Home;
