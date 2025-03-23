'use client';
import React from 'react';
import { ButtonComponent } from './styles';

const Button: React.FC<{
  isOutlined?: boolean;
  disabled?: boolean;
  onClick: () => void;
}> = ({ isOutlined = false, disabled = false, onClick }) => (
    <ButtonComponent
      isOutlined={isOutlined}
      disabled={disabled}
      onClick={onClick}
    >
      Button
    </ButtonComponent>
  );

export default Button;
