import BaseScreen from './BaseScreen';
import NavProgress from '../components/NavProgress';
import {TextAlign} from './JoinUser1';
import {Common} from '../components/InputStyled';
import styled from 'styled-components';
import {Btn2} from '../components/BtnStyled';
import {LinkStyle} from './JoinUser1';

const JoinUser5 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={5}/>
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
        <Btn2>
          <LinkStyle to="/join-user6">다음</LinkStyle>
        </Btn2>
      </BtnAlign>
    </BaseScreen>
  );
};
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
