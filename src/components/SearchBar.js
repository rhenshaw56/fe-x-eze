import React, { useContext } from 'react';
import styled from 'styled-components';
import { stringify } from 'query-string';
import { debounce } from 'debounce';

import Input from './Input';
import { SearchContext } from '../contexts/SearchContext';

const Container = styled.div`
  position: relative;
  top: 10rem;
`;

const StyledInput = styled(Input)`
height: 4rem;
width: 70%;
font-size: 0.8rem;
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const SearchButton = styled.button`
  width: 150px;
  height: 50px;
  background: #0971f1;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  boxhadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px;
  outline: 0;
  user-select: none;
  &:hover, &:active {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const SearchBar = () => {
  const { dispatch, searchState, setQuery } = useContext(SearchContext);
  const handleInputChange = (e) => {
    dispatch({
      type: "UPDATE_SEARCH_FIELD",
      data: {
        search: e.target.value,
      },
    });
  };
  const handleClick = (e) => {
    const { search, minPrice, maxPrice } = searchState;

    const query = stringify({
      term: `${search || ''}`,
      minPrice,
      maxPrice
    });
    debounce(setQuery(query), 5000);
  }
  return (
    <Container>
      <StyledInput
        placeholder="Enter Search Term (e.g Iphone x, 128GB or A1)"
        onChange={handleInputChange}
      />
      <SearchButton onClick={handleClick}>SEARCH</SearchButton>
    </Container>
  )
}

export default SearchBar;
