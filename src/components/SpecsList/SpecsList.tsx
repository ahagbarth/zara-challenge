import React from 'react';
import { SpecsContainer } from './styles';
import Label from '../Label';
import SpecificationRow from '../SpecificationRow';

const SpecsList: React.FC<{ specs: { [key: string]: string } }> = ({
  specs,
}) => (
  <SpecsContainer>
    <Label text="Specifications" isUpperCase variant="header" />
    <div>
      {Object.keys(specs).map((key) => (
        <SpecificationRow key={key} label={key} value={specs[key]} />
      ))}
    </div>
  </SpecsContainer>
);

export default SpecsList;
