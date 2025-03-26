import ProductDetailPage from '@/pages/ProductDetailPage';
import React from 'react';
import ErrorPage from '@/pages/ErrorPage';

const PhoneDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const data = await fetch(
    `https://prueba-tecnica-api-tienda-moviles.onrender.com/products/${id}`,
    {
      headers: { 'x-api-key': '87909682e6cd74208f41a6ef39fe4191' },
    }
  );

  if (!data.ok) {
    return <ErrorPage />;
  }

  const phone = await data.json();

  return <ProductDetailPage phone={phone} />;
};

export default PhoneDetailPage;
