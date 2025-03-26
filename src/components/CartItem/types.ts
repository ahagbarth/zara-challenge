import { TProduct } from '@/features/ProductGrid/types';
import { TColor } from '../Color/types';
import { TStorage } from '../Storage/types';

export type TCartItem = Pick<TProduct, 'name'> & {
  id: string;
  colorOption: TColor;
  storageOption: TStorage;
};
