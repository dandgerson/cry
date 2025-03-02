import React, { useState, useEffect } from 'react';
import { 
  Image, Smile, Calendar, MapPin, 
  BarChart2, PenSquare, Upload 
} from 'lucide-react';
import { 
  CryComposerContainer, ComposerAvatar, 
  ComposerContent, ComposerActions, 
  ComposerTools, PostButton,
  CryComposerForm, CryComposerRow,
  CryComposerField, CryComposerLabel,
  CryComposerSelect, CryComposerInput,
  CryComposerTextarea, CryComposerSubmit
} from './styled';
import Avatar from './Avatar';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useGetCategoriesQuery, useGetHelpTypesQuery, useGetUrgencyLevelsQuery, useCreateCryMutation } from '../store/api/apiSlice';
import { useToast } from '../hooks/useToast';

interface CryComposerProps {
  onCryCreated?: () => void;
}

const CryComposer: React.FC<CryComposerProps> = ({ onCryCreated }) => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [helpType, setHelpType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [location, setLocation] = useState('');
  const [amountNeeded, setAmountNeeded] = useState<number | ''>('');
  
  const { user } = useSelector((state: RootState) => state.auth);
  const { data: categories } = useGetCategoriesQuery();
  const { data: helpTypes } = useGetHelpTypesQuery();
  const { data: urgencyLevels } = useGetUrgencyLevelsQuery();
  
  const [createCry, { isLoading }] = useCreateCryMutation();
  const { showToast } = useToast();
  
  // Set default values when data is loaded
  useEffect(() => {
    if (categories && categories.length > 0 && !category) {
      setCategory(categories[0].name);
    }
    
    if (helpTypes && helpTypes.length > 0 && !helpType) {
      setHelpType(helpTypes[0].name);
    }
    
    if (urgencyLevels && urgencyLevels.length > 0 && !urgency) {
      setUrgency(urgencyLevels[0].name);
    }
  }, [categories, helpTypes, urgencyLevels, category, helpType, urgency]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;
    
    if (!content.trim()) {
      showToast('Пожалуйста, опишите вашу ситуацию', 'error');
      return;
    }
    
    if (!location.trim()) {
      showToast('Пожалуйста, укажите местоположение', 'error');
      return;
    }
    
    if (helpType === 'financial' && (amountNeeded === '' || amountNeeded <= 0)) {
      showToast('Пожалуйста, укажите необходимую сумму', 'error');
      return;
    }
    
    try {
      await createCry({
        content,
        userId: user.id,
        category,
        helpType,
        urgency,
        location,
        amountNeeded: helpType === 'financial' ? Number(amountNeeded) : 0,
        status: 'pending'
      }).unwrap();
      
      // Reset form
      setContent('');
      setLocation('');
      setAmountNeeded('');
      
      showToast('Клич создан и отправлен на модерацию!', 'success');
      
      if (onCryCreated) {
        onCryCreated();
      }
    } catch (error) {
      showToast('Не удалось создать клич. Пожалуйста, попробуйте снова.', 'error');
      console.error('Failed to create cry:', error);
    }
  };
  
  if (!user) return null;
  
  return (
    <CryComposerContainer>
      <ComposerAvatar>
        <Avatar src={user.profileImageUrl} alt={user.name} />
      </ComposerAvatar>
      
      <ComposerContent>
        <CryComposerForm onSubmit={handleSubmit}>
          <CryComposerTextarea 
            placeholder="Опишите вашу ситуацию и какая помощь вам нужна..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          
          <CryComposerRow>
            <CryComposerField>
              <CryComposerLabel>Категория</CryComposerLabel>
              <CryComposerSelect 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories?.map(cat => (
                  <option key={cat.id} value={cat.name}>
                    {cat.displayName}
                  </option>
                ))}
              </CryComposerSelect>
            </CryComposerField>
            
            <CryComposerField>
              <CryComposerLabel>Тип помощи</CryComposerLabel>
              <CryComposerSelect 
                value={helpType}
                onChange={(e) => setHelpType(e.target.value)}
              >
                {helpTypes?.map(type => (
                  <option key={type.id} value={type.name}>
                    {type.displayName}
                  </option>
                ))}
              </CryComposerSelect>
            </CryComposerField>
          </CryComposerRow>
          
          <CryComposerRow>
            <CryComposerField>
              <CryComposerLabel>Срочность</CryComposerLabel>
              <CryComposerSelect 
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
              >
                {urgencyLevels?.map(level => (
                  <option key={level.id} value={level.name}>
                    {level.displayName}
                  </option>
                ))}
              </CryComposerSelect>
            </CryComposerField>
            
            <CryComposerField>
              <CryComposerLabel>Местоположение</CryComposerLabel>
              <CryComposerInput 
                type="text"
                placeholder="Город или 'Онлайн'"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </CryComposerField>
          </CryComposerRow>
          
          {helpType === 'financial' && (
            <CryComposerRow>
              <CryComposerField>
                <CryComposerLabel>Необходимая сумма (₽)</CryComposerLabel>
                <CryComposerInput 
                  type="number"
                  placeholder="Например: 5000"
                  value={amountNeeded}
                  onChange={(e) => setAmountNeeded(e.target.value === '' ? '' : Number(e.target.value))}
                  min="0"
                />
              </CryComposerField>
            </CryComposerRow>
          )}
          
          <ComposerActions>
            <ComposerTools>
              <Image size={20} />
              <Upload size={20} />
              <Smile size={20} />
              <MapPin size={20} />
            </ComposerTools>
            
            <CryComposerSubmit 
              type="submit"
              disabled={isLoading || !content.trim() || !location.trim() || (helpType === 'financial' && (amountNeeded === '' || Number(amountNeeded) <= 0))}
            >
              Создать клич
            </CryComposerSubmit>
          </ComposerActions>
        </CryComposerForm>
      </ComposerContent>
    </CryComposerContainer>
  );
};

export default CryComposer;