import React from 'react';
import styled from '@emotion/styled'

const Input = styled.input`
  height: 30px;
  width: 50px;
`;

const Label = styled.label`
  line-height: 32px;
  position: relative;
  bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  display: block;
  margin: 0 auto;
  font-size: 0.8rem;
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

const Checkbox = props => {
  const {name, onChange,checked} = props;

  return (
    <Wrapper>
      <Input type="checkbox" name={name} value={name} onChange={onChange} checked={checked} />
      <Label htmlFor={name}>{name}</Label>
    </Wrapper>
  );
};

export default Checkbox;
