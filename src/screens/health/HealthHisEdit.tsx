import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import {FileInput, FileRectengle} from '../../styles/FileInputStyled';
import {Common} from '../../styles/InputStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';
import Excer from './EditBtnComp/Excer';

const HealthHisEdit = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="운동 기록 수정" />
        <div style={{height: '110px'}} />
        <Subject>오늘의 체중</Subject>
        <div style={{position: 'relative'}}>
          <Label>kg</Label>
          <Input placeholder="kg단위로 입력해주세요." />
        </div>
        <div style={{height: '30px'}} />
        <Subject>눈바디 사진 업로드</Subject>
      </AlignBase>
      <div style={{margin: '0 28px'}}>
        <FileRectengle>
          <FileInput />
        </FileRectengle>
        <div style={{height: '30px'}} />
        <Excer />
        <div style={{height: '30px'}} />
      </div>
    </BaseScreen>
  );
};

const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;
const Label = styled.label`
  position: absolute;
  top: 15px;
  right: 31px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
`;
const Input = styled(Common)`
  padding-left: 30px;
`;

export default HealthHisEdit;
