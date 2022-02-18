// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Footer from '../../components/Footer';
// Styles
import {UnColoredBtn, LongBtn} from '../../styles/BtnStyled';
import {Common} from '../../styles/InputStyled';
import {LinkStyle, LinkStyle2} from '../../styles/LinkStyled';
import {AbsoluteColBtn, TextAlign} from './JoinUser1';

const JoinUser3 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={3} />
        <TextAlign>
          <p>회원님의</p>
          <p>
            <strong>성별과 나이</strong>를 입력해주세요.
          </p>
        </TextAlign>
        <div style={{height: 41}} />
        <Subject>성별</Subject>
        <BtnAlign>
          <LongBtn style={{fontFamily: 'Noto Sans KR'}}>여자</LongBtn>
          <LongBtn style={{fontFamily: 'Noto Sans KR'}}>남자</LongBtn>
        </BtnAlign>
        <div style={{height: '30px'}} />
        <Subject>나이</Subject>
        <div style={{height: '10px'}} />
        <div style={{position: 'relative'}}>
          <Age>세</Age>
          <AgeInput placeholder="나이를 입력해주세요." />
        </div>
        <div style={{flex: 1}} />
        <LinkStyle2 to="/join-user/4">
          <AbsoluteUnColBtn>건너뛰기</AbsoluteUnColBtn>
        </LinkStyle2>
        <div style={{height: '12px'}} />
        <LinkStyle to="/join-user/4">
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
export const AbsoluteColBtn2 = styled(AbsoluteColBtn)`
  bottom: 113px;
`;
export const AbsoluteUnColBtn = styled(UnColoredBtn)`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 177px;
  width: 85%;
  max-width: 480px;
`;

const Age = styled.label`
  position: absolute;
  top: 15px;
  right: 31px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
`;
const AgeInput = styled(Common)`
  padding-left: 30px;
`;
const BtnAlign = styled.div`
  display: flex;
  margin: 0 1px;
  button {
    margin-top: 10px;
    margin-right: 12px;
  }
`;
export const Subject = styled.p`
  margin: 0 1px;
  font-size: 18px;
`;

export default JoinUser3;
