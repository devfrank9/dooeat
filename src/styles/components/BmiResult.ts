import styled from 'styled-components';

interface Prop {
  HeaderColor?: string;
}

export const ContentBox2 = styled.div`
  height: 467px;
  box-shadow: 0px 3px 10px 0px rgb(0, 0, 0, 0.1);
  border-radius: 12px;
`;
export const BmiCalc2 = styled.div<Prop>`
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
  color: ${prop => prop.HeaderColor};
  p:last-child {
    text-align: center;
    font-size: 32px;
    color: rgb(51, 51, 51);
    font-family: ${prop => prop.theme.roboto};
    margin-top: 14px;
  }
`;
export const KgInput = styled.input`
  width: 91.5px;
  font-size: 30px;
  border: none;
  border-bottom: 1px solid rgb(239, 239, 239);
  padding-left: 25px;
  margin-top: 8.1px;
  font-weight: 300;
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
  font-family: 'Roboto';
`;
export const Label = styled.label`
  position: absolute;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  left: 60%;
  bottom: 5px;
  font-family: ${prop => prop.theme.roboto};
`;
export const Header2 = styled.div<Prop>`
  margin-top: 40px;
  p {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: ${prop => prop.HeaderColor};
  }
`;
export const Header = styled.div`
  position: relative;
  top: 12.22%;
  p {
    font-family: ${prop => prop.theme.roboto};
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    color: rgb(148, 148, 148);
  }
`;
export const BmiCalc = styled.div`
  position: relative;
  top: 14%;
  p {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: rgb(51, 51, 51);
    font-family: ${prop => prop.theme.roboto};
  }
`;
export const HealthResult2 = styled.div`
  margin-top: 4px;
  p {
    text-align: center;
    font-size: 16px;
    color: ${prop => prop.theme.mainColor};
    font-weight: 700;
  }
`;
export const HealthResult = styled.div`
  position: relative;
  top: 16.11%;
  p {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: ${prop => prop.theme.mainColor};
  }
`;
export const BmiIndicator2 = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  font-family: ${prop => prop.theme.roboto};
  div {
    flex: 1;
    min-width: 60px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 300;
  }
`;
export const BmiGraph2 = styled.div`
  display: flex;
  height: 40px;
  padding: 0 10px;
  margin-top: 101px;
  align-items: center;
  justify-content: center;
  div {
    flex: 1;
    min-width: 60px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    font-weight: 300;
  }
  div:nth-child(1) {
    background-color: rgb(236, 236, 236);
    color: black;
    border-radius: 6px 0px 0px 6px;
  }
  div:nth-child(2) {
    background-color: ${prop => prop.theme.mainColor};
  }
  div:nth-child(3) {
    background-color: rgb(180, 180, 180);
  }
  div:nth-child(4) {
    background-color: rgb(148, 148, 148);
  }
  div:nth-child(5) {
    background-color: rgb(51, 51, 51);
    border-radius: 0px 6px 6px 0px;
  }
`;
export const BmiGraph = styled.div`
  position: relative;
  top: 50%;
  display: flex;
  height: 40px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  div {
    flex: 1;
    min-width: 60px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
  }
  div:nth-child(1) {
    background-color: rgb(236, 236, 236);
    color: black;
    border-radius: 6px 0px 0px 6px;
  }
  div:nth-child(2) {
    background-color: ${prop => prop.theme.mainColor};
  }
  div:nth-child(3) {
    background-color: rgb(180, 180, 180);
  }
  div:nth-child(4) {
    background-color: rgb(148, 148, 148);
  }
  div:nth-child(5) {
    background-color: rgb(51, 51, 51);
    border-radius: 0px 6px 6px 0px;
  }
`;
export const BmiIndicator = styled.div`
  position: relative;
  top: 50%;
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  font-family: ${prop => prop.theme.roboto};
  div {
    flex: 1;
    min-width: 60px;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 300;
  }
`;
export const ContentBox = styled.div`
  position: relative;
  padding: 0 auto;
  margin: 0;
  width: 100%;
  flex: 1;
  box-shadow: 0px 3px 10px 0px rgb(0, 0, 0, 0.1);
  border-radius: 12px;
`;
