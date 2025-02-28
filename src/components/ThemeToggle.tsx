import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s;
  color: var(--text-color);
  
  &:hover {
    background-color: var(--hover-color);
  }
`;

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </ToggleButton>
  );
};

export default ThemeToggle;