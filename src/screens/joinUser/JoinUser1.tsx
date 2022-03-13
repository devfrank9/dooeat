import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {RulesProp, validate} from '../../lib/GlobalFunction';
import {useQueryForCheckDuplicate} from '../../lib/GQL/CommunicationMap';
import BaseScreen, {AlignBase} from '../BaseScreen';
import NavProgress from '../../components/NavProgress';
import Agreement from '../../components/Agreement';
import * as Styled from '../../styles/joinUser/styled';
import CheckInput from '../../components/CheckInput';
import {useRecoilState} from 'recoil';
import {userFormState} from '../../lib/atom';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';
import ValidBtn from '../../components/ValidBtn';

const JoinUser1 = () => {
  const [userData, setUserData] = useRecoilState(userFormState);
  const [signup, setSignup] = useState<RequestSetMember>({});

  const navigate = useNavigate();
  const [idOK, setIdOK] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorLabel, setErrorLabel] = useState('');

  const [commDuplicate, commDuplicateResult] = useQueryForCheckDuplicate();
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (commDuplicateResult.data?.checkDuplicate) {
      setIdOK(true);
      setErrorLabel('');
    } else if (commDuplicateResult.error) {
      setIdOK(false);
      setErrorLabel(commDuplicateResult.error!.message);
    }
  }, [commDuplicateResult.data, commDuplicateResult.error]);
  useEffect(() => {
    let rules: RulesProp = {};
    if (signup.mb_id) {
      rules.mb_id = {email: {message: '이메일 형식에 맞지 않습니다'}};
    }
    if (signup.mb_password) {
      rules.mb_password = {
        equal: {message: '암호가 일치하지 않습니다', value: passwordConfirm},
      };
    }
    let msg = validate(signup, rules);
    setErrorLabel(msg || '');
  }, [signup, passwordConfirm]);

  const processSignup = () => {
    setUserData(signup);
    navigate('/join-user/2');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={1} />
        <Styled.TextAlign>
          <p>회원님의</p>
          <p>아이디 정보를 입력해주세요.</p>
        </Styled.TextAlign>
        <Styled.InputAlign>
          <form action="">
            <CheckInput
              placeholder="이메일을 입력해주세요"
              defaultValue={id ?? ''}
              onChange={e => {
                setId(e.target.value);
                setSignup({...signup, mb_email: e.target.value});
              }}
              onBlur={() => commDuplicate({variables: {mb_email: id}})}
              status={
                id.length === 0 || id.length === 0
                  ? 'none'
                  : errorLabel.length !== 0
                  ? 'err'
                  : 'succ'
              }
            />
            <CheckInput
              placeholder="비밀번호를 입력해주세요."
              defaultValue={password}
              type={'password'}
              name="password"
              autoComplete="off"
              onChange={e =>
                setSignup({...signup, mb_password: e.target.value})
              }
              status={
                passwordConfirm.length === 0 || passwordConfirm.length === 0
                  ? 'none'
                  : errorLabel.length !== 0
                  ? 'err'
                  : 'succ'
              }
            />
            <CheckInput
              placeholder="비밀번호를 다시 한번 입력해주세요."
              type={'password'}
              defaultValue={passwordConfirm}
              name="passwordConfirm"
              autoComplete="off"
              onChange={e => {
                setPasswordConfirm(e.target.value);
              }}
              status={
                passwordConfirm.length === 0 || passwordConfirm.length === 0
                  ? 'none'
                  : errorLabel.length !== 0
                  ? 'err'
                  : 'succ'
              }
            />
          </form>
        </Styled.InputAlign>
        {errorLabel}
        <Styled.AgreementAlign>
          <Agreement checked={handleOnChange} />
        </Styled.AgreementAlign>
        <Styled.BtnAlign />
        <ValidBtn
          onClick={() => {
            if (errorLabel.length > 0 || !idOK) return;
            else {
              processSignup();
            }
          }}
          status={errorLabel.length > 0 || !idOK ? 'err' : undefined}
        >
          다음
        </ValidBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser1;
