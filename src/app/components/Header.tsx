import React from 'react';
import '@/styles/components/header.scss';

import { styled } from "styled-components";
import { useTheme } from "../theme/ThemeContext";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: var(--background);
  color: var(--text);
`;

const ThemeSwitcher = styled.button`
  border: none;
  background: var(--button-bg);
  color: var(--button-text);
  border-radius: 50px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: var(--button-hover-bg);
  }
`;

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <h1>Code Platform</h1>
      <ThemeSwitcher onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark" : "Switch to Light"}
      </ThemeSwitcher>
    </HeaderContainer>
  );
};

export default Header;
