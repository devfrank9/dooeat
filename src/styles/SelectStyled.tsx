import styled from 'styled-components';

export const SelectTest = () => <Select></Select>;

export const Select = styled.select`
  display: block;
  width: 100vw;
  height: 4rem;
  border: 0.1rem solid ${props => props.theme.mainColor};
  border-radius: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('/image/Icon ionic-ios-arrow-up.png') no-repeat 95% 50%;
  box-sizing: border-box;
  background-color: rgb(255, 249, 249);
  color: ${props => props.theme.mainColor};
  text-align: center;
  font-size: 1.25rem;
  &::-ms-expand {
    display: none;
  }
`;
