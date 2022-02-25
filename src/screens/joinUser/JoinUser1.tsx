import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {RulesProp, validate} from '../../lib/GlobalFunction';
import {useQueryForCheckDuplicate} from '../../lib/GQL/CommunicationMap';
import BaseScreen, {AlignBase} from '../BaseScreen';
import NavProgress from '../../components/NavProgress';
import Agreement from '../../components/Agreement';
import * as Styled from '../../styles/joinUser/styled';
import CheckInput from '../../components/CheckInput';

const JoinUser1 = () => {
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
              //일부 데이터 저장
              navigate('/join-user/2');
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
