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
  width: 120px;
  height: 48px;
  border-radius: 0.5rem;
  border: none;
  background-color: #f5f5f5;
  font-size: 15px;
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
  height: 52px;
  border: 1px solid ${props => props.theme.mainColor};
  border-radius: 3rem;
  background-color: inherit;
  color: ${props => props.theme.mainColor};
  font-size: 16px;
  box-sizing: border-box;
  font-weight: 600;
`;
export const ColoredBtn = styled.button`
  height: 52px;
  border: 1px solid white;
  border-radius: 3rem;
  background-color: ${props => props.theme.mainColor};
  font-size: 16px;
  color: white;
  box-sizing: border-box;
  font-weight: 600;
`;
export const BlockBtn = styled.button`
  height: 6.4vh;
  border: none;
  border-radius: 3rem;
  background-color: #f5f5f5;
  font-size: 1rem;
  box-sizing: border-box;
`;
