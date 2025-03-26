import ErrorPage from '@/pages/ErrorPage';
import ProductListPage from '@/pages/ProductListPage';

const Home = async () => {
  const data = await fetch(
    `https://prueba-tecnica-api-tienda-moviles.onrender.com/products?limit=20`,
    {
      headers: { 'x-api-key': '87909682e6cd74208f41a6ef39fe4191' },
    }
  );

  if (!data.ok) {
    return <ErrorPage />;
  }

  const products = await data.json();

  return <ProductListPage products={products} />;
};

export default Home;
