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
  background-color: ${props => props.theme.pointColor3};
  color: ${props => props.theme.mainColor};
  font-size: 1.25rem;
`;
export const FileInput = styled.input`
  display: none;
`;
export const FileRectengle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  border: 0.1rem solid ${props => props.theme.btnColor2};
  border-radius: 1rem;
  background: url('/image/IIcon feather-plus-circle.png') no-repeat 50% 50%;
`;
