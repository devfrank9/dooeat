import styled from 'styled-components';

export const FileLabel = styled.label`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  width: 100vw;
  height: 4rem;
  border: 0.1rem solid ${props => props.theme.mainColor};
  border-radius: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('/image/Icon feather-plus-circle.png') no-repeat 95% 50%;
  box-sizing: border-box;
  background-color: rgb(255, 249, 249);
  color: ${props => props.theme.mainColor};
  font-size: 1.25rem;
`;
export const FileInput = styled.input`
  display: none;
`;
