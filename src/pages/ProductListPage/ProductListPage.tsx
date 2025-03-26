'use client';
import ProductGrid from '@/features/ProductGrid';
import SearchWrapper from '@/features/SearchWrapper';
import React from 'react';
import { PageContainer } from './styles';
import { useStore } from '@/lib/StoreContext/StoreProvider';
import { TStore } from '@/lib/StoreContext/types';
import { useEffect } from 'react';
import { TProduct } from '@/features/ProductGrid/types';

const ProductListPage: React.FC<{ products: TProduct[] }> = ({ products }) => {
  const { setProducts, search } = useStore() as TStore;

  useEffect(() => {
    setProducts(products);
  }, []);

  useEffect(() => {
    fetch(
      `https://prueba-tecnica-api-tienda-moviles.onrender.com/products?limit=20${Boolean(search) ? `&search=${search}` : ''}`,
      {
        headers: { 'x-api-key': '87909682e6cd74208f41a6ef39fe4191' },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [search, setProducts]);

  return (
    <PageContainer>
      <SearchWrapper />
      <ProductGrid />
    </PageContainer>
  );
};

export default ProductListPage;
