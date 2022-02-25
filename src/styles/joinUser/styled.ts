import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
export const AgreementAlign = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 123px;
  width: 85%;
  max-width: 480px;
`;
export const AbsoluteColBtn = styled(ColoredBtn)`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  width: 85%;
  max-width: 480px;
`;
export const BtnAlign = styled.div`
  margin-bottom: 40px;
`;
export const TextAlign = styled.div`
  font-size: 22px;
  margin: 0 10px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 41px;
`;
export const PicAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: ${props => props.theme.btnColor1};
  input {
    display: none;
  }
  input + label {
    display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background: url('/image/Icon feather-plus.png') no-repeat 50% 50%;
  }
`;
export const Common = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 20px;
  padding-right: 50px;
  border: 0.1rem solid ${props => props.theme.btnColor2};
  font-size: 15px;
  border-radius: 0.5rem;
  display: block;
  box-sizing: border-box;
  &::-webkit-input-placeholder {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
export const CheckNone = styled(Common)`
  background: url('/image/Icon feather-check.png') no-repeat 95% 50%;
  box-sizing: border-box;
`;
export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.fontColor3};
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
`;
export const LinkStyle2 = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mainColor};
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
`;
export const AbsoluteUnColBtn = styled(UnColoredBtn)`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 177px;
  width: 85%;
  max-width: 480px;
`;
export const AbsoluteColBtn2 = styled(AbsoluteColBtn)`
  bottom: 113px;
`;
export const FooterAlign = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 82px;
  width: 85%;
  max-width: 480px;
`;
export const Age = styled.label`
  position: absolute;
  top: 15px;
  right: 31px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
`;
export const AgeInput = styled(Common)`
  padding-left: 30px;
`;
export const Subject = styled.p`
  margin: 0 1px;
  font-size: 18px;
`;
export const SelectAlign = styled.div`
  margin-top: 70px;
`;
export const Label = styled.label`
  position: absolute;
  top: 15px;
  right: 31px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
`;
export const Input = styled(Common)`
  padding-left: 30px;
`;
export const BmiSubject = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 79px;
  margin-top: 52px;
`;
export const Scale = styled.div`
  background-color: ${props => props.theme.pointColor2};
  background-image: url('/image/group 3.png');
  background-repeat: no-repeat;
  background-position: center;
  width: 208px;
  height: 208px;
  border-radius: 104px;
  margin: 0 auto;
`;
export const LastText = styled.div`
  text-align: center;
  p {
  }
`;
export const KgInput = styled.input`
  width: 153.6px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid rgb(239, 239, 239);
  padding-bottom: 5px;
  &::-webkit-input-placeholder {
    font-size: 16px;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
export const KgLabel = styled.label`
  position: absolute;
  right: 11.4px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
`;
export const KgSubject = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  justify-content: center;
  p:first-child {
    margin-right: 6px;
  }
  p:last-child {
    font-weight: 500;
  }
`;
export const ScaleAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
    font-weight: 300;
  }
`;
export const GoalFirstSubject = styled.div`
  position: relative;
  width: 100%;
  p {
    font-size: 24px;
    text-align: center;
    font-weight: 400;
  }
`;
export const Arrow = styled.div`
  margin: 44px;
  text-align: center;
  img {
    width: 30.7px;
    height: 31.5px;
  }
`;
export const DietGoalInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GoalTextAlign = styled.div`
  display: flex;
  color: ${prop => prop.theme.mainColor};
  font-size: 20px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
  margin-bottom: 50px;
  p:nth-child(2) {
    font-size: 30px;
    color: ${props => props.theme.fontColor1};
    margin: 0 18px;
  }
  p:nth-child(3) {
    font-size: 16px;
  }
`;
export const Inline = styled.div`
  display: flex;
  justify-content: center;
`;
export const DietGoalLabel = styled.label`
  position: absolute;
  right: 11.4px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
`;
export const DietGoalKgInput = styled.input`
  width: 91.5px;
  font-size: 30px;
  border: none;
  border-bottom: 1px solid rgb(239, 239, 239);
  padding-right: 20px;
  text-align: center;
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
export const UnderLine = styled.p`
  text-align: center;
  font-size: 24px;
  position: relative;
  font-weight: 500;
  &::after {
    border-radius: 12px;
    content: '';
    width: 100%;
    height: 12px;
    background: ${props => props.theme.pointColor2};
    position: absolute;
    bottom: 0.1rem;
    left: 0;
    z-index: -1;
  }
  margin-bottom: 30px;
`;
export const FooterAlign2 = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 82px;
  width: 85%;
  max-width: 480px;
`;
export const InputAlign = styled.div`
  margin-top: 49px;
  input:first-child {
    margin-bottom: 12px;
  }
  input:last-child {
    margin-top: 12px;
  }
`;
