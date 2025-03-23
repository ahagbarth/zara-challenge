'use client';
import React from 'react';
import Bag from '../Bag';
import { HeaderContainer } from './styles';
import Logo from '../Logo';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Bag />
    </HeaderContainer>
  );
};

export default Header;
