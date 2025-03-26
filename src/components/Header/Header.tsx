'use client';
import React from 'react';
import Bag from '../Bag';
import { HeaderContainer, HomeLogo } from './styles';
import Logo from '../Logo';

const Header = () => {
  return (
    <HeaderContainer>
      <HomeLogo href="/">
        <Logo />
      </HomeLogo>
      <Bag />
    </HeaderContainer>
  );
};

export default Header;
