'use client';
import React from 'react';
import {
  CartItemContainer,
  DetailsContainer,
  ImageContainer,
  Info,
  Model,
  Price,
  RemoveButton,
} from './styles';
import Label from '../Label';
import Image from 'next/image';
import { TCartItem } from './types';

const CartItem: React.FC<{ product: TCartItem; onClick: () => void }> = ({
  product,
  onClick,
}) => {
  const { name, storageOption, colorOption } = product;

  return (
    <CartItemContainer>
      <ImageContainer>
        <Image src={colorOption.imageUrl} alt={name} fill objectFit="contain" />
      </ImageContainer>
      <DetailsContainer>
        <Info>
          <Model>
            <Label text={name} />
            <Label text={`${storageOption.capacity} | ${colorOption.name}`} />
          </Model>
          <Price>
            <Label text={`${storageOption.price} EUR`} />
          </Price>
        </Info>
        <RemoveButton onClick={onClick}>Eliminar</RemoveButton>
      </DetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
