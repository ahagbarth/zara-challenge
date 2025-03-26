'use client';
import React from 'react';
import { SearchInput } from './styles';

const Search: React.FC<{
  placeholder?: string;
  setValue: string;
  onChange: (value: string) => void;
}> = ({ placeholder = 'Search...', setValue, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <SearchInput
      type="search"
      placeholder={placeholder}
      value={setValue}
      onChange={handleInputChange}
    />
  );
};

export default Search;
