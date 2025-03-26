'use client';
import React from 'react';
import { Typography } from './styles';

const Label: React.FC<{
  text: string;
  isUpperCase?: boolean;
  variant?: string;
}> = ({ text, isUpperCase = false, variant = 'body' }) => {
  return (
    <Typography variant={variant}>
      {isUpperCase ? text.toUpperCase() : text}
    </Typography>
  );
};

export default Label;
