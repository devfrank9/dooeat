//packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
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
      <Agreement />
      <BtnAlign>
        <ColoredBtn>
          <LinkStyle to="/join-user/2">다음</LinkStyle>
        </ColoredBtn>
      </BtnAlign>
    </BaseScreen>
  );
};

const BtnAlign = styled.div`
  margin-top: 3.4167rem;
`;
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
