//packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Agreement from '../../components/Agreement';
// Styles
import {CheckNone} from '../../styles/InputStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinUser1 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={1} />
        <TextAlign>
          <p>회원님의</p>
          <p>아이디 정보를 입력해주세요.</p>
        </TextAlign>
        <InputAlign>
          <CheckNone placeholder="이메일을 입력해주세요" />
          <CheckNone placeholder="비밀번호를 입력해주세요." />
          <CheckNone placeholder="비밀번호를 다시 한번 입력해주세요." />
        </InputAlign>
        <div style={{flex: 2}} />
        <Agreement />
        <BtnAlign />
        <ColoredBtn>
          <LinkStyle to="/join-user/2">다음</LinkStyle>
        </ColoredBtn>
        <div style={{flex: 0.37}} />
      </AlignBase>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  margin-bottom: 40px;
`;
const InputAlign = styled.div`
  margin-top: 49px;
  input:first-child {
    margin-bottom: 12px;
  }
  input:last-child {
    margin-top: 12px;
  }
`;
export const TextAlign = styled.div`
  font-size: 22px;
  margin: 0 10px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 41px;
`;

export default JoinUser1;
