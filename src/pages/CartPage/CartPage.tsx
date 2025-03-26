'use client';
import React from 'react';
import {
  Container,
  CartContent,
  Footer,
  Content,
  PayButton,
  ContinueButton,
  ButtonGroup,
} from './styles';
import Label from '@/components/Label';
import { TStore } from '@/lib/StoreContext/types';
import { useStore } from '@/lib/StoreContext/StoreProvider';
import CartItem from '@/components/CartItem';
import { redirect } from 'next/navigation';

const CartPage = () => {
  const { cart, removeFromCart } = useStore() as TStore;

  return (
    <Container>
      <CartContent>
        <Label text={`Cart (${cart.length})`} variant="header" isUpperCase />
        {cart.map((product, index) => (
          <CartItem
            key={`${product.id}-${index}`}
            onClick={() => removeFromCart(index)}
            product={product}
          />
        ))}
      </CartContent>
      <Footer>
        <Content>
          <Label text="Total" isUpperCase />
          <Label text="10000" isUpperCase />
        </Content>
        <ButtonGroup>
          <ContinueButton isOutlined onClick={() => redirect('/')}>
            CONTINUE SHOPPING
          </ContinueButton>
          <PayButton onClick={() => {}}>PAY</PayButton>
        </ButtonGroup>
      </Footer>
    </Container>
  );
};

export default CartPage;
