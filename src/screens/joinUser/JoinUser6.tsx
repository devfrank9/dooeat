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
        <div
          style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
        >
          <NavProgress pageNumber={6} />
          <Subject>BMI 계산 결과</Subject>
          <BmiResult />
          <div style={{height: 40}} />
          <ColoredBtn>
            <LinkStyle to="/join-user/7">다음</LinkStyle>
          </ColoredBtn>
          <div style={{height: 113}} />
        </div>
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
