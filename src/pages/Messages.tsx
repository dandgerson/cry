import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { MessageSquare } from "lucide-react";

const MessagesContainer = styled.div`
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

const NewMessageButton = styled.button`
  background-color: #1d9bf0;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 15px;
  margin-top: 24px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a8cd8;
  }
`;

const Messages: React.FC = () => {
  return (
    <>
      <Header title="Messages" />

      <MessagesContainer>
        <IconContainer>
          <MessageSquare size={30} color="white" />
        </IconContainer>
        <Title>Welcome to your inbox!</Title>
        <Subtitle>
          Drop a line, share posts and more with private conversations between
          you and others on X.
        </Subtitle>
        <NewMessageButton>Write a message</NewMessageButton>
      </MessagesContainer>
    </>
  );
};

export default Messages;
