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
  display: block;
  width: 59px;
  height: 48px;
  border-radius: 6px;
  border: none;
  background-color: rgb(245, 245, 245);
  font-size: 15px;
  font-weight: 400;
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
  width: 74px;
`;
export const LongBtn = styled(ShortBtn)`
  width: 101px;
`;
export const LongLine = styled.button`
  display: block;
  width: 59px;
  height: 52px;
  border-radius: 6px;
  border: none;
  background-color: rgb(245, 245, 245);
  font-size: 15px;
  font-weight: 400;
  &:hover {
    background-color: ${props => props.theme.mainColor};
    color: white;
  }
  &:active {
    background-color: ${props => props.theme.mainColor};
    color: white;
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
