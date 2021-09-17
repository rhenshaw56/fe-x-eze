import React from 'react';
import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import Input from './Input';

const Container = styled.div``;

const StyledInput = styled(Input)`
  height: 40px;
  width: 70%;
`;

const InputWrapper = styled.div`
  padding: 10px;
`;


const PriceRange = () => {
  return (
    <Container>
        <Slider
        />
        <InputWrapper>
          <StyledInput name="min" type="number"/>
        </InputWrapper>
        <InputWrapper>
          <StyledInput name="max" type="number"/>
        </InputWrapper>
    </Container>
  );
}

export default PriceRange;
