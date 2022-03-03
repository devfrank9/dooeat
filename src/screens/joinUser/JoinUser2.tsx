import BaseScreen, {AlignBase} from '../BaseScreen';
import NavProgress from '../../components/NavProgress';
import * as Styled from '../../styles/joinUser/styled';
import {useNavigate} from 'react-router-dom';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';
import {useEffect, useState} from 'react';
import ProfileImgUp from '../../components/ProfileImgUp';
import {useRecoilCallback, useRecoilState, useRecoilValue} from 'recoil';
import {userFormState} from '../../lib/atom';
import {useQueryForCheckDuplicate} from '../../lib/GQL/CommunicationMap';

const JoinUser2 = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [userData, setUserData] = useRecoilState(userFormState);
  const [commDuplicate, commDuplicateResult] = useQueryForCheckDuplicate();
  const [idOK, setIdOK] = useState(false);
  const [checkNick, setCheckNick] = useState(false);
  const [errorLabel, setErrorLabel] = useState('');

  useEffect(() => {
    if (commDuplicateResult.data?.checkDuplicate) {
      setIdOK(true);
      setErrorLabel('');
    } else if (commDuplicateResult.error) {
      setIdOK(false);
      setErrorLabel('이미 존재하는 닉네임 입니다.');
    }
  }, [commDuplicateResult.data, commDuplicateResult.error]);

  const processSignup = () => {
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-user/3');
    // commSetMember({variables: signup}).then(data => {
    //   if (data.data?.setMember) {
    //     userData(signup);
    //     setSession(data.data.setMember);

    //   }
    // });
  };
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={2} />
        <Styled.TextAlign>
          <p>회원님의</p>
          <p>활동 정보를 입력해주세요.</p>
        </Styled.TextAlign>
        <div style={{height: '68px'}} />
        <div style={{width: '100%'}}>
          <ProfileImgUp />
        </div>
        <div style={{height: '24px'}} />
        <Styled.CheckNone
          placeholder="닉네임을 입력해주세요."
          required
          value={signup.mb_nick ?? ''}
          onChange={e => {
            setSignup({...signup, mb_nick: e.target.value});
            setCheckNick(false);
          }}
          onBlur={() => commDuplicate({variables: {mb_nick: signup.mb_nick}})}
        />
        {errorLabel}
        <Styled.AbsoluteColBtn onClick={processSignup}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser2;
