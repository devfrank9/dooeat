// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {UnColoredBtn, LongBtn, ColoredBtn} from '../../styles/BtnStyled';
import {CheckNone} from '../../styles/InputStyled';
import {LinkStyle, LinkStyle2} from '../../styles/LinkStyled';

const JoinUser3 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={3} />
      <TextAlign>
        <p>회원님의</p>
        <p>성별과 나이를 입력해주세요.</p>
      </TextAlign>
      <Subject>
        <p>성별</p>
      </Subject>
      <BtnAlign>
        <LongBtn>여자</LongBtn>
        <LongBtn>남자</LongBtn>
      </BtnAlign>
      <Subject2>
        <p>나이</p>
      </Subject2>
      <CheckNone placeholder="나이를 입력해주세요." />
      <BtnAlign2>
        <UnColoredBtn>
          <LinkStyle2 to="/join-user/4">건너뛰기</LinkStyle2>
        </UnColoredBtn>
        <ColoredBtn>
          <LinkStyle to="/join-user/4">다음</LinkStyle>
        </ColoredBtn>
      </BtnAlign2>
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
  display: flex;
  width: 100vw;
  button {
    margin-right: 1rem;
  }
`;
const BtnAlign2 = styled.div`
  margin-top: 6rem;
  button {
    margin-bottom: 1rem;
  }
`;
export const Subject = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  margin: 0;
  p {
    font-size: 1.5rem;
    margin-top: 5.8333rem;
  }
`;
const Subject2 = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  margin: 0;
  p {
    font-size: 1.5rem;
    margin-top: 2.5rem;
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

export default JoinUser3;
