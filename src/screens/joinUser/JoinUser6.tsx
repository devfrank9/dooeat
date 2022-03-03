// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import BmiResult from '../../components/BmiResult';
// Styles
import * as Styled from '../../styles/joinUser/styled';
import {useEffect, useState} from 'react';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';
import {useRecoilState} from 'recoil';
import {userFormState} from '../../lib/atom';

const JoinUser6 = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [userData, setUserData] = useRecoilState(userFormState);
  const [result, setResult] = useState('');

  useEffect(() => {
    // @ts-ignore
    const data = JSON.parse(sessionStorage.getItem('recoil-persist'));
    const kg = data.userFormState.mb_3;
    const cm = data.userFormState.mb_2;
    const bmi = (kg / (cm * 0.01 * (cm * 0.01))).toFixed(2);
    setResult(bmi);
  }, []);

  const processSignup = () => {
    setSignup({...signup, mb_5: result});
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-user/7');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <div
          style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
        >
          <NavProgress pageNumber={6} />
          <Styled.BmiSubject>BMI 계산 결과</Styled.BmiSubject>
          <BmiResult result={result} />
          <div style={{height: 40}} />
          <Styled.ColoredBtn onClick={processSignup}>다음</Styled.ColoredBtn>
          <div style={{height: 113}} />
        </div>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser6;
