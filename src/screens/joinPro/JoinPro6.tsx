// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {UrlInputAdd, UrlInputDel} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {AbsoluteColBtn} from './JoinPro1';

const JoinPro6 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={6} />
        <TextAlign>
          <p>전문가님의</p>
          <p>운영하는 사이트를 입력해주세요.</p>
        </TextAlign>
        <InputAlign>
          <UrlInputAdd placeholder="사이트 링크를 입력해주세요." />
          <UrlInputDel value="https://naver.com" />
        </InputAlign>
        <AbsoluteColBtn>
          <LinkStyle to="/join-pro/7">다음</LinkStyle>
        </AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};
const InputAlign = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 12px;
  }
`;
const TextAlign = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default JoinPro6;
