// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import BmiResult from '../../components/BmiResult';
// Styles
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinUser6 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={6} />
      <Subject>
        <p>BMI 계산 결과</p>
      </Subject>
      <BmiResult />
      <BtnAlign>
        <ColoredBtn>
          <LinkStyle to="/join-user/7">다음</LinkStyle>
        </ColoredBtn>
      </BtnAlign>
    </BaseScreen>
  );
};

const BtnAlign = styled.div`
  margin-top: 3.3333rem;
`;
const Subject = styled.div`
  margin-top: 6.8333rem;
  p {
    font-size: 2rem;
    margin-bottom: 6.5833rem;
  }
`;

export default JoinUser6;
