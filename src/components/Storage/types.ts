export type TStorage = {
  capacity: string;
  price?: number;
};

export type TStorageComponent = {
  storage: TStorage;
  isActive: boolean;
  setActiveStorage: (storage: TStorage) => void;
};
