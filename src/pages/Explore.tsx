import React from 'react';
import Header from '../components/Header';
import { 
  TrendsContainer, TrendItem, TrendCategory, 
  TrendName, TrendTweets 
} from '../components/styled';
import { useGetTrendsQuery } from '../store/api/apiSlice';

const Explore: React.FC = () => {
  const { data: trends, isLoading } = useGetTrendsQuery();
  
  return (
    <>
      <Header title="Explore" />
      
      {isLoading ? (
        <div style={{ padding: '20px', textAlign: 'center' }}>Loading trends...</div>
      ) : (
        <TrendsContainer style={{ borderRadius: 0, background: 'transparent' }}>
          {trends?.map(trend => (
            <TrendItem key={trend.id}>
              <TrendCategory>{trend.category} · Trending</TrendCategory>
              <TrendName>{trend.name}</TrendName>
              <TrendTweets>{(trend.tweetCount / 1000).toFixed(1)}K Tweets</TrendTweets>
            </TrendItem>
          ))}
        </TrendsContainer>
      )}
    </>
  );
};

export default Explore;