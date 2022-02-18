import styled from 'styled-components';
import {CheckNone} from '../styles/InputStyled';
import BaseScreen, {AlignBase} from './BaseScreen';
import {ColoredBtn} from '../styles/BtnStyled';
import {LinkStyle} from '../styles/LinkStyled';

const SearchId = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <Banner>
          <p>아이디/비밀번호 찾기</p>
          <p>회원가입 시 등록한 아이디(이메일)를</p>
          <p>입력하면 메일로 임시 비밀번호가 발급 됩니다.</p>
        </Banner>
        <LabelAlign>
          <Label>이메일 주소</Label>
        </LabelAlign>
        <CheckNone placeholder="이메일을 입력해주세요" />
        <div style={{flex: 1}} />
        <AbsoluteColBtn>
          <LinkStyle to={'/'}>전송</LinkStyle>
        </AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};
const AbsoluteColBtn = styled(ColoredBtn)`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 113px;
  width: 85%;
  max-width: 480px;
`;
const LabelAlign = styled.div`
  margin-top: 56px;
  margin-bottom: 12px;
`;
const Label = styled.div`
  display: flex;
  width: 100%;
  margin: 0 -1px;
  font-size: 18px;
  font-weight: 400;
`;
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 -28px;
  background-color: ${prop => prop.theme.mainColor};
  color: ${props => props.theme.fontColor3};
  font-size: 15px;
  font-weight: 300;
  p:nth-child(1) {
    font-size: 20px;
    margin-top: 221px;
    margin-bottom: 16px;
    font-weight: 500;
  }
  p:nth-child(3) {
    margin-bottom: 70px;
  }
`;

export default SearchId;
