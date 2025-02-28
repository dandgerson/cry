import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { Bookmark } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useGetBookmarksQuery } from '../store/api/apiSlice';
import Tweet from '../components/Tweet';

const BookmarksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  height: 70vh;
`;

const IconContainer = styled.div`
  margin-bottom: 20px;
  background-color: var(--primary-color);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 31px;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--text-color);
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: var(--secondary-text-color);
  max-width: 380px;
  line-height: 1.3;
`;

const Bookmarks: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { data: bookmarks, isLoading } = useGetBookmarksQuery(user?.id || '', { skip: !user });
  
  return (
    <>
      <Header title="Bookmarks" />
      
      {isLoading ? (
        <div style={{ padding: '20px', textAlign: 'center' }}>Loading bookmarks...</div>
      ) : bookmarks && bookmarks.length > 0 ? (
        bookmarks.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
      ) : (
        <BookmarksContainer>
          <IconContainer>
            <Bookmark size={30} color="white" />
          </IconContainer>
          <Title>Save Tweets for later</Title>
          <Subtitle>
            Don't let the good ones fly away! Bookmark Tweets to easily find them again in the future.
          </Subtitle>
        </BookmarksContainer>
      )}
    </>
  );
};

export default Bookmarks;