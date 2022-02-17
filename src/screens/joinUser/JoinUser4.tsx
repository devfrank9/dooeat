// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Footer from '../../components/Footer';
// Styles
import DropDown from '../../styles/SelectStyled';
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
          <DropDown placeholder={'광역시도'}/>
          <div style={{height: '12px'}} />
          <DropDown placeholder={'시군구'}/>
        </SelectAlign>
        <div style={{flex: 1}} />
        <LinkStyle2 to="/join-user/5">
          <UnColoredBtn>
            건너뛰기
          </UnColoredBtn>
        </LinkStyle2>
        <div style={{height: '12px'}} />
        <LinkStyle to="/join-user/5">
          <ColoredBtn>
            다음
          </ColoredBtn>
        </LinkStyle>
        <Footer />
        <div style={{height: 81}} />
      </AlignBase>
    </BaseScreen>
  );
};
const SelectAlign = styled.div`
  margin-top: 70px;
`;

export default JoinUser4;
