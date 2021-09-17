import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  height: 30px;
  width: 50px;
`;

const Label = styled.label`
  line-height: 32px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  display: block;
  margin: 0 auto;
  @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px) {
      margin: 0;
    }
  @media screen
    and (min-device-width: 1200px)
    and (max-device-width: 1600px) {
      margin: 0;
    }
`;

const Checkbox = props => {
  const {name, onChange} = props;

  return (
    <Wrapper>
      <Input type="checkbox" name={name} value={name} onChange={onChange} />
      <Label htmlFor={name}>{name}</Label>
    </Wrapper>
  );
};

export default Checkbox;
