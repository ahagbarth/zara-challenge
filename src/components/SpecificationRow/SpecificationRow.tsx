'use client';
import React from 'react';
import { RowContainer } from './styles';
import Label from '../Label';

const SpecificationRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <RowContainer>
    <Label text={label} isUpperCase variant="subtitle" />
    <Label text={value} variant="subtitle" />
  </RowContainer>
);

export default SpecificationRow;
