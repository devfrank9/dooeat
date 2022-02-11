import styled from 'styled-components';

export const SelectTest = () => <Select></Select>;

export const Select = styled.select`
  display: block;
  min-width: 3.6875rem;
  min-height: 3rem;
  border: 0.1rem solid ${props => props.theme.mainColor};
  border-radius: 0.5rem;
  background-color: rgb(252, 216, 224);
  color: rgb(239, 144, 167);
`;
