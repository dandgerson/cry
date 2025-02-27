import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  color: #0f1419;
`;

export const MainSection = styled.main`
  flex: 1;
  border-left: 1px solid #eff3f4;
  border-right: 1px solid #eff3f4;
  max-width: 600px;
`;

export const SidebarLeft = styled.div`
  width: 275px;
  padding: 0 12px;
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 88px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarRight = styled.div`
  width: 350px;
  padding: 0 16px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 9999px;
  font-size: 20px;
  font-weight: ${(props) => (props.active ? "700" : "400")};
  margin-bottom: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }

  svg {
    margin-right: 16px;
  }

  @media (max-width: 1024px) {
    justify-content: center;

    svg {
      margin-right: 0;
    }

    span {
      display: none;
    }
  }
`;

export const TweetButton = styled.button`
  background-color: #1d9bf0;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 16px 0;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 90%;
  margin-top: 16px;

  &:hover {
    background-color: #1a8cd8;
  }

  @media (max-width: 1024px) {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: none;
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const SearchInput = styled.input`
  background-color: #eff3f4;
  border: none;
  border-radius: 9999px;
  padding: 12px 40px;
  font-size: 15px;
  width: 100%;
  outline: none;

  &:focus {
    background-color: white;
    border: 1px solid #1d9bf0;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #536471;
`;

export const TrendsContainer = styled.div`
  background-color: #f7f9f9;
  border-radius: 16px;
  margin-bottom: 16px;
`;

export const TrendsHeader = styled.div`
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 800;
  border-bottom: 1px solid #eff3f4;
`;

export const TrendItem = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #eff3f4;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TrendCategory = styled.div`
  font-size: 13px;
  color: #536471;
`;

export const TrendName = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin: 2px 0;
`;

export const TrendTweets = styled.div`
  font-size: 13px;
  color: #536471;
`;

export const SuggestedUsersContainer = styled.div`
  background-color: #f7f9f9;
  border-radius: 16px;
  margin-bottom: 16px;
`;

export const SuggestedUserItem = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eff3f4;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const UserInfo = styled.div`
  margin-left: 12px;
  flex: 1;
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 15px;
`;

export const UserUsername = styled.div`
  color: #536471;
  font-size: 14px;
`;

export const FollowButton = styled.button`
  background-color: #0f1419;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 6px 16px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #272c30;
  }
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  z-index: 10;
  padding: 0 16px;
  height: 53px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eff3f4;
`;

export const HeaderTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #eff3f4;
`;

export const Tab = styled.div<{ active?: boolean }>`
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

export const TweetComposerContainer = styled.div`
  padding: 16px;
  display: flex;
  border-bottom: 1px solid #eff3f4;
`;

export const ComposerAvatar = styled.div`
  margin-right: 12px;
`;

export const ComposerContent = styled.div`
  flex: 1;
`;

export const ComposerTextarea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  font-size: 20px;
  font-family: inherit;
  margin-bottom: 12px;
  outline: none;
  min-height: 52px;

  &::placeholder {
    color: #536471;
  }
`;

export const ComposerActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ComposerTools = styled.div`
  display: flex;
  gap: 8px;
  color: #1d9bf0;
`;

export const PostButton = styled.button<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? "#8ecdf7" : "#1d9bf0")};
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 15px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#8ecdf7" : "#1a8cd8")};
  }
`;

export const TweetContainer = styled.div`
  padding: 12px 16px;
  display: flex;
  border-bottom: 1px solid #eff3f4;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const TweetAvatar = styled.div`
  margin-right: 12px;
`;

export const TweetContent = styled.div`
  flex: 1;
`;

export const TweetHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const TweetAuthor = styled.span`
  font-weight: 700;
  margin-right: 4px;
`;

export const TweetUsername = styled.span`
  color: #536471;
  margin-right: 4px;
`;

export const TweetTime = styled.span`
  color: #536471;
  &::before {
    content: "·";
    margin: 0 4px;
  }
`;

export const TweetText = styled.p`
  margin: 0 0 12px 0;
  font-size: 15px;
  line-height: 1.3125;
  overflow-wrap: break-word;
`;

export const TweetImage = styled.img`
  width: 100%;
  border-radius: 16px;
  margin-bottom: 12px;
  border: 1px solid #eff3f4;
`;

export const TweetActions = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 425px;
  margin-top: 12px;
`;

export const TweetActionButton = styled.div`
  display: flex;
  align-items: center;
  color: #536471;
  font-size: 13px;

  svg {
    margin-right: 4px;
  }

  &:hover {
    color: #1d9bf0;
  }
`;

export const BottomNavigation = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-top: 1px solid #eff3f4;
  padding: 8px 0;
  z-index: 100;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const BottomNavItem = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.active ? "#1d9bf0" : "#536471")};
  font-size: 10px;
`;
