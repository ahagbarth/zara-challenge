"use client"
import React, { PropsWithChildren, createContext, useContext, useState } from 'react';
import { TProduct } from '@/features/ProductGrid/types';
import { TStore } from './types';

export const StoreContext = createContext<TStore | undefined>(undefined);
export const useStore = () => useContext(StoreContext);

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [products, setProducts] = useState<TProduct[]>([]);
    const [cart, setCart] = useState<TProduct[]>([]);
    const [search, setSearch] = useState<string>('');

    const addToCart = (phone: TProduct) => {
        setCart([...cart, phone]);
    };

    return (
        <StoreContext.Provider value={{ products, cart, search, searchLength: products.length , setSearch, setProducts, addToCart } }>
            {children}
        </StoreContext.Provider>
    );
};
