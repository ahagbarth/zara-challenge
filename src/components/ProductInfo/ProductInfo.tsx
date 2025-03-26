import React, { useState } from 'react';
import {
  Info,
  InfoContainer,
  Title,
  Selectors,
  StorageContainer,
  ColorContainer,
  SelectorContainer,
} from './styles';
import Label from '../Label';
import Storage from '../Storage';
import Color from '../Color';
import Image from 'next/image';
import { ProductInfoProps } from './types';
import Button from '../Button';

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  price,
  storageOptions,
  colorOptions,
  onAddToCart,
}) => {
  const [color, setColor] = useState(colorOptions[0]);
  const [selectedStorage, setStorage] = useState(storageOptions[0]);

  return (
    <InfoContainer>
      <Image src={color.imageUrl} alt={name} width={414} height={414} />
      <Info>
        <Title>
          <Label text={name} variant="header" />
          {/* TODO: From should only be displayed if no storage is selected */}
          <Label
            text={
              price !== selectedStorage.price
                ? `From ${selectedStorage.price} EUR`
                : `${selectedStorage.price} EUR`
            }
          />
        </Title>
        <Selectors>
          <SelectorContainer>
            <Label text="Storage ¿HOW MUCH SPACE DO YOU NEED?" isUpperCase />
            <StorageContainer>
              {storageOptions.map((storage) => (
                <Storage
                  key={storage.capacity}
                  storage={storage}
                  isActive={selectedStorage.capacity === storage.capacity}
                  setActiveStorage={setStorage}
                />
              ))}
            </StorageContainer>
          </SelectorContainer>
          <SelectorContainer>
            <Label text="color. pick your favourite." isUpperCase />
            <ColorContainer>
              {colorOptions.map((color) => (
                <Color
                  key={color.hexCode}
                  color={color}
                  setActiveColor={setColor}
                />
              ))}
            </ColorContainer>
            <Label text={color.name} />
          </SelectorContainer>
        </Selectors>
        <Button onClick={onAddToCart}> Add to cart</Button>
      </Info>
    </InfoContainer>
  );
};

export default ProductInfo;
