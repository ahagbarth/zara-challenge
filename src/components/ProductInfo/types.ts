import { TCartItem } from '../CartItem/types';

export type StorageOption = {
  capacity: string;
  price?: number;
};

export type ColorOption = {
  name: string;
  hexCode: string;
  imageUrl: string;
};

export type ProductInfoProps = {
  id: string;
  name: string;
  price: number;
  storageOptions: StorageOption[];
  colorOptions: ColorOption[];
  onAddToCart: (_product: TCartItem) => void;
};
