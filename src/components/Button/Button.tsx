'use client';
import React, { PropsWithChildren } from 'react';
import { ButtonComponent } from './styles';

const Button: React.FC<
  PropsWithChildren & {
    isOutlined?: boolean;
    disabled?: boolean;
    isFullWidth?: boolean;
    onClick: () => void;
  }
> = ({
  isOutlined = false,
  isFullWidth = false,
  disabled = false,
  onClick,
  children,
}) => (
  <ButtonComponent
    isOutlined={isOutlined}
    disabled={disabled}
    onClick={onClick}
    isFullWidth={isFullWidth}
  >
    {children}
  </ButtonComponent>
);

export default Button;
