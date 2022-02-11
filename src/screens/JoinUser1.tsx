import BaseScreen from './BaseScreen';
import NavProgress from '../components/NavProgress';
import {CheckNone} from '../components/InputStyled';
import Agreement from '../components/Agreement';
import styled from 'styled-components';
import {Btn2} from '../components/BtnStyled';
import {Link} from 'react-router-dom';

const JoinUser1 = () => {
  return (
    <BaseScreen>
      <NavProgress />
      <TextAlign>
        <p>회원님의</p>
        <p>아이디 정보를 입력해주세요.</p>
      </TextAlign>
      <InputAlign>
        <CheckNone placeholder="이메일을 입력해주세요" />
        <CheckNone placeholder="비밀번호를 입력해주세요." />
        <CheckNone placeholder="비밀번호를 다시 한번 입력해주세요." />
      </InputAlign>
      <Agreement />
      <BtnAlign>
        <Btn2>
          <LinkStyle to="/join-user2">다음</LinkStyle>
        </Btn2>
      </BtnAlign>
    </BaseScreen>
  );
};
export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;
const BtnAlign = styled.div`
  margin-top: 3.4167rem;
`;
export const TextAlign = styled.div`
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
const InputAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  margin-top: 4.0833rem;
  input {
    margin-bottom: 1rem;
  }
`;

export default JoinUser1;
