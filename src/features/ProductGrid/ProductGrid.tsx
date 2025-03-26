import Card from '@/components/Card';
import React from 'react';
import { GridContainer } from './styles';
import type { TProductGrid } from './types';
import { useStore } from '@/lib/StoreContext/StoreProvider';
import { TStore } from '@/lib/StoreContext/types';

const ProductGrid: React.FC<TProductGrid> = () => {
  const { products } = useStore() as TStore;

  return (
    <GridContainer>
      {products.map((product, index) => (
        <Card key={index} {...product} />
      ))}
    </GridContainer>
  );
};

export default ProductGrid;
