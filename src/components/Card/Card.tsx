import React from 'react';
import {
  CardContainer,
  CardInfo,
  DetailsContainer,
  ImageContainer,
  PriceContainer,
  StyledImage,
} from './styles';
import Label from '../Label';
import { TProduct } from '@/features/ProductGrid/types';

const Card: React.FC<TProduct> = ({ brand, name, basePrice, id, imageUrl }) => {
  return (
    <CardContainer href={`/phone/${id}`}>
      <ImageContainer>
        <StyledImage src={imageUrl} alt={name} width={312} height={257} />
      </ImageContainer>
      <CardInfo>
        <DetailsContainer>
          <Label text={brand} variant="caption" isUpperCase />
          <Label text={name} variant="subtitle" isUpperCase />
        </DetailsContainer>
        <PriceContainer>
          <Label text={`${basePrice} EUR`} variant="subtitle" />
        </PriceContainer>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
