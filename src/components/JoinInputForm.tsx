import {useEffect, useState} from 'react';
import {useQueryForCheckDuplicate} from '../lib/GQL/CommunicationMap';
import {RulesProp, validate} from '../lib/GlobalFunction';
import CheckInput from './CheckInput';
import styled from 'styled-components';

const JoinInputForm = () => {
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
    if (id) {
      let rules: RulesProp = {
        id: {email: {message: '이메일 형식에 맞지 않습니다'}},
      };
      let vali = validate({id: id}, rules);
      if (vali) {
        msg = vali;
      }
    }
    if (!msg && password && passwordConfirm) {
      if (password !== passwordConfirm) {
        msg = '암호가 일치하지 않습니다';
      }
    }
    setErrorLabel(msg);
  }, [id, password, passwordConfirm]);
  return (
    <>
      <InputAlign>
        <CheckInput
          placeholder="이메일을 입력해주세요"
          value={id}
          onChange={e => setId(e.target.value)}
          onBlur={() => commDuplicate({variables: {mb_email: id}})}
        />
        <CheckInput
          placeholder="비밀번호를 입력해주세요."
          value={password}
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
          onChange={e => setPasswordConfirm(e.target.value)}
          status={
            password.length === 0 || passwordConfirm.length === 0
              ? 'none'
              : password === passwordConfirm
              ? 'succ'
              : 'err'
          }
        />
      </InputAlign>
      {errorLabel}
    </>
  );
};

export const InputAlign = styled.div`
  margin-top: 49px;
  input:first-child {
    margin-bottom: 12px;
  }
  input:last-child {
    margin-top: 12px;
  }
`;

export default JoinInputForm;
