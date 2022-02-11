import BaseScreen from './BaseScreen';
import NavProgress from '../components/NavProgress';
import {TextAlign} from './JoinUser1';
import styled from 'styled-components';
import {CheckNone} from '../components/InputStyled';
import {Btn, Btn2} from '../components/BtnStyled';
import {LinkStyle} from './JoinUser1';
import {LinkStyle2, Footer} from './JoinUser3';

const JoinUser4 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={4}/>
      <TextAlign>
        <p>회원님의</p>
        <p>사는 곳은 어디인가요?</p>
      </TextAlign>
      <InputAlign>
        <CheckNone placeholder="(임시)광역시도" />
        <CheckNone placeholder="(임시)시군구" />
      </InputAlign>
      <BtnAlign>
        <Btn>
          <LinkStyle2 to="/join-user5">건너뛰기</LinkStyle2>
        </Btn>
        <Btn2>
          <LinkStyle to="/join-user5">다음</LinkStyle>
        </Btn2>
      </BtnAlign>
      <Footer>
        <p>* 전문가 매칭 시 필요한 데이터 입니다.(선택입력)</p>
      </Footer>
    </BaseScreen>
  );
};
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

export default JoinUser4;
