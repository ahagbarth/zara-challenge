import React, { useState } from 'react';
import {
  Info,
  InfoContainer,
  Title,
  Selectors,
  StorageContainer,
  ColorContainer,
  SelectorContainer,
  ImageContainer,
} from './styles';
import Label from '../Label';
import Storage from '../Storage';
import Color from '../Color';
import Image from 'next/image';
import { ProductInfoProps } from './types';
import Button from '../Button';
import { TStorage } from '../Storage/types';

const ProductInfo: React.FC<ProductInfoProps> = ({
  id,
  name,
  price,
  storageOptions,
  colorOptions,
  onAddToCart,
}) => {
  const [color, setColor] = useState(colorOptions[0]);
  const [selectedStorage, setStorage] = useState<TStorage | null>(null);

  return (
    <InfoContainer>
      <ImageContainer>
        <Image src={color.imageUrl} alt={name} fill objectFit="contain" priority />
      </ImageContainer>
      <Info>
        <Title>
          <Label text={name} variant="header" isUpperCase />
          <Label
            text={
              Boolean(selectedStorage?.price)
                ? `${selectedStorage?.price} EUR`
                : `From ${price} EUR`
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
                  isActive={selectedStorage?.capacity === storage.capacity}
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
        <Button
        disabled={!selectedStorage}
        isFullWidth
          onClick={() =>
            onAddToCart({
              name,
              id,
              colorOption: color,
              storageOption: selectedStorage as TStorage,
            })
          }
        >
          Add to cart
        </Button>
      </Info>
    </InfoContainer>
  );
};

export default ProductInfo;
