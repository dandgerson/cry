import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  color: var(--text-color);
  background-color: var(--background-color);
`;

export const MainSection = styled.main`
  flex: 1;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
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
  font-weight: ${props => props.active ? '700' : '400'};
  margin-bottom: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  color: var(--text-color);

  &:hover {
    background-color: var(--sidebar-hover-color);
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
  background-color: var(--primary-color);
  color: var(--button-text);
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
    background-color: var(--primary-hover-color);
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
  background-color: var(--secondary-background);
  border: none;
  border-radius: 9999px;
  padding: 12px 40px;
  font-size: 15px;
  width: 100%;
  outline: none;
  color: var(--text-color);

  &:focus {
    background-color: var(--background-color);
    border: 1px solid var(--primary-color);
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--secondary-text-color);
`;

export const TrendsContainer = styled.div`
  background-color: var(--secondary-background);
  border-radius: 16px;
  margin-bottom: 16px;
`;

export const TrendsHeader = styled.div`
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 800;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-color);
`;

export const TrendItem = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--hover-color);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TrendCategory = styled.div`
  font-size: 13px;
  color: var(--secondary-text-color);
`;

export const TrendName = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin: 2px 0;
  color: var(--text-color);
`;

export const TrendTweets = styled.div`
  font-size: 13px;
  color: var(--secondary-text-color);
`;

export const SuggestedUsersContainer = styled.div`
  background-color: var(--secondary-background);
  border-radius: 16px;
  margin-bottom: 16px;
`;

export const SuggestedUserItem = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--hover-color);
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
  color: var(--text-color);
`;

export const UserUsername = styled.div`
  color: var(--secondary-text-color);
  font-size: 14px;
`;

export const FollowButton = styled.button`
  background-color: var(--text-color);
  color: var(--background-color);
  border: none;
  border-radius: 9999px;
  padding: 6px 16px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--header-background);
  backdrop-filter: blur(12px);
  z-index: 10;
  padding: 0 16px;
  height: 53px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
`;

export const HeaderTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: var(--text-color);
`;

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
`;

export const Tab = styled.div<{ active?: boolean }>`
  flex: 1;
  text-align: center;
  padding: 16px 0;
  font-weight: ${props => props.active ? '700' : '500'};
  color: ${props => props.active ? 'var(--text-color)' : 'var(--secondary-text-color)'};
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.active ? '56px' : '0'};
    height: 4px;
    background-color: var(--primary-color);
    border-radius: 9999px;
  }
`;

export const TweetComposerContainer = styled.div`
  padding: 16px;
  display: flex;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--compose-background);
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
  background-color: transparent;
  color: var(--text-color);

  &::placeholder {
    color: var(--secondary-text-color);
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
  color: var(--primary-color);
`;

export const PostButton = styled.button<{ disabled?: boolean }>`
  background-color: ${props => props.disabled ? 'var(--disabled-button-bg)' : 'var(--primary-color)'};
  color: var(--button-text);
  border: none;
  border-radius: 9999px;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 15px;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.disabled ? 'var(--disabled-button-bg)' : 'var(--primary-hover-color)'};
  }
`;

export const TweetContainer = styled.div`
  padding: 12px 16px;
  display: flex;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--hover-color);
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
  color: var(--text-color);
`;

export const TweetUsername = styled.span`
  color: var(--secondary-text-color);
  margin-right: 4px;
`;

export const TweetTime = styled.span`
  color: var(--secondary-text-color);
  &::before {
    content: '·';
    margin: 0 4px;
  }
`;

export const TweetText = styled.p`
  margin: 0 0 12px 0;
  font-size: 15px;
  line-height: 1.3125;
  overflow-wrap: break-word;
  color: var(--text-color);
`;

export const TweetImage = styled.img`
  width: 100%;
  border-radius: 16px;
  margin-bottom: 12px;
  border: 1px solid var(--border-color);
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
  color: var(--secondary-text-color);
  font-size: 13px;

  svg {
    margin-right: 4px;
  }

  &:hover {
    color: var(--primary-color);
  }
`;

export const BottomNavigation = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--background-color);
  border-top: 1px solid var(--border-color);
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
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--secondary-text-color)'};
  font-size: 10px;
`;

// New styled components for Cry platform

export const CryContainer = styled(TweetContainer)`
  cursor: default;
`;

export const CryContent = styled(TweetContent)``;

export const CryHeader = styled(TweetHeader)``;

export const CryMetadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`;

export const CryTag = styled.div<{ type?: 'category' | 'helpType' | 'urgency' | 'status' }>`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${props => {
    switch (props.type) {
      case 'category':
        return 'var(--category-tag-bg)';
      case 'helpType':
        return 'var(--help-type-tag-bg)';
      case 'urgency':
        return props.children === 'Высокая'
          ? 'var(--urgency-high-bg)'
          : props.children === 'Средняя'
            ? 'var(--urgency-medium-bg)'
            : 'var(--urgency-low-bg)';
      case 'status':
        return props.children === 'Одобрено'
          ? 'var(--status-approved-bg)'
          : props.children === 'На рассмотрении'
            ? 'var(--status-pending-bg)'
            : 'var(--status-rejected-bg)';
      default:
        return 'var(--secondary-background)';
    }
  }};
  color: ${props => {
    switch (props.type) {
      case 'urgency':
        return props.children === 'Высокая'
          ? 'var(--urgency-high-text)'
          : props.children === 'Средняя'
            ? 'var(--urgency-medium-text)'
            : 'var(--urgency-low-text)';
      case 'status':
        return props.children === 'Одобрено'
          ? 'var(--status-approved-text)'
          : props.children === 'На рассмотрении'
            ? 'var(--status-pending-text)'
            : 'var(--status-rejected-text)';
      default:
        return 'var(--text-color)';
    }
  }};
  margin-right: 4px;
  
  svg {
    margin-right: 4px;
    width: 12px;
    height: 12px;
  }
`;

export const CryLocation = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--secondary-text-color);
  margin-bottom: 8px;
  
  svg {
    margin-right: 4px;
    width: 14px;
    height: 14px;
  }
`;

export const CryProgressContainer = styled.div`
  margin: 12px 0;
`;

export const CryProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 13px;
`;

export const CryProgressAmount = styled.span`
  font-weight: 700;
  color: var(--text-color);
`;

export const CryProgressGoal = styled.span`
  color: var(--secondary-text-color);
`;

export const CryProgressBar = styled.div`
  height: 8px;
  background-color: var(--secondary-background);
  border-radius: 4px;
  overflow: hidden;
`;

export const CryProgressFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${props => `${Math.min(props.percentage, 100)}%`};
  background-color: var(--primary-color);
  border-radius: 4px;
`;

export const CryActions = styled(TweetActions)`
  margin-top: 16px;
`;

export const CryActionButton = styled(TweetActionButton)``;

export const CryHelpButton = styled.button`
  background-color: var(--primary-color);
  color: var(--button-text);
  border: none;
  border-radius: 9999px;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 12px;
  width: 100%;

  &:hover {
    background-color: var(--primary-hover-color);
  }
`;

export const CryComposerContainer = styled(TweetComposerContainer)``;

export const CryComposerForm = styled.form`
  width: 100%;
`;

export const CryComposerRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const CryComposerField = styled.div`
  flex: 1;
`;

export const CryComposerLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  color: var(--text-color);
`;

export const CryComposerSelect = styled.select`
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 14px;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

export const CryComposerInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 14px;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
  
  &::placeholder {
    color: var(--secondary-text-color);
  }
  
  &[type="number"] {
    -moz-appearance: textfield;
  }
  
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const CryComposerTextarea = styled(ComposerTextarea)`
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 14px;
  min-height: 80px;
  
  &:focus {
    border-color: var(--primary-color);
  }
`;

export const CryComposerSubmit = styled(PostButton)`
  width: 100%;
  margin-top: 8px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
`;

export const FilterButton = styled.button<{ active?: boolean }>`
  background-color: ${props => props.active ? 'var(--primary-color)' : 'var(--secondary-background)'};
  color: ${props => props.active ? 'var(--button-text)' : 'var(--text-color)'};
  border: none;
  border-radius: 9999px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-hover-color)' : 'var(--hover-color)'};
  }
`;

export const StatsContainer = styled.div`
  background-color: var(--secondary-background);
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 16px;
`;

export const StatsHeader = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: var(--text-color);
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: var(--text-color);
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: var(--secondary-text-color);
`;

export const DonationContainer = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
`;

export const DonationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const DonationAmount = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: var(--text-color);
  margin-right: 8px;
`;

export const DonationTime = styled.span`
  font-size: 13px;
  color: var(--secondary-text-color);
`;

export const DonationMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: var(--text-color);
`;

export const ResponseContainer = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
`;

export const ResponseHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const ResponseType = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: var(--primary-color);
  margin-right: 8px;
`;

export const ResponseTime = styled.span`
  font-size: 13px;
  color: var(--secondary-text-color);
`;

export const ResponseMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: var(--text-color);
`;

export const ResponseStatus = styled.span<{ status: 'pending' | 'accepted' | 'rejected' }>`
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: auto;
  background-color: ${props => 
    props.status === 'accepted' 
      ? 'var(--status-approved-bg)' 
      : props.status === 'rejected'
        ? 'var(--status-rejected-bg)'
        : 'var(--status-pending-bg)'
  };
  color: ${props => 
    props.status === 'accepted' 
      ? 'var(--status-approved-text)' 
      : props.status === 'rejected'
        ? 'var(--status-rejected-text)'
        : 'var(--status-pending-text)'
  };
`;

export const ModeratorPanel = styled.div`
  padding: 16px;
  background-color: var(--secondary-background);
  border-radius: 8px;
  margin-top: 16px;
`;

export const ModeratorTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text-color);
`;

export const ModeratorActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ModeratorApproveButton = styled.button`
  background-color: var(--status-approved-bg);
  color: var(--status-approved-text);
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  flex: 1;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const ModeratorRejectButton = styled.button`
  background-color: var(--status-rejected-bg);
  color: var(--status-rejected-text);
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  flex: 1;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const ModeratorReasonInput = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 14px;
  margin-top: 8px;
  resize: none;
  min-height: 80px;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

// Rename tweet styled components for backward compatibility
export const CryTweetContainer = TweetContainer;
export const CryTweetAvatar = TweetAvatar;
export const CryTweetContent = TweetContent;
export const CryTweetHeader = TweetHeader;
export const CryTweetAuthor = TweetAuthor;
export const CryTweetUsername = TweetUsername;
export const CryTweetTime = TweetTime;
export const CryTweetText = TweetText;
export const CryTweetImage = TweetImage;
export const CryTweetActions = TweetActions;
export const CryTweetActionButton = TweetActionButton;