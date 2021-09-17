import React, { useContext } from 'react';
import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import Input from './Input';

import { SearchContext } from '../contexts/SearchContext';



const Container = styled.div``;

const StyledInput = styled(Input)`
  height: 40px;
  width: 70%;
`;

const InputWrapper = styled.div`
  padding: 10px;
`;


const PriceRange = () => {
  const { dispatch } = useContext(SearchContext);
  const handleInputChange = (e) => {
    const target = `${e.target.name.toLowerCase()}Price`;
    dispatch({
      type: `UPDATE_${e.target.name}_PRICE`,
      data: {
        [target]: e.target.value,
      },
    });
  };
  return (
    <Container>
        <Slider
        />
        <InputWrapper>
          <StyledInput onChange={handleInputChange} name="MIN" type="number"/>
        </InputWrapper>
        <InputWrapper>
          <StyledInput onChange={handleInputChange} name="MAX" type="number"/>
        </InputWrapper>
    </Container>
  );
}

export default PriceRange;
