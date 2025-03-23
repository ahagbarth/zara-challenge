'use client';
import React from 'react';
import {
  CartItemContainer,
  DetailsContainer,
  ImageContainer,
  Info,
  Model,
  Price,
} from './styles';
import Label from '../Label';

const CartItem = () => {
  return (
    <CartItemContainer>
      <ImageContainer>.</ImageContainer>
      <DetailsContainer>
        <Info>
          <Model>
            <Label text="Iphone 15 pro" />
            <Label text="128 GB  | Blue titanium" />
          </Model>
          <Price>
            <Label text="1099 EUR" />
          </Price>
        </Info>
        <button>Eliminar</button>
      </DetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
