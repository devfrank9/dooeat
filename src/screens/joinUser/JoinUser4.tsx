// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {CheckNone} from '../../styles/InputStyled';
import {UnColoredBtn, ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle, LinkStyle2} from '../../styles/LinkStyled';

const JoinUser4 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={4} />
      <TextAlign>
        <p>회원님의</p>
        <p>사는 곳은 어디인가요?</p>
      </TextAlign>
      <InputAlign>
        <CheckNone placeholder="(임시)광역시도" />
        <CheckNone placeholder="(임시)시군구" />
      </InputAlign>
      <BtnAlign>
        <UnColoredBtn>
          <LinkStyle2 to="/join-user5">건너뛰기</LinkStyle2>
        </UnColoredBtn>
        <ColoredBtn>
          <LinkStyle to="/join-user5">다음</LinkStyle>
        </ColoredBtn>
      </BtnAlign>
      <Footer>
        <p>* 전문가 매칭 시 필요한 데이터 입니다.(선택입력)</p>
      </Footer>
    </BaseScreen>
  );
};

const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  margin-top: 3.4167rem;
  p {
    font-size: 1.8333rem;
    margin: 0;
  }
`;
const BtnAlign = styled.div`
  margin-top: 12rem;
  button {
    margin-bottom: 1rem;
  }
`;
const InputAlign = styled.div`
  margin-top: 5.8333rem;
  input {
    margin-bottom: 1rem;
  }
`;
const Footer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: flex-start;
  p {
    margin: 0;
    color: blue;
    font-size: 1.0833rem;
  }
`;

export default JoinUser4;
