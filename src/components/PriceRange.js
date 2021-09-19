import React, { useContext } from 'react';
import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import { stringify } from 'query-string';
import { debounce } from 'debounce';


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
  const { dispatch, searchState, query, setQuery } = useContext(SearchContext);
  const { minPrice, maxPrice, search } = searchState;

  const updateQuery = (Query) => {
    const query = stringify({
      ...(search && { search }),
      minPrice,
      maxPrice
    });
    debounce(setQuery(query), 5000);
  }

  const handleInputChange = (e) => {
    const target = `${e.target.name.toLowerCase()}Price`;
    dispatch({
      type: `UPDATE_${e.target.name}_PRICE`,
      data: {
        [target]: e.target.value,
      },
    });
    updateQuery();
  };

  const handleSliderChange = (e, [minVal, maxVal]) => {
    dispatch({
      type: `UPDATE_MIN_PRICE`,
      data: {
        minPrice: minVal,
      },
    });
    dispatch({
      type: `UPDATE_MAX_PRICE`,
      data: {
        maxPrice: maxVal,
      },
    });

    updateQuery();

  }

  const marks = [
    {
      value: 0,
      label: '$0',
    },
    {
      value: minPrice,
      label: `$${minPrice}`,
    },
    {
      value: maxPrice,
      label: `$${maxPrice}`,
    },
    {
      value:3000,
      label: '$3000',
    },
  ];
  return (
    <Container>
        <Slider
          track="inverted"
          marks={marks}
          value={[minPrice, maxPrice]}
          onChange={handleSliderChange}
          min={0}
          max={3000}
        />
        <InputWrapper>
          <StyledInput onChange={handleInputChange} name="MIN" type="number" value={minPrice} />
        </InputWrapper>
        <InputWrapper>
          <StyledInput onChange={handleInputChange} name="MAX" type="number" value={maxPrice}/>
        </InputWrapper>
    </Container>
  );
}

export default PriceRange;
