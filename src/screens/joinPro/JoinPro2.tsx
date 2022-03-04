// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import Agreement from '../../components/Agreement';
import * as Styled from '../../styles/joinPro/styled';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {userFormState} from '../../lib/atom';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';
import {useQueryForCheckDuplicate} from '../../lib/GQL/CommunicationMap';
import CheckInput from '../../components/CheckInput';
import {RulesProp, validate} from '../../lib/GlobalFunction';

const JoinPro2 = () => {
  const [userData, setUserData] = useRecoilState(userFormState);
  const [signup, setSignup] = useState<RequestSetMember>({});

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [idOK, setIdOK] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorLabel, setErrorLabel] = useState('');
  const [commDuplicate, commDuplicateResult] = useQueryForCheckDuplicate();

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
    if (id) {
      rules.mb_email = {email: {message: '이메일 형식에 맞지 않습니다'}};
    }
    if (passwordConfirm) {
      rules.mb_password = {
        equal: {message: '암호가 일치하지 않습니다', value: passwordConfirm},
      };
    }
    let msg = validate(signup, rules);
    setErrorLabel(msg || '');
  }, [id, signup, passwordConfirm]);

  const processSignup = () => {
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-pro/3');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={2} />
        <Styled.TextAlign>
          <p>전문가님의</p>
          <p>아이디 정보를 입력해주세요.</p>
        </Styled.TextAlign>
        <Styled.InputAlign>
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
            defaultValue={password ?? ''}
            type={'password'}
            name="password"
            autoComplete="off"
            onChange={e => setSignup({...signup, mb_password: e.target.value})}
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
            defaultValue={passwordConfirm ?? ''}
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
        </Styled.InputAlign>
        {errorLabel}
        <Styled.AgreementAlign>
          <Agreement checked={handleOnChange} />
        </Styled.AgreementAlign>
        <Styled.AbsoluteColBtn
          onClick={() => {
            if (errorLabel.length > 0 || !idOK) return;
            else {
              processSignup();
            }
          }}
        >
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro2;
