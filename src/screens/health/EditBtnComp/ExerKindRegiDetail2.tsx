import styled from 'styled-components';
import {Common} from '../../../styles/InputStyled';

const ExerKindRegiDetail2 = () => {
  return (
    <>
      <Common placeholder="Youtube 영상 제목을 입력해주세요." />
      <div style={{height: '10px'}} />
      <Common placeholder="Youtube URL 입력" />
      <Space30 />
      <Subject>세트</Subject>
      <div
        style={{
          position: 'relative',
        }}
      >
        <Label>set</Label>
        <Input2 placeholder="세트 수를 입력해주세요." />
        <div style={{height: '50px'}} />
      </div>
      <ExInputAlign>
        <ExInput>
          <Subject>시간</Subject>
          <input type="text" />
          <label htmlFor="">시간</label>
        </ExInput>
        <ExInput>
          <Subject>.</Subject>
          <input type="text" />
          <label htmlFor="">분</label>
        </ExInput>
      </ExInputAlign>
      <div
        style={{height: '50px', borderBottom: '1px solid rgb(233,233,233'}}
      />
    </>
  );
};

const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;
const Space30 = styled.div`
  height: 30px;
`;
const Input = styled(Common)`
  padding-left: 30px;
  background: url('/image/Icon ionic-ios-close-circle-outline1.png') no-repeat
    95% 50%;
  box-sizing: border-box;
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
    left: 108.5px;
  }
  margin-right: 57px;
`;
const ExInputAlign = styled.div`
  display: flex;
  justify-content: flex-between;
  width: 100%;
`;
export default ExerKindRegiDetail2;
