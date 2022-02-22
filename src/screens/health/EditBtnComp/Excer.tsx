import styled from 'styled-components';
import {
  HealthSubject,
  HealthIndex,
  ColoredBtn,
} from '../../../styles/BtnStyled';
import {Common} from '../../../styles/InputStyled';

const Excer = () => {
  return (
    <>
      <Subject>운동 종류</Subject>
      <BtnAlign>
        <HealthSubject>헬스</HealthSubject>
        <HealthSubject>홈트</HealthSubject>
        <HealthSubject>기타</HealthSubject>
      </BtnAlign>
      <div style={{height: '30px'}} />
      <Subject>운동 부위</Subject>
      <BtnAlign>
        <HealthIndex>가슴</HealthIndex>
        <HealthIndex>어깨</HealthIndex>
        <HealthIndex>팔</HealthIndex>
        <HealthIndex>등</HealthIndex>
        <HealthIndex>하체</HealthIndex>
        <HealthIndex>전신</HealthIndex>
        <HealthIndex>유산소</HealthIndex>
        <HealthIndex>스트레칭</HealthIndex>
      </BtnAlign>
      <div style={{height: '30px'}} />
      <Subject>하체 운동</Subject>
      <ExcerAlign>
        <ExcerKindBtn>운동 종류 등록</ExcerKindBtn>
        <ExcerKindBtn>이전 기록 불러오기</ExcerKindBtn>
      </ExcerAlign>
      <Subject>하체 운동</Subject>
      <ExcerAlign>
        <ExcerKindBtn>운동 종류 등록</ExcerKindBtn>
        <ExcerKindBtn>이전 기록 불러오기</ExcerKindBtn>
      </ExcerAlign>
      <Input value="런지" />
      <div style={{height: '30px'}} />
      <div
        style={{display: 'flex', justifyContent: 'flex-between', width: '100%'}}
      >
        <ExInput>
          <Subject>무게</Subject>
          <input type="text" />
          <label htmlFor="">kg</label>
        </ExInput>
        <ExInput>
          <Subject>갯수</Subject>
          <input type="text" />
          <label htmlFor="">회</label>
        </ExInput>
      </div>
      <div style={{height: '30px'}} />
      <Subject>세트</Subject>
      <div
        style={{
          position: 'relative',
          borderBottom: '1px solid rgb(233,233,233',
        }}
      >
        <Label>set</Label>
        <Input2 />
        <div style={{height: '50px'}} />
      </div>
      <div>
        <CheckInput>
          <input type="checkbox" id="check3" />
          <label htmlFor="check3" />
          <p>운동 기록을 내 전문가와 공유</p>
        </CheckInput>
      </div>
      <ColoredBtn style={{width: '100%'}}>기록하기</ColoredBtn>
    </>
  );
};
const CheckInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-child {
    margin-top: 50px;
  }
  &:last-child {
    margin-bottom: 29px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
  input {
    display: none;
  }
  input + label {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 1px solid rgb(223, 223, 223);
    position: relative;
    margin-right: 16px;
  }
  input:checked + label::after {
    content: '✔';
    font-size: 15px;
    width: 24px;
    height: 24px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
  }
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
const Input2 = styled(Common)`
  padding-left: 30px;
`;
const ExInput = styled.div`
  position: relative;
  input {
    border: 1px solid rgb(223, 223, 223);
    width: 100px;
    height: 52px;
    text-align: center;
    font-size: 16px;
  }
  label {
    position: absolute;
    color: ${prop => prop.theme.mainColor};
    bottom: 5px;
    right: -24px;
  }
  margin-right: 50px;
`;
const Input = styled(Common)`
  padding-left: 30px;
  background: url('/image/Icon ionic-ios-close-circle-outline1.png') no-repeat
    95% 50%;
  box-sizing: border-box;
`;
const ExcerAlign = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const ExcerKindBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${prop => prop.theme.pointColor3};
  min-width: 156px;
  width: 48.902%;
  min-height: 48px;
  font-size: 15px;
  color: ${prop => prop.theme.mainColor};
  border-radius: 8px;
  border: 0.1px solid ${prop => prop.theme.pointColor1};
  font-weight: 500;
`;
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

export default Excer;
