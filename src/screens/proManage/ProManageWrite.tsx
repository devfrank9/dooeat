import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import {Common} from '../../styles/InputStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';
import Excer from '../health/EditBtnComp/Excer';

const ProManageWrite = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="수업 기록하기" />
        <div style={{height: '80px'}} />
        <SubjectAlign>
          <Subject>운동 일자</Subject>
          <Subject>회차</Subject>
        </SubjectAlign>
        <InputAlign>
          <Time
            placeholder="시간을 입력해주세요."
            type="date"
            value="2021-12-30"
          />
          <div style={{width: '12px'}} />
          <div style={{position: 'relative', width: '100%'}}>
            <Label>회</Label>
            <Input value="1" />
          </div>
        </InputAlign>
        <div style={{height: '30px'}} />
        <Excer />
      </AlignBase>
    </BaseScreen>
  );
};
const Time = styled.input`
  width: 100%;
  height: 52px;
  border: 0.1rem solid ${props => props.theme.pointColor1};
  font-size: 15px;
  border-radius: 0.5rem;
  display: block;
  box-sizing: border-box;
  background: ${prop => prop.theme.pointColor3};
  text-align: center;
  color: ${prop => prop.theme.mainColor};
  input + span {
    padding-right: 20px;
  }
`;
const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 98px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
`;
const Input = styled(Common)`
  width: 90px;
  text-align: center;
`;
const InputAlign = styled.div`
  display: flex;
  margin-top: 12px;
`;
const SubjectAlign = styled.div`
  display: flex;
  margin-top: 30px;
`;
const Subject = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
`;
export default ProManageWrite;
