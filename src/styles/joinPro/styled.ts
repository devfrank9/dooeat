import styled from 'styled-components';
import {ColoredBtn, LongBtn} from '../BtnStyled';

export const TextAlign = styled.div`
  font-size: 22px;
  margin: 0 10px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 40px;
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
export const AgreementAlign = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 123px;
  width: 85%;
  max-width: 480px;
`;
export const InputAlign = styled.div`
  input:first-child {
    margin-bottom: 12px;
  }
  input:nth-child(2) {
    margin-bottom: 12px;
  }
  margin-bottom: 200px;
`;
export const TextAlign2 = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const JobAlign = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 10px;
  }
`;
export const LabelAlign = styled.div`
  Label {
    margin-bottom: 16px;
  }
`;
export const DropDownAlign = styled.div`
  div:first-child {
    margin-bottom: 12px;
  }
`;
export const InputAlign2 = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 12px;
  }
`;
export const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  button {
    margin-bottom: 8px;
  }
`;
export const TextAlign3 = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 40px;
`;
export const DisplayNone = styled(LongBtn)`
  background-color: inherit;
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
  img {
    display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 60px;
  }
`;
