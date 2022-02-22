import styled from 'styled-components';

interface Prop {
  children?: any;
}
/* 
export const BtnShort = ({children}: Prop) => <Short>{children}</Short>;
export const BtnMiddle = ({children}: Prop) => <Middle />;
export const BtnLong = ({children}: Prop) => <Long />;
export const BtnLongLine = ({children}: Prop) => <LongLine />;
export const BtnMain = ({children}: Prop) => <Btn>{children}</Btn>;
export const BtnMain2 = ({children}: Prop) => <Btn2>{children}</Btn2>;
export const BtnMain3 = ({children}: Prop) => <Btn3>{children}</Btn3>;
 */
export const HealthSubject = ({children}: Prop) => (
  <LongBtn>{children}</LongBtn>
);
export const HealthIndex = ({children}: Prop) => (
  <MiddleBtn>{children}</MiddleBtn>
);

export const ShortBtn = styled.button`
  display: block;
  min-width: 59px;
  width: 18.495%;
  min-height: 48px;
  height: 15.05%;
  border-radius: 6px;
  border: none;
  background-color: ${prop => prop.theme.btnColor1};
  font-size: 15px;
  font-weight: 400;
  &:hover {
    background-color: ${prop => prop.theme.mainColor};
    color: ${prop => prop.theme.fontColor3};
  }
  &:active {
    background-color: ${props => props.theme.mainColor};
    color: ${prop => prop.theme.fontColor3};
  }
`;
export const MiddleBtn = styled(ShortBtn)`
  min-width: 74px;
  width: 23.2%;
  min-height: 48px;
  height: 15.05%;
`;
export const LongBtn = styled(ShortBtn)`
  min-width: 101px;
  width: 31.66%;
  min-height: 48px;
  height: 15.05%;
`;
export const LongLine = styled.button`
  display: block;
  height: 48px;
  border-radius: 6px;
  border: none;
  background-color: ${prop => prop.theme.btnColor1};
  font-size: 15px;
  font-weight: 400;
  &:hover {
    background-color: ${props => props.theme.mainColor};
    color: ${prop => prop.theme.fontColor3};
  }
  &:active {
    background-color: ${props => props.theme.mainColor};
    color: ${prop => prop.theme.fontColor3};
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
  font-weight: 500;
  font-size: 16px;
`;
export const ColoredBtn = styled.button`
  height: 52px;
  border: 1px solid ${prop => prop.theme.fontColor3};
  border-radius: 3rem;
  background-color: ${props => props.theme.mainColor};
  font-size: 16px;
  color: ${prop => prop.theme.fontColor3};
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
`;
export const BlockBtn = styled.button`
  height: 6.4vh;
  border: none;
  border-radius: 3rem;
  background-color: ${prop => prop.theme.btnColor1};
  font-size: 1rem;
  box-sizing: border-box;
`;
