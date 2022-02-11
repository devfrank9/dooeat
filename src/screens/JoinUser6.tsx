import BaseScreen from './BaseScreen';
import NavProgress from '../components/NavProgress';
import styled from 'styled-components';
import BmiResult from '../components/BmiResult';
import {Btn2} from '../components/BtnStyled';
import {LinkStyle} from './JoinUser1';

const JoinUser6 = () => {
  return (
    <BaseScreen>
      <NavProgress></NavProgress>
      <Subject>
        <p>BMI 계산 결과</p>
      </Subject>
      <BmiResult />
      <BtnAlign>
        <Btn2>
          <LinkStyle to="join-user7">다음</LinkStyle>
        </Btn2>
      </BtnAlign>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  margin-top: 3.3333rem;
`;
const Subject = styled.div`
  p {
    font-size: 2rem;
    margin-bottom: 6.5833rem;
  }
`;

export default JoinUser6;
