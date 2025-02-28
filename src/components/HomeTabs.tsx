import React, { useState } from 'react';
import { TabsContainer, Tab } from './styled';

interface HomeTabsProps {
  onTabChange?: (tab: 'for-you' | 'following') => void;
}

const HomeTabs: React.FC<HomeTabsProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<'for-you' | 'following'>('for-you');
  
  const handleTabChange = (tab: 'for-you' | 'following') => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };
  
  return (
    <TabsContainer>
      <Tab 
        active={activeTab === 'for-you'} 
        onClick={() => handleTabChange('for-you')}
      >
        For you
      </Tab>
      <Tab 
        active={activeTab === 'following'} 
        onClick={() => handleTabChange('following')}
      >
        Following
      </Tab>
    </TabsContainer>
  );
};

export default HomeTabs;