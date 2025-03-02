import React, { useState } from 'react';
import Header from '../components/Header';
import HomeTabs from '../components/HomeTabs';
import CryComposer from '../components/CryComposer';
import Cry from '../components/Cry';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useGetCriesQuery, useGetFollowingCriesQuery } from '../store/api/apiSlice';
import { useToast } from '../hooks/useToast';
import { Cry as CryType } from '../types';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'for-you' | 'following'>('for-you');
  const { user } = useSelector((state: RootState) => state.auth);
  const { showToast } = useToast();
  
  // Fetch cries based on active tab
  const { data: forYouCries, isLoading: isLoadingForYou } = useGetCriesQuery();
  const { data: followingCries, isLoading: isLoadingFollowing } = 
    useGetFollowingCriesQuery(user?.id || '', { skip: !user || activeTab !== 'following' });
  
  const handleTabChange = (tab: 'for-you' | 'following') => {
    setActiveTab(tab);
  };
  
  const handleHelpClick = (cry: CryType) => {
    // This will be implemented in Step 4 when we add the donation system
    showToast('Функция помощи будет доступна в ближайшее время', 'info');
  };
  
  const isLoading = activeTab === 'for-you' ? isLoadingForYou : isLoadingFollowing;
  const cries = activeTab === 'for-you' ? forYouCries : followingCries;
  
  // Filter cries to show only approved ones for regular users
  const filteredCries = cries?.filter(cry => 
    cry.status === 'approved' || (user?.isModerator && cry.status !== 'approved')
  );
  
  return (
    <>
      <Header title="Главная" />
      <HomeTabs onTabChange={handleTabChange} />
      <CryComposer />
      
      {isLoading ? (
        <div style={{ padding: '20px', textAlign: 'center' }}>Загрузка кличей...</div>
      ) : filteredCries && filteredCries.length > 0 ? (
        filteredCries.map(cry => (
          <Cry key={cry.id} cry={cry} onHelpClick={handleHelpClick} />
        ))
      ) : (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          {activeTab === 'following' ? 'Подпишитесь на людей, чтобы видеть их кличи!' : 'Кличей не найдено.'}
        </div>
      )}
    </>
  );
};

export default Home;