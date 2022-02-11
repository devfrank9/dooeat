import styled from 'styled-components';
import BaseScreen from './BaseScreen';
import {Logo} from '../components/Logo';
import {Btn, Btn2} from '../components/BtnStyled';
import {Link} from 'react-router-dom';

const Main = () => {
  return (
    <BaseScreen>
      <Logo />
      <MainBtnAlign>
        <Btn2>
          <LinkStyle to={'/login'}>로그인</LinkStyle>
        </Btn2>
        <Btn>
          <LinkStyle2 to={'/join-user1'}>일반 회원 가입하기</LinkStyle2>
        </Btn>
        <Btn>
          <LinkStyle2 to={'/join-pro1'}>전문가 회원 가입하기</LinkStyle2>
        </Btn>
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
const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;
const LinkStyle2 = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mainColor};
  font-weight: bold;
`;

export default Main;
