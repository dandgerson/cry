import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Search, Bell, Mail, Bookmark, Heart, BarChart2, Shield,
  User, MoreHorizontal, Twitter, PenSquare 
} from 'lucide-react';
import { SidebarLeft, NavItem, TweetButton } from './styled';
import ThemeToggle from './ThemeToggle';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <SidebarLeft>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <NavItem active={isActive('/')}>
          <Home size={26} />
          <span>Главная</span>
        </NavItem>
      </Link>

      <Link to="/explore" style={{ textDecoration: 'none', color: 'inherit' }}>
        <NavItem active={isActive('/explore')}>
          <Search size={26} />
          <span>Поиск</span>
        </NavItem>
      </Link>

      <Link to="/categories" style={{ textDecoration: 'none', color: 'inherit' }}>
        <NavItem active={isActive('/categories')}>
          <Bookmark size={26} />
          <span>Категории</span>
        </NavItem>
      </Link>

      <Link to="/notifications" style={{ textDecoration: 'none', color: 'inherit' }}>
        <NavItem active={isActive('/notifications')}>
          <Bell size={26} />
          <span>Уведомления</span>
        </NavItem>
      </Link>

      <Link to="/messages" style={{ textDecoration: 'none', color: 'inherit' }}>
        <NavItem active={isActive('/messages')}>
          <Mail size={26} />
          <span>Сообщения</span>
        </NavItem>
      </Link>

      <Link to="/bookmarks" style={{ textDecoration: 'none', color: 'inherit' }}>
        <NavItem active={isActive('/bookmarks')}>
          <Heart size={26} />
          <span>Избранное</span>
        </NavItem>
      </Link>

      <Link to="/stats" style={{ textDecoration: 'none', color: 'inherit' }}>
        <NavItem active={isActive('/stats')}>
          <BarChart2 size={26} />
          <span>Статистика</span>
        </NavItem>
      </Link>

      {user?.isModerator && (
        <Link to="/moderation" style={{ textDecoration: 'none', color: 'inherit' }}>
          <NavItem active={isActive('/moderation')}>
            <Shield size={26} />
            <span>Модерация</span>
          </NavItem>
        </Link>
      )}

      <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
        <NavItem active={isActive('/profile')}>
          <User size={26} />
          <span>Профиль</span>
        </NavItem>
      </Link>

      <NavItem>
        <MoreHorizontal size={26} />
        <span>Ещё</span>
      </NavItem>

      <NavItem>
        <ThemeToggle />
        <span>Тема</span>
      </NavItem>

      <TweetButton>
        <span>Создать клич</span>
        <PenSquare size={24} style={{ display: 'none' }} />
      </TweetButton>
    </SidebarLeft>
  );
};

export default Sidebar;