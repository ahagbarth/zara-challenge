export type TProduct = {
    id: string;
    brand: string;
    name: string;
    basePrice: number;
    imageUrl: string;
}

export type TProductGrid = {
    products?: TProduct[];
}