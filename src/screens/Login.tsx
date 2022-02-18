// Packages
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// Screens
import BaseScreen from './BaseScreen';
// Components
import {Logo} from '../components/Logo';
// Styles
import {Common} from '../styles/InputStyled';
import {ColoredBtn} from '../styles/BtnStyled';
import {AlignBase, Space} from './BaseScreen';

const Login = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <div style={{height: '147px'}} />
        <Logo />
        <InputAlign>
          <Common placeholder="이메일을 입력해주세요" />
          <Common placeholder="비밀번호를 입력해주세요" />
        </InputAlign>
        <ColoredBtn>두잇두잇 시작하기</ColoredBtn>
        <SearchLink to={'/search'}>아이디 / 비밀번호 찾기</SearchLink>
        <Space />
      </AlignBase>
    </BaseScreen>
  );
};
const InputAlign = styled.div`
  margin-top: 52px;
  margin-bottom: 130px;
  input:first-child {
    margin-bottom: 12px;
  }
`;
const SearchLink = styled(Link)`
  color: ${props => props.theme.btnColor4};
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  opacity: 0.8;
`;

export default Login;
