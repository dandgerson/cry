import React from 'react';
import { 
  MessageCircle, Repeat2, Heart, BarChart2, Share, Bookmark as BookmarkIcon,
  MapPin, Tag, HelpingHand, AlertCircle
} from 'lucide-react';
import { 
  CryContainer, TweetAvatar, CryContent, 
  TweetHeader, TweetAuthor, TweetUsername, 
  TweetTime, TweetText, TweetImage, 
  CryActions, TweetActionButton,
  CryMetadata, CryTag, CryLocation,
  CryProgressContainer, CryProgressHeader,
  CryProgressAmount, CryProgressGoal,
  CryProgressBar, CryProgressFill,
  CryHelpButton
} from './styled';
import Avatar from './Avatar';
import { Cry as CryType, Category, HelpType, UrgencyLevel } from '../types';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { 
  useLikeCryMutation, 
  useShareCryMutation, 
  useAddBookmarkMutation,
  useGetCategoriesQuery,
  useGetHelpTypesQuery,
  useGetUrgencyLevelsQuery
} from '../store/api/apiSlice';
import { useToast } from '../hooks/useToast';

interface CryProps {
  cry: CryType;
  onHelpClick?: (cry: CryType) => void;
}

const Cry: React.FC<CryProps> = ({ cry, onHelpClick }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [likeCry] = useLikeCryMutation();
  const [shareCry] = useShareCryMutation();
  const [addBookmark] = useAddBookmarkMutation();
  const { showToast } = useToast();
  
  const { data: categories } = useGetCategoriesQuery();
  const { data: helpTypes } = useGetHelpTypesQuery();
  const { data: urgencyLevels } = useGetUrgencyLevelsQuery();
  
  const getCategoryName = (categoryId: string) => {
    const category = categories?.find(c => c.name === categoryId);
    return category?.displayName || categoryId;
  };
  
  const getHelpTypeName = (helpTypeId: string) => {
    const helpType = helpTypes?.find(h => h.name === helpTypeId);
    return helpType?.displayName || helpTypeId;
  };
  
  const getUrgencyName = (urgencyId: string) => {
    const urgency = urgencyLevels?.find(u => u.name === urgencyId);
    return urgency?.displayName || urgencyId;
  };
  
  const getStatusName = (status: string) => {
    switch (status) {
      case 'approved': return 'Одобрено';
      case 'pending': return 'На рассмотрении';
      case 'rejected': return 'Отклонено';
      default: return status;
    }
  };
  
  const handleLike = async () => {
    if (!user) return;
    
    try {
      await likeCry(cry.id).unwrap();
    } catch (error) {
      showToast('Не удалось поставить лайк. Пожалуйста, попробуйте снова.', 'error');
      console.error('Failed to like cry:', error);
    }
  };
  
  const handleShare = async () => {
    if (!user) return;
    
    try {
      await shareCry(cry.id).unwrap();
    } catch (error) {
      showToast('Не удалось поделиться. Пожалуйста, попробуйте снова.', 'error');
      console.error('Failed to share cry:', error);
    }
  };
  
  const handleBookmark = async () => {
    if (!user) return;
    
    try {
      await addBookmark({
        userId: user.id,
        cryId: cry.id
      }).unwrap();
      
      showToast('Добавлено в избранное!', 'success');
    } catch (error) {
      showToast('Не удалось добавить в избранное. Пожалуйста, попробуйте снова.', 'error');
      console.error('Failed to bookmark cry:', error);
    }
  };
  
  const handleHelpClick = () => {
    if (onHelpClick) {
      onHelpClick(cry);
    }
  };
  
  // Calculate progress percentage
  const progressPercentage = cry.amountNeeded > 0 
    ? (cry.amountRaised / cry.amountNeeded) * 100 
    : 0;
  
  return (
    <CryContainer>
      <TweetAvatar>
        <Avatar src={cry.user.profileImageUrl} alt={cry.user.name} />
      </TweetAvatar>
      
      <CryContent>
        <TweetHeader>
          <TweetAuthor>{cry.user.name}</TweetAuthor>
          <TweetUsername>@{cry.user.username}</TweetUsername>
          <TweetTime>{cry.createdAt}</TweetTime>
        </TweetHeader>
        
        <CryMetadata>
          <CryTag type="category">
            <Tag size={12} />
            {getCategoryName(cry.category)}
          </CryTag>
          
          <CryTag type="helpType">
            <HelpingHand size={12} />
            {getHelpTypeName(cry.helpType)}
          </CryTag>
          
          <CryTag type="urgency">
            <AlertCircle size={12} />
            {getUrgencyName(cry.urgency)}
          </CryTag>
          
          <CryTag type="status">
            {getStatusName(cry.status)}
          </CryTag>
        </CryMetadata>
        
        <CryLocation>
          <MapPin size={14} />
          {cry.location}
        </CryLocation>
        
        <TweetText>{cry.content}</TweetText>
        
        {cry.images && cry.images.length > 0 && (
          <TweetImage src={cry.images[0]} alt="Изображение к кличу" />
        )}
        
        {cry.helpType === 'financial' && cry.amountNeeded > 0 && (
          <CryProgressContainer>
            <CryProgressHeader>
              <CryProgressAmount>{cry.amountRaised} ₽</CryProgressAmount>
              <CryProgressGoal>из {cry.amountNeeded} ₽</CryProgressGoal>
            </CryProgressHeader>
            <CryProgressBar>
              <CryProgressFill percentage={progressPercentage} />
            </CryProgressBar>
          </CryProgressContainer>
        )}
        
        <CryActions>
          <TweetActionButton>
            <MessageCircle size={18} />
            <span>{cry.replies}</span>
          </TweetActionButton>
          
          <TweetActionButton onClick={handleShare}>
            <Repeat2 size={18} />
            <span>{cry.shares}</span>
          </TweetActionButton>
          
          <TweetActionButton onClick={handleLike}>
            <Heart size={18} />
            <span>{cry.likes}</span>
          </TweetActionButton>
          
          <TweetActionButton>
            <BarChart2 size={18} />
            <span>{cry.views}</span>
          </TweetActionButton>
          
          <TweetActionButton onClick={handleBookmark}>
            <BookmarkIcon size={18} />
          </TweetActionButton>
        </CryActions>
        
        {cry.status === 'approved' && (
          <CryHelpButton onClick={handleHelpClick}>
            {cry.helpType === 'financial' ? 'Помочь деньгами' : 'Откликнуться'}
          </CryHelpButton>
        )}
      </CryContent>
    </CryContainer>
  );
};

export default Cry;