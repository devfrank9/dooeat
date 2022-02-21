// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Footer from '../../components/Footer';
// Styles
import DropDown from '../../styles/SelectStyled';
import {LinkStyle, LinkStyle2} from '../../styles/LinkStyled';
import {TextAlign} from './JoinUser1';
import {AbsoluteColBtn2, AbsoluteUnColBtn} from './JoinUser3';

const JoinUser4 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={4} />
        <TextAlign>
          <p>회원님의</p>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: '500'}}>사는 곳</p>은 어디인가요?
          </div>
        </TextAlign>
        <SelectAlign>
          <DropDown placeholder={'광역시도'} />
          <div style={{height: '12px'}} />
          <DropDown placeholder={'시군구'} />
        </SelectAlign>
        <div style={{flex: 1}} />
        <LinkStyle2 to="/join-user/5">
          <AbsoluteUnColBtn>건너뛰기</AbsoluteUnColBtn>
        </LinkStyle2>
        <div style={{height: '12px'}} />
        <LinkStyle to="/join-user/5">
          <AbsoluteColBtn2>다음</AbsoluteColBtn2>
        </LinkStyle>
        <FooterAlign>
          <Footer />
        </FooterAlign>
      </AlignBase>
    </BaseScreen>
  );
};
const FooterAlign = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 82px;
  width: 85%;
  max-width: 480px;
`;
const SelectAlign = styled.div`
  margin-top: 70px;
`;

export default JoinUser4;
