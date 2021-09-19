import React, { useContext } from 'react';
import styled from '@emotion/styled'
import PriceRange from './PriceRange';
import Checkbox from './Checkbox';

import { SearchContext } from '../contexts/SearchContext';


const Container = styled.div`
  display: grid;
  grid-template-areas:
    "categories storage"
    "slider slider";

  @media only screen and (min-width: 768px) {
    grid-template-areas:
      "categories"
      "slider"
      "storage";

  }
  @media only screen and (min-width: 960px) {
    grid-template-areas:
      "categories"
      "slider"
      "storage";
  }
`;

const Section = styled.div`
  display: grid;
  grid-template-rows: auto;
  padding: 24px;
  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Categories = styled(Section)`
  grid-area: categories;
`;

const PriceFilter = styled(Section)`
  grid-area: slider;
`;

const StorageOptions = styled(Section)`
  grid-area: storage;
`;

const Title= styled.span`
  font-size: 22px;
  margin-bottom: 22px;
`;

const CategoryItem = styled.span`
  font-size: 16px;
  margin-bottom: 22px;
`;

const SideBar = () => {
  const { dispatch, searchState } = useContext(SearchContext);
  const { storageOptions } = searchState;


  const handleStorageChange = (e) => {
    let options = storageOptions;
    if (e.target.checked) {
      options.push(e.target.value);
    } else {
      options = storageOptions.filter(value => value !== e.target.value);
    }

    dispatch({
      type: `UPDATE_STORAGE_OPTIONS`,
      data: {
        storageOptions: options
      },
    });

  }

  return (
    <Container>
      <Categories>
        <Title>Categories</Title>
        <>
          {['All', 'Iphone', 'Samsung', 'Ipad', 'Macbook', 'AirPods'].map((item, i) => <CategoryItem key={`${item}-${i}`}>{item}</CategoryItem>)}
        </>
      </Categories>
      <PriceFilter>
        <Title>Price Filter</Title>
        <PriceRange />
      </PriceFilter>
      <StorageOptions>
        <Title>Storage</Title>
        <>
          {['32GB', '64GB', '128GB', '256GB', '512GB',].map((item, i) => {
            return (
            <Checkbox
              key={`${item}-${i}`}
              name={item}
              checked={storageOptions.includes(item)}
              onChange={handleStorageChange}
            />
          )})}
        </>
      </StorageOptions>

    </Container>
  );
}

export default SideBar;
