'use client';
import React from 'react';
import { ColorBox, ColorContainer } from './styles';

const Color: React.FC<{ color: string }> = ({ color = '#CCCCCC' }) => (
  <ColorContainer>
    <ColorBox color={color} />
  </ColorContainer>
);

export default Color;
