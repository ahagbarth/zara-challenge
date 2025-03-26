import { TCartItem } from '@/components/CartItem/types';
import { TProduct } from '@/features/ProductGrid/types';

export type TStore = {
  products: TProduct[];
  cart: TCartItem[];
  search: string;
  searchLength: number;
  setProducts: (products: TProduct[]) => void;
  addToCart: (product: TCartItem) => void;
  removeFromCart: (item: number) => void;
  setSearch: (search: string) => void;
};
