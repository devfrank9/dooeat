import styled from 'styled-components';
import {Common} from '../../../styles/InputStyled';

const ExerKindRegiDetail = () => {
  return (
    <>
      <Input placeholder="운동 이름을 작성해주세요." />
      <Space30 />
      <ExInputAlign>
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
      </ExInputAlign>
      <Space30 />
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
    right: -24px;
  }
  margin-right: 50px;
`;
const ExInputAlign = styled.div`
  display: flex;
  justify-content: flex-between;
  width: 100%;
`;

export default ExerKindRegiDetail;
