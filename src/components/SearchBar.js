import React, { useContext } from 'react';
import styled from 'styled-components';
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
`;

const SearchBar = () => {
  const { dispatch, ...rest } = useContext(SearchContext);
  console.log('rest', rest);
  const handleInputChange = (e) => {
    dispatch({
      type: "UPDATE_SEARCH_FIELD",
      data: {
        search: e.target.value,
      },
    });
  };
  return (
    <Container>
      <StyledInput
        placeholder="Enter Search Term (e.g Iphone x, 128GB or A1)"
        onChange={handleInputChange}
      />
      <SearchButton>SEARCH</SearchButton>
    </Container>
  )
}

export default SearchBar;
