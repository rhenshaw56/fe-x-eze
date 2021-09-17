import React from 'react';
import styled from 'styled-components';
import PriceRange from './PriceRange';
import Checkbox from './Checkbox';

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
  text-align: left;
  padding: 24px;
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
  const handleStorageChange = (e) => {
    console.log('e', e.target.value);
    console.log('e', e.target.checked);
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
          <Checkbox name="32GB" onChange={handleStorageChange} />
          <Checkbox name="64GB" onChange={handleStorageChange} />
          <Checkbox name="128GB" onChange={handleStorageChange} />
          <Checkbox name="256GB" onChange={handleStorageChange} />
          <Checkbox name="512GB" onChange={handleStorageChange} />
        </>
      </StorageOptions>

    </Container>
  );
}

export default SideBar;
