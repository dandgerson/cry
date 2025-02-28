import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Bell, Mail } from 'lucide-react';
import { BottomNavigation, BottomNavItem } from './styled';

const BottomNav: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <BottomNavigation>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <BottomNavItem active={isActive('/')}>
          <Home size={24} />
          <span>Home</span>
        </BottomNavItem>
      </Link>
      
      <Link to="/explore" style={{ textDecoration: 'none', color: 'inherit' }}>
        <BottomNavItem active={isActive('/explore')}>
          <Search size={24} />
          <span>Explore</span>
        </BottomNavItem>
      </Link>
      
      <Link to="/notifications" style={{ textDecoration: 'none', color: 'inherit' }}>
        <BottomNavItem active={isActive('/notifications')}>
          <Bell size={24} />
          <span>Notifications</span>
        </BottomNavItem>
      </Link>
      
      <Link to="/messages" style={{ textDecoration: 'none', color: 'inherit' }}>
        <BottomNavItem active={isActive('/messages')}>
          <Mail size={24} />
          <span>Messages</span>
        </BottomNavItem>
      </Link>
    </BottomNavigation>
  );
};

export default BottomNav;