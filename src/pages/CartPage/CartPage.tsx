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
  const cartTotalPrice = cart.reduce(
    (total, item) => total + (item.storageOption.price || 0),
    0
  );

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
      {/* TODO: fix footer layout */}
      <Footer>
        <Content>
          <Label text="Total" isUpperCase />
          <Label text={`${cartTotalPrice} EUR`} isUpperCase />
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
