// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {LongLine} from '../../styles/BtnStyled';
import * as Styled from '../../styles/joinPro/styled';
import {useNavigate} from 'react-router-dom';
import {useMutationForSetMember} from '../../lib/GQL/CommunicationMap';
import {useRecoilState, useResetRecoilState, useSetRecoilState} from 'recoil';
import {userFormState, __session} from '../../lib/atom';
import {useState} from 'react';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';

const JoinPro8 = () => {
  const [commSetMember] = useMutationForSetMember();
  const setSession = useSetRecoilState(__session);

  const navigate = useNavigate();
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [userData, setUserData] = useRecoilState(userFormState);
  const reset = useResetRecoilState(userFormState);

  const processSignup = () => {
    Object.assign(signup, userData);
    setUserData(signup);
    commSetMember({variables: userData}).then(data => {
      if (data.data?.setMember) {
        setSession(data.data.setMember);
        alert('회원가입을 환영합니다');
      } else {
        alert('회원가입 실패');
        return;
      }
    });
    navigate('/pro/profile');
    reset();
  };

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={8} />
        <Styled.TextAlign3>
          <p>전문가님이 원하는</p>
          <p>코칭 기간을 선택해주세요.</p>
        </Styled.TextAlign3>
        <Styled.InputAlign>
          <LongLine
            onClick={e => {
              setSignup({...signup, mb_8: '1개월 미만'});
            }}
          >
            1개월 미만
          </LongLine>
          <LongLine
            onClick={e => {
              setSignup({...signup, mb_8: '1~6개월'});
            }}
          >
            1~6개월
          </LongLine>
          <LongLine
            onClick={e => {
              setSignup({...signup, mb_8: '6개월~12개월'});
            }}
          >
            6개월~12개월
          </LongLine>
          <LongLine
            onClick={e => {
              setSignup({...signup, mb_8: '1년 이상'});
            }}
          >
            1년 이상
          </LongLine>
          <LongLine
            onClick={e => {
              setSignup({...signup, mb_8: '무관'});
            }}
          >
            무관
          </LongLine>
        </Styled.InputAlign>
        <Styled.AbsoluteColBtn onClick={processSignup}>
          완료
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro8;
