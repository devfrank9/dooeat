// packages
import styled from 'styled-components';
// Screens
import BaseScreen from './BaseScreen';
// Components
import {Logo} from '../components/Logo';
// Styles
import {UnColoredBtn, ColoredBtn} from '../styles/BtnStyled';
import {LinkStyle, LinkStyle2} from '../styles/LinkStyled';
import {AlignBase, Space} from './BaseScreen';

const Main = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <div style={{height: '147px'}} />
        <Logo />
        <BtnAlign>
          <ColoredBtn>
            <LinkStyle to={'/login'}>로그인</LinkStyle>
          </ColoredBtn>
          <UnColoredBtn>
            <LinkStyle2 to={'/join-user/1'}>일반 회원 가입하기</LinkStyle2>
          </UnColoredBtn>
          <UnColoredBtn>
            <LinkStyle2 to={'/join-pro/1'}>전문가 회원 가입하기</LinkStyle2>
          </UnColoredBtn>
        </BtnAlign>
        <Space />
      </AlignBase>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 52px;
  button:nth-child(1) {
    margin-bottom: 45px;
  }
  button:nth-child(2) {
    margin-bottom: 12px;
  }
`;

export default Main;
