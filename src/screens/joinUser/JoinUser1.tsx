//packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Agreement from '../../components/Agreement';
// Styles
import {ColoredBtn} from '../../styles/BtnStyled';
import CheckInput from '../../components/CheckInput';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {RulesProp, validate} from "../../lib/GlobalFunction";
import {useQueryForCheckDuplicate} from "../../lib/GQL/CommunicationMap";

const JoinUser1 = () => {
  const navigate = useNavigate();
  const [idOK, setIdOK] = useState(false);
  const [id, setId] = useState("");
  const [password , setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorLabel, setErrorLabel] = useState('');

  const [commDuplicate,commDuplicateResult] = useQueryForCheckDuplicate();

  useEffect(() => {
    if (commDuplicateResult.data?.checkDuplicate){
      setIdOK(true)
      setErrorLabel("");
    }
    else if(commDuplicateResult.error) {
      setIdOK(false)
      setErrorLabel(commDuplicateResult.error!.message)
    }
  },[commDuplicateResult])

  useEffect(() => {
    let msg = "";
    if (id){
      let rules : RulesProp = {
        id : {email : {message : "이메일 형식에 맞지 않습니다"}}
      };
      let vali = validate({id : id}, rules);
      if (vali){
        msg = vali;
      }
    }
    if (!msg && password && passwordConfirm){
      if (password !== passwordConfirm){
        msg = "암호가 일치하지 않습니다";
      }
    }
    setErrorLabel(msg);
  },[id,password, passwordConfirm])

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={1} />
        <TextAlign>
          <p>회원님의</p>
          <p>아이디 정보를 입력해주세요.</p>
        </TextAlign>
        <InputAlign>
          <CheckInput placeholder="이메일을 입력해주세요"
                      value={id}
                      onChange={e => setId(e.target.value)}
                      onBlur={() => commDuplicate({variables : {mb_email : id}})}/>
          <CheckInput placeholder="비밀번호를 입력해주세요."
                      value={password}
                      type={"password"}
                      onChange={e => setPassword(e.target.value)}
                      status={password.length === 0 || passwordConfirm.length === 0 ? 'none' : password === passwordConfirm ? 'succ' : "err"}
          />
          <CheckInput placeholder="비밀번호를 다시 한번 입력해주세요."
                      type={"password"}
                      value={passwordConfirm}
                      onChange={e => setPasswordConfirm(e.target.value)}
                      status={password.length === 0 || passwordConfirm.length === 0 ? 'none' : password === passwordConfirm ? 'succ' : "err"}
          />
        </InputAlign>
        {errorLabel}
        <AgreementAlign>
          <Agreement />
        </AgreementAlign>
        <BtnAlign />
        <AbsoluteColBtn onClick={() => {
          if (errorLabel.length > 0 || !idOK) return;
          else {
            //일부 데이터 저장
            navigate('/join-user/2')
          }
        }}>다음</AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};
const AgreementAlign = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 123px;
  width: 85%;
  max-width: 480px;
`;
export const AbsoluteColBtn = styled(ColoredBtn)`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  width: 85%;
  max-width: 480px;
`;
const BtnAlign = styled.div`
  margin-bottom: 40px;
`;
const InputAlign = styled.div`
  margin-top: 49px;
  input:first-child {
    margin-bottom: 12px;
  }
  input:last-child {
    margin-top: 12px;
  }
`;
export const TextAlign = styled.div`
  font-size: 22px;
  margin: 0 10px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 41px;
`;

export default JoinUser1;
