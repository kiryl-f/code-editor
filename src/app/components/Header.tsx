import React from 'react';

import { styled } from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #000;
  color: var(--text);
`;


const Header: React.FC = () => {

  return (
    <HeaderContainer>
      <h1>CodeArena</h1>
    </HeaderContainer>
  );
};

export default Header;
