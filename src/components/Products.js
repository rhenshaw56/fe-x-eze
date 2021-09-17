import React from 'react';
import styled from 'styled-components';
import images from './phones.json';

const ImgWrapper = styled.div`
  background: #1e242f;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-gap: 20px;
  grid-auto-rows: 400px;
  width: inherit;
  position: relative;
  margin: 0 50px;
  @media only screen and (min-width: 500px) {
    grid-template-columns: repeat(2, auto);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, auto);
  }

  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(4, auto);
  }

  @media only screen and (min-width: 1600px) {
    grid-template-columns: repeat(5, auto);
  }

`;

const Image = styled.img`
  border-radius: 4px;
  display: block;
  margin: 0 auto;
  height: 120px;
`;

const Grade = styled.span`
  color: #FFF;
  position: relative;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 12px;
  padding: 3px;
  top: 10px;
  left: 90px;
`;

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  color: #FFF;
  text-align: left;
  padding: 20px;
`;

const BuyButton = styled.button`
  width: 150px;
  height: 50px;
  background: #0971f1;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 4px;
`;

const ProductName = styled.span`
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 2px;
`;

const ProductStatus = styled.span`
  font-size: 18px;
  font-weight: 300;
`;

const Desc = styled.span`
  font-size: 16px;
  font-weight: 300;
  line-height:30px;
`;

const Price = styled.span`
  font-size: 24px;
  font-weight: 900;
  line-height: 50px;
`;

const Products = () => {
  const items = Array(20).fill(1).map((_i, i) => i);
  return (
    <Container>
      {
        items.map((item) => (
          <ImgWrapper key={item}>
            <Grade>A1</Grade>
            <Image alt="" height={120} width={80} src={images['iPhone X']} />
            <DescriptionContainer>
              <ProductName>iPhone 7</ProductName>
              <ProductStatus>Unlocked | 256GB</ProductStatus>
              <Desc>Unit price</Desc>
              <Price>$450</Price>
              <Desc>1500 Available</Desc>
            </DescriptionContainer>
            <BuyButton>BUY</BuyButton>
          </ImgWrapper>
        ))
      }
    </Container>
  )
}

export default Products;
