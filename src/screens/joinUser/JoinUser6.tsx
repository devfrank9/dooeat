// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import BmiResult from '../../components/BmiResult';
// Styles
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinUser6 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={6} />
        <Subject>BMI 계산 결과</Subject>
        <BmiResult />
        <div style={{flex: 0.36}} />
        <ColoredBtn>
          <LinkStyle to="/join-user/7">다음</LinkStyle>
        </ColoredBtn>
        <div style={{flex: 1}} />
      </AlignBase>
    </BaseScreen>
  );
};
const Subject = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 79px;
  margin-top: 52px;
`;

export default JoinUser6;
