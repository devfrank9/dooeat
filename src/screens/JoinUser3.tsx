import BaseScreen from './BaseScreen';
import NavProgress from '../components/NavProgress';
import {Btn, BtnLong, Btn2} from '../components/BtnStyled';
import {TextAlign} from './JoinUser1';
import styled from 'styled-components';
import {CheckNone} from '../components/InputStyled';
import {LinkStyle} from './JoinUser1';
import {Link} from 'react-router-dom';

const JoinUser3 = () => {
  return (
    <BaseScreen>
      <NavProgress />
      <TextAlign>
        <p>회원님의</p>
        <p>성별과 나이를 입력해주세요.</p>
      </TextAlign>
      <Subject>
        <p>성별</p>
      </Subject>
      <BtnAlign>
        <BtnLong>여자</BtnLong>
        <BtnLong>남자</BtnLong>
      </BtnAlign>
      <Subject2>
        <p>나이</p>
      </Subject2>
      <CheckNone placeholder="나이를 입력해주세요." />
      <BtnAlign2>
        <Btn>
          <LinkStyle2 to="/join-user4">건너뛰기</LinkStyle2>
        </Btn>
        <Btn2>
          <LinkStyle to="/join-user4">다음</LinkStyle>
        </Btn2>
      </BtnAlign2>
      <Footer>
        <p>* 전문가 매칭 시 필요한 데이터 입니다.(선택입력)</p>
      </Footer>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  display: flex;
  width: 100vw;
  l & > BtnLong:nth-child() {
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
export const LinkStyle2 = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mainColor};
`;
export const Footer = styled.div`
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
