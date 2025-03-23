'use client';
import React from 'react';
import { BagContainer } from './styles';
import BagIcon from '../Icons/BagIcon';

const Bag: React.FC<{ quantity?: number }> = ({ quantity = 0 }) => {
  return (
    <BagContainer>
      <BagIcon />
      {quantity}
    </BagContainer>
  );
};

export default Bag;
