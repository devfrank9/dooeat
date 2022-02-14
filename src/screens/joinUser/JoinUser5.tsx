// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {Common} from '../../styles/InputStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinUser5 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={5} />
      <TextAlign>
        <p>회원님의</p>
        <p>현재 체중과 키는 얼마인가요?</p>
      </TextAlign>
      <InputAlign>
        <Subject>
          <p>체중</p>
        </Subject>
        <Common placeholder="kg단위로 입력해주세요." />
        <Subject>
          <p>키</p>
        </Subject>
        <Common placeholder="cm단위로 입력해주세요." />
      </InputAlign>
      <BtnAlign>
        <ColoredBtn>
          <LinkStyle to="/join-user6">다음</LinkStyle>
        </ColoredBtn>
      </BtnAlign>
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
  margin-top: 13rem;
`;
const InputAlign = styled.div`
  margin-top: 3.0833rem;
`;
const Subject = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  margin: 0;
  p {
    font-size: 1.5rem;
  }
`;

export default JoinUser5;
