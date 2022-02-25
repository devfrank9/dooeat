// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import BmiResult from '../../components/BmiResult';
// Styles
import * as Styled from '../../styles/joinUser/styled';

const JoinUser6 = () => {
  const navigate = useNavigate();

  return (
    <BaseScreen>
      <AlignBase>
        <div
          style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
        >
          <NavProgress pageNumber={6} />
          <Styled.BmiSubject>BMI 계산 결과</Styled.BmiSubject>
          <BmiResult />
          <div style={{height: 40}} />
          <Styled.ColoredBtn onClick={() => navigate('/join-user/7')}>
            다음
          </Styled.ColoredBtn>
          <div style={{height: 113}} />
        </div>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser6;
