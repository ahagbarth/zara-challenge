'use client';
import React from 'react';
import { Container } from './styles';
import ProductInfo from '@/components/ProductInfo';
import SpecsList from '@/components/SpecsList';
import { TProduct } from '../../features/ProductGrid/types';
import { useStore } from '@/lib/StoreContext/StoreProvider';
import { TStore } from '@/lib/StoreContext/types';
import SimilarProducts from '@/components/SimilarProducts';

const ProductDetailPage: React.FC<{ phone: TProduct }> = ({ phone }) => {
  const { name, brand, id, basePrice, colorOptions, specs, storageOptions, similarProducts } =
    phone;
  const { addToCart } = useStore() as TStore;

  return (
    <Container>
      <ProductInfo
        id={id}
        name={name}
        price={basePrice}
        storageOptions={storageOptions}
        colorOptions={colorOptions}
        onAddToCart={(product) => addToCart(product)}
      />
      <SpecsList specs={{ brand, ...specs }} />
        <SimilarProducts similarProducts={similarProducts}/>
    </Container>
  );
};

export default ProductDetailPage;
