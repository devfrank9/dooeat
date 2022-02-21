import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import {LongBtn, MiddleBtn} from '../../styles/BtnStyled';
import {FileInput, FileRectengle} from '../../styles/FileInputStyled';
import {Common} from '../../styles/InputStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';

const HealthEdit = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="운동 기록" />
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
        <Subject>운동 종류</Subject>
        <BtnAlign>
          <LongBtn>헬스</LongBtn>
          <LongBtn>홈트</LongBtn>
          <LongBtn>기타</LongBtn>
        </BtnAlign>
        <div style={{height: '30px'}} />
        <Subject>운동 부위</Subject>
        <BtnAlign>
          <MiddleBtn>가슴</MiddleBtn>
          <MiddleBtn>어깨</MiddleBtn>
          <MiddleBtn>팔</MiddleBtn>
          <MiddleBtn>등</MiddleBtn>
          <MiddleBtn>하체</MiddleBtn>
          <MiddleBtn>전신</MiddleBtn>
          <MiddleBtn>유산소</MiddleBtn>
          <MiddleBtn>스트레칭</MiddleBtn>
        </BtnAlign>
        <div style={{height: '30px'}} />
      </div>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  button {
    margin-bottom: 8px;
  }
`;
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

export default HealthEdit;
