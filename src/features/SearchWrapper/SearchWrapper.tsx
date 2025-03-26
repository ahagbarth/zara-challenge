import Search from '@/components/Search';
import React from 'react';
import { SearchContainer } from './styles';
import Label from '@/components/Label';
import { useStore } from '@/lib/StoreContext/StoreProvider';
import { TStore } from '@/lib/StoreContext/types';

const SearchWrapper = () => {
  const {searchLength, search, setSearch} = useStore() as TStore;
  const resultsTest = `${searchLength} Results`;

  return (
    <SearchContainer>
      <Search onChange={setSearch} setValue={search} />
      <Label text={resultsTest} variant='subtitle'/>
    </SearchContainer>
  );
};

export default SearchWrapper;
