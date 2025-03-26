'use client';
import React from 'react';
import { Container } from './styles';
import ProductInfo from '@/components/ProductInfo';
import SpecsList from '@/components/SpecsList';
import { TProduct } from '../../features/ProductGrid/types';
import { useStore } from '@/lib/StoreContext/StoreProvider';
import { TStore } from '@/lib/StoreContext/types';

const ProductDetailPage: React.FC<{ phone: TProduct }> = ({ phone }) => {
  const { name, brand, basePrice, colorOptions, specs, storageOptions } = phone;
  const { addToCart } = useStore() as TStore;

  return (
    <Container>
      <ProductInfo
        name={name}
        price={basePrice}
        storageOptions={storageOptions}
        colorOptions={colorOptions}
        onAddToCart={() => addToCart(phone)}
      />
      <SpecsList specs={{ brand, ...specs }} />
    </Container>
  );
};

export default ProductDetailPage;
