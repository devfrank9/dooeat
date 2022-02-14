import styled from 'styled-components';
/* 
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
 */
export const ShortBtn = styled.button`
  width: 100vw;
  height: 4rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #f5f5f5;
  font-size: 1.25rem;
  &:hover {
    background-color: ${props => props.theme.mainColor};
    color: white;
  }
  &:active {
    background-color: ${props => props.theme.mainColor};
    color: white;
  }
`;
export const MiddleBtn = styled(ShortBtn)`
  display: block;
  width: 6.1667rem;
  height: 4rem;
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
export const LongBtn = styled(ShortBtn)`
  display: block;
  width: 8.4167rem;
  height: 4rem;
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
export const LongLine = styled(ShortBtn)`
  display: block;
  font-size: 1.25rem;
  height: 4rem;
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
export const UnColoredBtn = styled.button`
  display: block;
  width: 26.5833rem;
  height: 4.3333rem;
  border: 0.1rem solid ${props => props.theme.mainColor};
  border-radius: 3rem;
  background-color: inherit;
  font-size: 1.3333rem;
  color: ${props => props.theme.mainColor};
  box-sizing: border-box;
`;
export const ColoredBtn = styled.button`
  display: block;
  width: 26.5833rem;
  height: 4.3333rem;
  border: 0.1rem solid white;
  border-radius: 3rem;
  background-color: ${props => props.theme.mainColor};
  font-size: 1.3333rem;
  color: white;
  box-sizing: border-box;
`;
export const BlockBtn = styled.button`
  display: block;
  width: 26.5833rem;
  height: 4.3333rem;
  border: none;
  border-radius: 3rem;
  background-color: #f5f5f5;
  font-size: 1.3333rem;
  box-sizing: border-box;
`;
