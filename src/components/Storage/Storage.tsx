'use client';
import React from 'react';
import { StorageContainer } from './styles';
import Label from '../Label';
import { TStorageComponent } from './types';

const Storage: React.FC<TStorageComponent> = ({
  storage,
  isActive,
  setActiveStorage,
}) => {
  return (
    <StorageContainer
      isActive={isActive}
      onClick={() => setActiveStorage(storage)}
    >
      <Label text={storage.capacity} variant="subtitle" />
    </StorageContainer>
  );
};

export default Storage;
