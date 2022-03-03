// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import BmiResult2 from '../../components/BmiResult2';
// Styles
import * as Styled from '../../styles/joinUser/styled';
import {useEffect, useState} from 'react';
import {useRecoilState, useResetRecoilState, useSetRecoilState} from 'recoil';
import {userFormState, __session} from '../../lib/atom';
import {useMutationForSetMember} from '../../lib/GQL/CommunicationMap';

const JoinUser8 = () => {
  const [commSetMember] = useMutationForSetMember();
  const setSession = useSetRecoilState(__session);

  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userFormState);
  const [result, setResult] = useState('');
  const [result2, setResult2] = useState('');
  const [statu, setStatu] = useState('');
  const [statu2, setStatu2] = useState('');
  const reset = useResetRecoilState(userFormState);

  const processSignup = () => {
    commSetMember({variables: userData}).then(data => {
      if (data.data?.setMember) {
        setSession(data.data.setMember);
        alert('회원가입을 환영합니다');
      } else {
        alert('회원가입 실패');
        return;
      }
    });
  };

  useEffect(() => {
    // @ts-ignore
    const bmi = (
      userData.mb_2 /
      (userData.mb_3 * 0.01 * (userData.mb_3 * 0.01))
    ).toFixed(2);
    setResult(bmi);

    const bmi2 = (
      userData.mb_4 /
      (userData.mb_3 * 0.01 * (userData.mb_3 * 0.01))
    ).toFixed(2);
    setResult2(bmi2);

    if (Number(bmi) < 18.5) setStatu('저체중');
    if (Number(bmi) < 23 && Number(bmi) > 18.5) setStatu('정상');
    if (Number(bmi) < 25 && Number(bmi) > 23) setStatu('과체중');
    if (Number(bmi) <= 30 && Number(bmi) > 25) setStatu('경도비만');
    if (Number(bmi) > 30) setStatu('중등비만');
    if (Number(bmi2) < 18.5) setStatu2('저체중');
    if (Number(bmi2) < 23 && Number(bmi2) > 18.5) setStatu2('정상');
    if (Number(bmi2) < 25 && Number(bmi2) > 23) setStatu2('과체중');
    if (Number(bmi2) <= 30 && Number(bmi2) > 25) setStatu2('경도비만');
    if (Number(bmi2) > 30) setStatu2('중등비만');
  }, [userData]);

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={8} />
        <Styled.GoalFirstSubject>
          <p>{userData.mb_nick} 님의 목표,</p>
          <Styled.Inline>
            <Styled.UnderLine>함께 이뤄드릴께요!</Styled.UnderLine>
          </Styled.Inline>
        </Styled.GoalFirstSubject>
        <BmiResult2
          HeaderText="현재 체중"
          HeaderColor="black"
          gram={userData.mb_2}
          result={result}
          text="현재"
          statu={statu}
        />
        <Styled.Arrow>
          <img src="/image/Icon awesome-arrow-down.png" alt="" />
        </Styled.Arrow>
        <BmiResult2
          HeaderText="목표 체중"
          HeaderColor="rgb(239,144,167)"
          gram={userData.mb_4}
          result={result2}
          text="목표"
          statu={statu2}
        />
        <Styled.GoalTextAlign>
          <p>총 감량 목표</p>
          <Styled.DietGoalInput>
            <Styled.DietGoalLabel>kg</Styled.DietGoalLabel>
            <Styled.DietGoalKgInput
              type="text"
              value={userData.mb_2 - userData.mb_4}
            />
          </Styled.DietGoalInput>
        </Styled.GoalTextAlign>
        <Styled.ColoredBtn
          onClick={() => {
            processSignup();
            reset();
            navigate('/search-mento/1');
          }}
        >
          동네 운동 멘토 찾기
        </Styled.ColoredBtn>
        <div style={{height: '12px'}} />
        <Styled.UnColoredBtn
          onClick={() => {
            processSignup();
            reset();
            navigate('/user/meal');
          }}
        >
          아니오, 괜찮습니다!
        </Styled.UnColoredBtn>
        <div style={{height: '38px'}} />
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser8;
