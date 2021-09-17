import React from 'react';
import styled from 'styled-components';
import Input from './Input';

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
  return (
    <Container>
      <StyledInput
        placeholder="Enter Search Term (e.g Iphone x, 128GB or A1)"
      />
      <SearchButton>SEARCH</SearchButton>
    </Container>
  )
}

export default SearchBar;
