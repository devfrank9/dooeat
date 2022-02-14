// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {UrlInputAdd, UrlInputDel} from '../../styles/InputStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinPro6 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={6} />
      <TextAlign>
        <p>전문가님의</p>
        <p>운영하는 사이트를 입력해주세요.</p>
      </TextAlign>
      <InputAlign>
        <UrlInputAdd placeholder="사이트 링크를 입력해주세요." />
        <UrlInputDel value="https://naver.com" />
      </InputAlign>
      <BtnAlign>
        <ColoredBtn>
          <LinkStyle to="/join-pro/7">다음</LinkStyle>
        </ColoredBtn>
      </BtnAlign>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  margin-top: 25rem;
`;
const InputAlign = styled.div`
  input {
    margin-bottom: 1rem;
  }
`;
const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 108vw;
  margin-top: 3.4167rem;
  margin-bottom: 2.5rem;
  p {
    font-size: 1.8333rem;
    margin: 0;
  }
`;

export default JoinPro6;
