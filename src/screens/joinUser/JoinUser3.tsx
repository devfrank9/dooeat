// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Footer from '../../components/Footer';
// Styles
import {LongBtn} from '../../styles/BtnStyled';
import {useNavigate} from 'react-router-dom';
import * as Styled from '../../styles/joinUser/styled';

const JoinUser3 = () => {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={3} />
        <Styled.TextAlign>
          <p>회원님의</p>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: '500'}}>성별과 나이</p>를 입력해주세요.
          </div>
        </Styled.TextAlign>
        <div style={{height: 41}} />
        <Styled.Subject>성별</Styled.Subject>
        <BtnAlign>
          <LongBtn style={{fontFamily: 'Noto Sans KR'}}>여자</LongBtn>
          <LongBtn style={{fontFamily: 'Noto Sans KR'}}>남자</LongBtn>
        </BtnAlign>
        <div style={{height: '30px'}} />
        <Styled.Subject>나이</Styled.Subject>
        <div style={{height: '10px'}} />
        <div style={{position: 'relative'}}>
          <Styled.Age>세</Styled.Age>
          <Styled.AgeInput placeholder="나이를 입력해주세요." />
        </div>
        <div style={{flex: 1}} />
        <Styled.LinkStyle2 to="/join-user/4">
          <Styled.AbsoluteUnColBtn>건너뛰기</Styled.AbsoluteUnColBtn>
        </Styled.LinkStyle2>
        <div style={{height: '12px'}} />
        <Styled.AbsoluteColBtn2 onClick={() => navigate('/join-user/4')}>
          다음
        </Styled.AbsoluteColBtn2>
        <Styled.FooterAlign>
          <Footer />
        </Styled.FooterAlign>
      </AlignBase>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  display: flex;
  margin: 0 1px;
  button {
    margin-top: 10px;
    margin-right: 12px;
  }
`;

export default JoinUser3;
