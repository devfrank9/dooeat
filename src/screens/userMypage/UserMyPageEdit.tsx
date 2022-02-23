import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import {ColoredBtn} from '../../styles/BtnStyled';
import {Common} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {Select} from '../../styles/SelectStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';

const UserMyPageEdit = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="내 정보 수정" />
        <div style={{height: '110px'}} />
        <SubjectAlign>
          <Subject>이메일</Subject>
          <p>test@naver.com</p>
        </SubjectAlign>
        <PasswordAlign>
          <Subject style={{marginBottom: '8px'}}>비밀번호</Subject>
          <Common placeholder="6자리 이상 입력해주세요." />
          <div style={{height: '20px'}} />
          <Subject style={{marginBottom: '8px'}}>비밀번호 확인</Subject>
          <Common placeholder="다시 한번 입력해주세요." />
        </PasswordAlign>
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>프로필</Subject>
        <PicAlign>
          <input type="file" id="pic" />
          <label htmlFor="pic" />
          <img src="/image/canera.png" alt="" />
        </PicAlign>
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>닉네임</Subject>
        <Common value="홍길동" />
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>나이</Subject>
        <Common value="28" />
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>사는곳</Subject>
        <SelcetAlgin>
          <Select />
          <div style={{width: '9px'}} />
          <Select />
        </SelcetAlgin>
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>현재 체중</Subject>
        <div style={{position: 'relative'}}>
          <Label>kg</Label>
          <Input value="55" />
        </div>
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>키</Subject>
        <div style={{position: 'relative'}}>
          <Label>cm</Label>
          <Input value="168" />
        </div>
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>목표 체중</Subject>
        <div style={{position: 'relative'}}>
          <Label>kg</Label>
          <Input value="48" />
        </div>
        <div style={{height: '40px'}} />
        <ColoredBtn>
          <LinkStyle to="/user/profile">수정 완료</LinkStyle>
        </ColoredBtn>
        <div style={{height: '30px'}} />
      </AlignBase>
    </BaseScreen>
  );
};
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
const SelcetAlgin = styled.div`
  display: flex;
`;
const PicAlign = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: ${props => props.theme.btnColor1};
  img {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 73px;
    bottom: 0;
  }
  input {
    display: none;
  }
  input + label {
    display: inline-block;
    width: 90px;
    height: 900px;
    border-radius: 45px;
    background: url('/image/profileedit.png') no-repeat 50% 50%;
  }
`;
const PasswordAlign = styled.div``;
const SubjectAlign = styled.div`
  p {
    font-size: 14px;
    font-family: ${prop => prop.theme.roboto};
    color: ${prop => prop.theme.fontColor2};
    margin-top: 8px;
  }
  margin-bottom: 20px;
`;
const Subject = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export default UserMyPageEdit;
