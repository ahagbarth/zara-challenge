"use client"
import React from 'react'
import { SearchInput } from './styles'

const Search: React.FC<{placeholder?: string}> = ({placeholder = 'Search...'}) => {
  return (
    <SearchInput type='search' placeholder={placeholder}/>
  )
}

export default Search