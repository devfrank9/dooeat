// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Agreement from '../../components/Agreement';
// Styles
import * as Styled from '../../styles/joinPro/styled';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {userFormState} from '../../lib/atom';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';

const JoinPro1 = () => {
  const [userData, setUserData] = useRecoilState(userFormState);
  const [signup, setSignup] = useState<RequestSetMember>({});
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const processSignup = () => {
    setSignup({...signup, mb_level: 3});
    setUserData(signup);
  };

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={1} />
        <Styled.TextAlign>
          <p>전문가님의</p>
          <p>정확한 정보가 필요합니다.</p>
        </Styled.TextAlign>
        <Agreement checked={handleOnChange} />
        <Styled.AbsoluteColBtn
          onClick={() => {
            if (isChecked) return;
            else {
              processSignup();
              if (signup.mb_level === 3) navigate('/join-pro/2');
            }
          }}
        >
          휴대폰 본인 확인
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro1;
