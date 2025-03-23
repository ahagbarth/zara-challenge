'use client';
import React from 'react';
import { RowContainer } from './styles';
import Label from '../Label';

const SpecificationRow = () => (
  <RowContainer>
    <Label text="brand" isUpperCase variant='subtitle'/>
    <Label text="Samsung" variant='subtitle'/>
  </RowContainer>
);

export default SpecificationRow;
