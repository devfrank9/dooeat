// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {CheckNone} from '../../styles/InputStyled';
import Agreement from '../../components/Agreement';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinPro2 = () => {
  return (
    <BaseScreen>
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
      <BtnAlign>
        <ColoredBtn>
          <LinkStyle to="/join-pro/3">다음</LinkStyle>
        </ColoredBtn>
      </BtnAlign>
    </BaseScreen>
  );
};

const BtnAlign = styled.div`
  margin-top: 2rem;
`;
const InputAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  margin-bottom: 4rem;
  input {
    margin-bottom: 1rem;
  }
`;
const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  margin-top: 3.4167rem;
  margin-bottom: 2.5rem;
  p {
    font-size: 1.8333rem;
    margin: 0;
  }
`;

export default JoinPro2;
