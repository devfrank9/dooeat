// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import DropDown from '../../styles/SelectStyled';
import * as Styled from '../../styles/joinPro/styled';
import {useNavigate} from 'react-router-dom';

const JoinPro5 = () => {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={5} />
        <Styled.TextAlign2>
          <p>전문가님의</p>
          <p>활동 지역은 어디인가요?</p>
        </Styled.TextAlign2>
        <Styled.DropDownAlign>
          <DropDown />
        </Styled.DropDownAlign>
        <Styled.AbsoluteColBtn onClick={() => navigate('/join-pro/6')}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro5;
