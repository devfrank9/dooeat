import {useNavigate} from 'react-router-dom';
import BaseScreen, {AlignBase} from '../BaseScreen';
import NavProgress from '../../components/NavProgress';
import BmiResult from '../../components/BmiResult';
import * as Styled from '../../styles/joinUser/styled';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {userFormState} from '../../lib/atom';

const JoinUser6 = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userFormState);
  const [result, setResult] = useState('');
  const [statu, setStatu] = useState('');

  useEffect(() => {
    const bmi = (
      userData.mb_2 /
      (userData.mb_3 * 0.01 * (userData.mb_3 * 0.01))
    ).toFixed(2);
    setResult(bmi);
    if (Number(bmi) < 18.5) setStatu('저체중');
    if (Number(bmi) < 23 && Number(bmi) > 18.5) setStatu('정상');
    if (Number(bmi) < 25 && Number(bmi) > 23) setStatu('과체중');
    if (Number(bmi) <= 30 && Number(bmi) > 25) setStatu('경도비만');
    if (Number(bmi) > 30) setStatu('중등비만');
  }, [userData]);

  return (
    <BaseScreen>
      <AlignBase>
        <div
          style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
        >
          <NavProgress pageNumber={6} />
          <Styled.BmiSubject>BMI 계산 결과</Styled.BmiSubject>
          <BmiResult result={result} statu={statu} />
          <div style={{height: 40}} />
          <Styled.ColoredBtn onClick={() => navigate('/join-user/7')}>
            다음
          </Styled.ColoredBtn>
          <div style={{height: 113}} />
        </div>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser6;
