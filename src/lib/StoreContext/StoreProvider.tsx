'use client';
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { TProduct } from '@/features/ProductGrid/types';
import { TStore } from './types';
import { TCartItem } from '@/components/CartItem/types';

export const StoreContext = createContext<TStore | undefined>(undefined);
export const useStore = () => useContext(StoreContext);

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [cart, setCart] = useState<TCartItem[]>([]);
  const [search, setSearch] = useState<string>('');

  const addToCart = (phone: TCartItem) => {
    const updatedCart = [...cart, phone];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (item: number) => {
    const updatedCart = cart.filter((_, index) => index !== item);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        search,
        searchLength: products.length,
        setSearch,
        setProducts,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
