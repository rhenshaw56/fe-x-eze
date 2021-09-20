import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'

import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';
import Products from './components/Products';
import { SearchContextProvider } from './contexts/SearchContext';
import axios from "axios";

import './App.css';

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});



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
    grid-template-columns: 300px auto;
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

const PopulateBtn = styled.button`
  width: 60px;
  height: 50px;
  background: #eae8ea;
  color: #1e242f;
  line-height: 40px;
  text-align: center;
  font-size: 40px;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  boxhadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px;
  outline: 0;
  position: fixed;
  top: 90vh;
  left: 0px;
  user-select: none;
&:hover, &:active {
  opacity: 0.7;
  cursor: pointer;
}
`;



const LIMIT = 20;
const INITIAL_QUERY = `page=${1}&limit=${LIMIT}&maxPrice=${1000}&minPrice=${100}`


function App() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState(INITIAL_QUERY);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async (query) => {
    const resource = `search${query ? `?${query}` : ''}`;
    setLoading(true);
    try {
      const response = await Api.get(resource);

      setProducts(response.data.products);
      setCount(response.data.count);

      setLoading(false);
    } catch (e) {
      setLoading(false);
    }

  }

  const loadProducts = async () => {
    const resource = `populate`;
    setLoading(true);
    try {
      await Api.post(resource);
      setLoading(false);
    } catch(e) {
      setLoading(false);
    }

  }

  useEffect(() => {
    getProducts(query);
  }, [query]);


  return (
    <Container>
      <SearchContextProvider
        value={{
          query,
          setQuery,
          page,
          setPage,
          limit: LIMIT
        }}
      >
        <PromoContainer>
          <SearchBar handleSearch={(query) => setQuery(query)} />
        </PromoContainer>
        <Wrapper>
          <SideBarContainer>
            <SideBar />
            <PopulateBtn onClick={loadProducts}>+</PopulateBtn>
          </SideBarContainer>
          <ProductContainer>
            <Products products={products} count={count} loading={loading} />
          </ProductContainer>
        </Wrapper>
      </SearchContextProvider>‘
    </Container>
  );
}

export default App;
