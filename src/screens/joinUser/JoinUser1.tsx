import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {RulesProp, validate} from '../../lib/GlobalFunction';
import {
  useMutationForSetMember,
  useQueryForCheckDuplicate,
} from '../../lib/GQL/CommunicationMap';
import BaseScreen, {AlignBase} from '../BaseScreen';
import NavProgress from '../../components/NavProgress';
import Agreement from '../../components/Agreement';
import * as Styled from '../../styles/joinUser/styled';
import CheckInput from '../../components/CheckInput';
import {useSetRecoilState} from 'recoil';
import {__session} from '../../lib/atom';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';

const JoinUser1 = () => {
  const setSession = useSetRecoilState(__session);
  const [commSetMember] = useMutationForSetMember();
  const [signup, setSignup] = useState<RequestSetMember>({});

  const navigate = useNavigate();
  const [idOK, setIdOK] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorLabel, setErrorLabel] = useState('');

  const [commDuplicate, commDuplicateResult] = useQueryForCheckDuplicate();

  useEffect(() => {
    if (commDuplicateResult.data?.checkDuplicate) {
      setIdOK(true);
      setErrorLabel('');
    } else if (commDuplicateResult.error) {
      setIdOK(false);
      setErrorLabel(commDuplicateResult.error!.message);
    }
  }, [commDuplicateResult]);
  useEffect(() => {
    let msg = '';
    if (signup.mb_id) {
      let rules: RulesProp = {
        id: {email: {message: '이메일 형식에 맞지 않습니다'}},
      };
      let vali = validate({id: signup.mb_id}, rules);
      if (vali) {
        msg = vali;
      }
    }
    if (!msg && signup.mb_password && passwordConfirm) {
      if (signup.mb_password !== passwordConfirm) {
        msg = '암호가 일치하지 않습니다';
      }
    }
    setErrorLabel(msg);
  }, [signup.mb_id, signup.mb_password, passwordConfirm]);

  const processSignup = () => {
    commSetMember({variables: signup}).then(data => {
      if (data.data?.setMember) {
        setSession(data.data.setMember);
        navigate('/join-user/2');
      }
    });
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
          <CheckInput
            placeholder="이메일을 입력해주세요"
            value={signup.mb_id ?? ''}
            onChange={e => {
              setId(e.target.value);
              setSignup({...signup, mb_id: e.target.value});
            }}
            onBlur={() => commDuplicate({variables: {mb_email: id}})}
          />
          <CheckInput
            placeholder="비밀번호를 입력해주세요."
            value={signup.mb_password ?? ''}
            type={'password'}
            onChange={e => setPassword(e.target.value)}
            status={
              password.length === 0 || passwordConfirm.length === 0
                ? 'none'
                : password === passwordConfirm
                ? 'succ'
                : 'err'
            }
          />
          <CheckInput
            placeholder="비밀번호를 다시 한번 입력해주세요."
            type={'password'}
            value={passwordConfirm}
            onChange={e => {
              setPasswordConfirm(e.target.value);
              setSignup({...signup, mb_password: e.target.value});
            }}
            status={
              password.length === 0 || passwordConfirm.length === 0
                ? 'none'
                : password === passwordConfirm
                ? 'succ'
                : 'err'
            }
          />
        </Styled.InputAlign>
        {errorLabel}
        <Styled.AgreementAlign>
          <Agreement />
        </Styled.AgreementAlign>
        <Styled.BtnAlign />
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

export default JoinUser1;
