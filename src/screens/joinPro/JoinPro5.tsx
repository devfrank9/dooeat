// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import DropDown from '../../styles/SelectStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {AbsoluteColBtn} from './JoinPro1';

const JoinPro5 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={5} />
        <TextAlign>
          <p>전문가님의</p>
          <p>활동 지역은 어디인가요?</p>
        </TextAlign>
        <DropDownAlign>
          <DropDown />
          <DropDown />
        </DropDownAlign>
        <AbsoluteColBtn>
          <LinkStyle to="/join-pro/6">다음</LinkStyle>
        </AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};
const DropDownAlign = styled.div`
  div:first-child {
    margin-bottom: 12px;
  }
`;
const TextAlign = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default JoinPro5;
