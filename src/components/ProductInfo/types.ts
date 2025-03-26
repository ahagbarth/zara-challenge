export type StorageOption = {
    capacity: string;
};

export type ColorOption = {
    name: string;
    hexCode: string;
    imageUrl: string;
};

export type ProductInfoProps = {
    name: string;
    price: number;
    storageOptions: StorageOption[];
    colorOptions: ColorOption[];
    onAddToCart: () => void
};
