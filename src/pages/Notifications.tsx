import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
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

const Notifications: React.FC = () => {
  return (
    <>
      <Header title="Notifications" />

      <NotificationsContainer>
        <Title>Nothing to see here — yet</Title>
        <Subtitle>
          From likes to reposts and a whole lot more, this is where all the
          action happens.
        </Subtitle>
      </NotificationsContainer>
    </>
  );
};

export default Notifications;
