// packages
import styled from 'styled-components';
// Screens
import BaseScreen from './BaseScreen';
// Components
import {Logo} from '../components/Logo';
// Styles
import {UnColoredBtn, ColoredBtn} from '../styles/BtnStyled';
import {LinkStyle, LinkStyle2} from '../styles/LinkStyled';

const Main = () => {
  return (
    <BaseScreen>
      <Logo />
      <MainBtnAlign>
        <ColoredBtn>
          <LinkStyle to={'/login'}>로그인</LinkStyle>
        </ColoredBtn>
        <UnColoredBtn>
          <LinkStyle2 to={'/join-user1'}>일반 회원 가입하기</LinkStyle2>
        </UnColoredBtn>
        <UnColoredBtn>
          <LinkStyle2 to={'/join-pro1'}>전문가 회원 가입하기</LinkStyle2>
        </UnColoredBtn>
      </MainBtnAlign>
    </BaseScreen>
  );
};

const MainBtnAlign = styled.div`
  button:nth-child(1) {
    margin-top: 4.3333rem;
  }
  button:nth-child(2) {
    margin-top: 3.75rem;
  }
  button:nth-child(3) {
    margin-top: 1rem;
  }
`;

export default Main;
