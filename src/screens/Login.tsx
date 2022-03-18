// Packages
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useLocalStorage, useSessionStorage} from 'react-use-storage';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {__me, __session} from '../lib/atom';
import {
  useLQueryForGetMe,
  useLQueryForLogin,
} from '../lib/GQL/CommunicationMap';
import Constants from '../lib/Constants';
import {useNavigate} from 'react-router-dom';
import {RequestQueryGetLogin} from '../lib/GQL/GQLInterfaces';
import {RulesProp, validate} from '../lib/GlobalFunction';
import BaseScreen from './BaseScreen';
import {Logo} from '../components/Logo';
import {Common} from '../styles/InputStyled';
import {ColoredBtn} from '../styles/BtnStyled';
import {AlignBase, Space} from './BaseScreen';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [preventEvent, setPreventEvent] = useState(false);

  const [_, setValue, __] = useLocalStorage(
    Constants.storage.autoLoginSession,
    '',
  );
  const [___, setCurrentValue, _____] = useSessionStorage(
    Constants.storage.currentLoginSession,
    '',
  );
  const navigate = useNavigate();
  const [commLogin, commLoginResult] = useLQueryForLogin();
  const setSession = useSetRecoilState(__session);
  const [loginData, loginDataResult] = useLQueryForGetMe();
  const [getMe, setMe] = useRecoilState(__me);

  const process = () => {
    let validateRules: RulesProp = {
      mb_email: {required: {message: '아이디를 입력해주세요'}},
      mb_password: {required: {message: '암호를 입력해주세요'}},
    };
    let loginFormInput: RequestQueryGetLogin = {
      mb_id: '',
      mb_email: id,
      mb_password: pw,
    };
    let vali = validate(loginFormInput, validateRules);
    if (vali) {
      alert(vali);
      return;
    }
    commLogin({variables: loginFormInput});
  };

  useEffect(() => {
    if (commLoginResult.data) {
      setPreventEvent(true);
      setSession(commLoginResult.data.login);
      setValue(commLoginResult.data.login);
      setCurrentValue(commLoginResult.data.login);
      let session: {session: string} = {
        session: commLoginResult.data.login,
      };
      loginData({variables: session});
    }
  }, [commLoginResult.data]);

  useEffect(() => {
    if (loginDataResult.data && loginDataResult.data.getMe) {
      console.log(loginDataResult.data?.getMe);
      setMe(loginDataResult.data.getMe);
      navigate('/');
    }
  }, [loginDataResult.data]);

  return (
    <BaseScreen>
      <AlignBase>
        <div style={{height: '147px'}} />
        <Logo />
        <InputAlign>
          <Common
            value={id}
            onChange={e => setId(e.target.value)}
            maxLength={20}
            placeholder="이메일을 입력해주세요"
          />
          <Common
            value={pw}
            onChange={e => setPw(e.target.value)}
            type={'password'}
            placeholder="비밀번호를 입력해주세요"
          />
        </InputAlign>
        <ColoredBtn onClick={() => process()}>두잇두잇 시작하기</ColoredBtn>
        <SearchLink to={'/search'}>아이디 / 비밀번호 찾기</SearchLink>
        <Space />
        <div style={{height: '30px'}} />
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
