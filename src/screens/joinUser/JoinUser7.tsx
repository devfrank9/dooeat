// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import * as Styled from '../../styles/joinUser/styled';
import {useState} from 'react';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';
import {useRecoilState} from 'recoil';
import {userFormState} from '../../lib/atom';

const JoinUser7 = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [userData, setUserData] = useRecoilState(userFormState);

  const processSignup = () => {
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-user/8');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <div
          style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
        >
          <NavProgress pageNumber={7} />
          <Styled.TextAlign>
            <p>회원님의</p>
            <div style={{display: 'flex'}}>
              <p style={{fontWeight: 500}}>목표 체중</p>
              <p>은 얼마인가요?</p>
            </div>
          </Styled.TextAlign>
          <div style={{flex: 0.9}} />
          <Styled.Scale />
          <div style={{height: '36.9px'}} />
          <Styled.LastText>
            <Styled.KgSubject>
              <p>나의</p>
              <p>목표 체중</p>은
            </Styled.KgSubject>
            <div style={{marginBottom: '14px'}} />
            <Styled.ScaleAlign>
              <div style={{position: 'relative'}}>
                <Styled.KgLabel>kg</Styled.KgLabel>
                <Styled.KgInput
                  placeholder="입력해주세요."
                  type="text"
                  value={signup.mb_4 ?? ''}
                  onChange={e => {
                    setSignup({...signup, mb_4: e.target.value});
                  }}
                />
              </div>
              <p> 입니다.</p>
            </Styled.ScaleAlign>
          </Styled.LastText>
          <div style={{flex: 0.5}} />
          <Styled.ColoredBtn onClick={processSignup}>완료</Styled.ColoredBtn>
          <div style={{height: 113}} />
        </div>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser7;
