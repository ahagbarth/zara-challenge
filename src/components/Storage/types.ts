export type TStorage = {
  capacity: string;
};

export type TStorageComponent = {
  storage: TStorage;
  isActive: boolean;
  setActiveStorage: (storage: TStorage) => void;
};
