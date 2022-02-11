import styled from 'styled-components';

interface Prop {
  children?: any;
}

export const BtnShort = ({children}: Prop) => <Short>{children}</Short>;
export const BtnMiddle = ({children}: Prop) => <Middle />;
export const BtnLong = ({children}: Prop) => <Long />;
export const BtnLongLine = ({children}: Prop) => <LongLine />;
export const BtnMain = ({children}: Prop) => <Btn>{children}</Btn>;
export const BtnMain2 = ({children}: Prop) => <Btn2>{children}</Btn2>;
export const BtnMain3 = ({children}: Prop) => <Btn3>{children}</Btn3>;

export const Short = styled.button`
  display: block;
  width: 3.6875rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #f5f5f5;
  &:hover {
    background-color: ${props => props.theme.mainColor};
  }
  &:active {
    background-color: ${props => props.theme.mainColor};
  }
`;
export const Middle = styled(Short)`
  display: block;
  width: 4.625rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #f5f5f5;
  &:hover {
    background-color: ${props => props.theme.mainColor};
  }
  &:active {
    background-color: ${props => props.theme.mainColor};
  }
`;
export const Long = styled(Short)`
  display: block;
  width: 6.31255rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #f5f5f5;
  &:hover {
    background-color: ${props => props.theme.mainColor};
  }
  &:active {
    background-color: ${props => props.theme.mainColor};
  }
`;
export const LongLine = styled(Short)`
  display: block;
  width: 19.9375rem;
  height: 3.25rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #f5f5f5;
  &:hover {
    background-color: ${props => props.theme.mainColor};
  }
  &:active {
    background-color: ${props => props.theme.mainColor};
  }
`;
export const Btn = styled.button`
  display: block;
  width: 19.9375rem;
  height: 3.25rem;
  border: 0.1rem solid ${props => props.theme.mainColor};
  border-radius: 3rem;
  background-color: inherit;
  font-size: 1.1667rem;
  color: ${props => props.theme.mainColor};
`;
export const Btn2 = styled.button`
  display: block;
  width: 19.9375rem;
  height: 3.25rem;
  border: 0.1rem solid white;
  border-radius: 3rem;
  background-color: ${props => props.theme.mainColor};
  font-size: 1.1667rem;
  color: white;
`;
export const Btn3 = styled.button`
  display: block;
  width: 19.9375rem;
  height: 3.25rem;
  border: none;
  border-radius: 3rem;
  background-color: #f5f5f5;
  font-size: 1.1667rem;
`;
