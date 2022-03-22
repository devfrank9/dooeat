// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import DropDown from '../../components/JoinSelect';
import * as Styled from '../../styles/joinPro/styled';
import {useNavigate} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {selectLocation} from '../../lib/atom';

const JoinPro5 = () => {
  const navigate = useNavigate();
  const location = useRecoilValue(selectLocation);

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={4} />
        <Styled.TextAlign2>
          <p>전문가님의</p>
          <p>활동 지역은 어디인가요?</p>
        </Styled.TextAlign2>
        <Styled.DropDownAlign>
          <DropDown location={location} />
        </Styled.DropDownAlign>
        <Styled.AbsoluteColBtn onClick={() => navigate('/join-pro/6')}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro5;
