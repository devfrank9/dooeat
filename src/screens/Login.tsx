import {Logo} from '../components/Logo';
import {Common} from '../components/InputStyled';
import {Btn2} from '../components/BtnStyled';
import BaseScreen from './BaseScreen';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <BaseScreen>
      <Logo />
      <InputAlign>
        <Common placeholder="이메일을 입력해주세요" />
        <Common placeholder="비밀번호를 입력해주세요" />
      </InputAlign>
      <Btn2>두잇두잇 시작하기</Btn2>
      <SearchLink to={'/serachId'}>아이디/비밀번호 찾기</SearchLink>
    </BaseScreen>
  );
};

const InputAlign = styled.div`
  input:nth-child(1) {
    margin-top: 4.3333rem;
  }
  input:nth-child(2) {
    margin-top: 1rem;
    margin-bottom: 10.8333rem;
  }
`;
const SearchLink = styled(Link)`
  color: rgb(151, 151, 151);
  margin-top: 1.6667rem;
`;

export default Login;
