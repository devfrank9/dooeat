import BaseScreen from './BaseScreen';
import NavProgress from '../components/NavProgress';
import {TextAlign} from './JoinUser1';
import styled from 'styled-components';
import {Btn2} from '../components/BtnStyled';
import {LinkStyle} from './JoinUser1';

const JoinUser7 = () => {
  return (
    <BaseScreen>
      <NavProgress  pageNumber={7}/>
      <TextAlign>
        <p>회원님의</p>
        <p>목표 체중은 얼마인가요?</p>
      </TextAlign>
      <Scale />
      <MiddleText>
        <p>나의 목표 체중은</p>
      </MiddleText>
      <LastText>
        <input type="text" />
        <p>입니다.</p>
      </LastText>
      <BtnAlign>
        <Btn2>
          <LinkStyle to="/join-user8">완료</LinkStyle>
        </Btn2>
      </BtnAlign>
    </BaseScreen>
  );
};
const LastText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    display: flex;
    width: 12.8333rem;
  }
  p {
    font-size: 1.6667rem;
  }
`;
const BtnAlign = styled.div`
  margin-top: 4.4167rem;
`;
const MiddleText = styled.div`
  margin-top: 3.0833rem;
  p {
    font-size: 1.6667rem;
  }
`;
const Scale = styled.div`
  margin-top: 7.5rem;
  background-color: rgb(252, 216, 224);
  background-image: url('/image/group 3.png');
  background-repeat: no-repeat;
  background-position: center;
  width: 17.3333rem;
  height: 17.3333rem;
  border-radius: 9rem;
`;

export default JoinUser7;
