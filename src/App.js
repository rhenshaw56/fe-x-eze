import React from 'react';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';
import Products from './components/Products';

import './App.css';


const Container = styled.div`
  text-align: center;
  display: grid;
  grid-gap: 40px;
  background-color: #000;
  width: 100%;
  grid-template-rows: 400px auto;
  grid-gap: 50px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-gap: 50px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 200px auto;
    grid-gap: 0px;
  }
  @media only screen and (min-width: 960px) {
    grid-template-columns: 350px auto;
    grid-gap: 0px;
  }
`;

const PromoContainer = styled.div`
`;

const SideBarContainer = styled.div`
  font-weight: 300;
  letter-spacing: 0.5px;
  color: rgba(255,255,255);
  background: #1e242f;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1px;
`;

const ProductContainer = styled.div`
  display: grid;
  padding-bottom: 100px;
`;


function App() {
  return (
    <Container>
      <PromoContainer>
        <SearchBar />
      </PromoContainer>
      <Wrapper>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <ProductContainer>
          <Products />
        </ProductContainer>
      </Wrapper>
    </Container>
  );
}

export default App;
