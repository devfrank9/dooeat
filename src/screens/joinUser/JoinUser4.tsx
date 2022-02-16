// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Footer from '../../components/Footer';
// Styles
import DropDown, {Select} from '../../styles/SelectStyled';
import {UnColoredBtn, ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle, LinkStyle2} from '../../styles/LinkStyled';
import {TextAlign} from './JoinUser1';

const JoinUser4 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={4} />
        <TextAlign>
          <p>회원님의</p>
          <p>사는 곳은 어디인가요?</p>
        </TextAlign>
        <SelectAlign>
          <DropDown />
          <div style={{height: '12px'}} />
          <DropDown />
        </SelectAlign>
        <div style={{flex: 3}} />
        <UnColoredBtn>
          <LinkStyle2 to="/join-user/5">건너뛰기</LinkStyle2>
        </UnColoredBtn>
        <div style={{height: '12px'}} />
        <ColoredBtn>
          <LinkStyle to="/join-user/5">다음</LinkStyle>
        </ColoredBtn>
        <Footer />
        <div style={{flex: 1.1}} />
      </AlignBase>
    </BaseScreen>
  );
};
const SelectAlign = styled.div`
  margin-top: 70px;
`;

export default JoinUser4;
