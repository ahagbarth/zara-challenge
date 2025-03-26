import { TProduct } from "@/features/ProductGrid/types";

export type TStore = {
    products: TProduct[];
    cart: TProduct[];
    search: string;
    searchLength: number;
    setProducts: (products: TProduct[]) => void;
    addToCart: (product: TProduct) => void;
    setSearch: (search: string) => void;
  };