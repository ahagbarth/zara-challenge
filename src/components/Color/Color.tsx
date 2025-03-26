'use client';
import React from 'react';
import { ColorBox, ColorContainer } from './styles';
import { TColorComponent } from './types';

const Color: React.FC<TColorComponent> = ({
  color = { hexCode: '#CCCCCC', imageUrl: '', name: '' },
  setActiveColor,
}) => (
  <ColorContainer onClick={() => setActiveColor(color)}>
    <ColorBox color={color.hexCode} />
  </ColorContainer>
);

export default Color;
