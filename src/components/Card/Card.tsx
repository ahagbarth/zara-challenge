import React from 'react';
import {
  CardContainer,
  CardInfo,
  DetailsContainer,
  ImageContainer,
  PriceContainer,
} from './styles';
import Label from '../Label';

const Card = () => {
  return (
    <CardContainer>
        <ImageContainer>
            Card image
        </ImageContainer>
      <CardInfo>
        <DetailsContainer>
          <Label text={'Brand'} variant="caption" />
          <Label text={'Phone Name'} variant="subtitle" />
        </DetailsContainer>
        <PriceContainer>
          <Label text="999 EUR" variant="subtitle" />
        </PriceContainer>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
