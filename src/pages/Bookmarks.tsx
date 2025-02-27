import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Bookmark } from "lucide-react";

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
  background-color: #1d9bf0;
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
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: #536471;
  max-width: 380px;
  line-height: 1.3;
`;

const Bookmarks: React.FC = () => {
  return (
    <>
      <Header title="Bookmarks" />

      <BookmarksContainer>
        <IconContainer>
          <Bookmark size={30} color="white" />
        </IconContainer>
        <Title>Save Tweets for later</Title>
        <Subtitle>
          Don't let the good ones fly away! Bookmark Tweets to easily find them
          again in the future.
        </Subtitle>
      </BookmarksContainer>
    </>
  );
};

export default Bookmarks;
