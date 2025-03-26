'use client';
import React from 'react';
import { BagContainer } from './styles';
import BagIcon from '../Icons/BagIcon';
import { useStore } from '@/lib/StoreContext/StoreProvider';
import { TStore } from '@/lib/StoreContext/types';

const Bag: React.FC = () => {
  const { cart } = useStore() as TStore;
  const quantity = cart.length;

  return (
    <BagContainer href="/cart">
      <BagIcon />
      {quantity}
    </BagContainer>
  );
};

export default Bag;
