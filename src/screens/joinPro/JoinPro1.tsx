// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Agreement from '../../components/Agreement';
// Styles
import * as Styled from '../../styles/joinPro/styled';

const JoinPro1 = () => {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={1} />
        <Styled.TextAlign>
          <p>전문가님의</p>
          <p>정확한 정보가 필요합니다.</p>
        </Styled.TextAlign>
        <Agreement />
        <Styled.AbsoluteColBtn onClick={() => navigate('/join-pro/2')}>
          휴대폰 본인 확인
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro1;
