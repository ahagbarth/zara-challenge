import { TColor } from '@/components/Color/types';
import { TStorage } from '@/components/Storage/types';

export type TProduct = {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
  colorOptions: TColor[];
  specs: Record<string, string>;
  storageOptions: TStorage[];
  similarProducts: TSimilarProduct;
};

export type TSimilarProduct = TProduct[]

export type TProductGrid = {
  products?: TProduct[];
};
