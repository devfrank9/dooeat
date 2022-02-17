// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {CheckNone} from '../../styles/InputStyled';
import Agreement from '../../components/Agreement';
import {LinkStyle} from '../../styles/LinkStyled';
import {AbsoluteColBtn} from './JoinPro1';

const JoinPro2 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={2} />
        <TextAlign>
          <p>전문가님의</p>
          <p>아이디 정보를 입력해주세요.</p>
        </TextAlign>
        <InputAlign>
          <CheckNone placeholder="이메일을 입력해주세요" />
          <CheckNone placeholder="비밀번호를 입력해주세요." />
          <CheckNone placeholder="비밀번호를 다시 한번 입력해주세요." />
        </InputAlign>
        <Agreement />
        <AbsoluteColBtn>
          <LinkStyle to="/join-pro/3">다음</LinkStyle>
        </AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};
const InputAlign = styled.div`
  input:first-child {
    margin-bottom: 12px;
  }
  input:nth-child(2) {
    margin-bottom: 12px;
  }
  margin-bottom: 200px;
`;
const TextAlign = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default JoinPro2;
