'use client';
import React, { PropsWithChildren } from 'react';
import { ButtonComponent } from './styles';

const Button: React.FC<PropsWithChildren & {
  isOutlined?: boolean;
  disabled?: boolean;
  onClick: () => void;
}> = ({ isOutlined = false, disabled = false, onClick, children }) => (
    <ButtonComponent
      isOutlined={isOutlined}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );

export default Button;
