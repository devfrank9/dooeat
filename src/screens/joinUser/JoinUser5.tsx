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

const JoinUser5 = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [userData, setUserData] = useRecoilState(userFormState);

  const processSignup = () => {
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-user/6');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={5} />
        <Styled.TextAlign>
          <p>회원님의</p>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: '500'}}>현재 체중과 키</p>는 얼마인가요?
          </div>
        </Styled.TextAlign>
        <div style={{height: '70px'}} />
        <Styled.Subject>체중</Styled.Subject>
        <div style={{height: '10px'}} />
        <div style={{position: 'relative'}}>
          <Styled.Label>kg</Styled.Label>
          <Styled.Input
            placeholder="kg단위로 입력해주세요."
            defaultValue={signup.mb_2 ?? ''}
            onChange={e => {
              setSignup({...signup, mb_2: e.target.value});
            }}
          />
        </div>
        <div style={{height: '30px'}} />
        <Styled.Subject>키</Styled.Subject>
        <div style={{height: '10px'}} />
        <div style={{position: 'relative'}}>
          <Styled.Label>cm</Styled.Label>
          <Styled.Input
            placeholder="cm단위로 입력해주세요."
            defaultValue={signup.mb_3 ?? ''}
            onChange={e => {
              setSignup({...signup, mb_3: e.target.value});
            }}
          />
        </div>
        <div style={{flex: 1.7}} />
        <Styled.AbsoluteColBtn2 onClick={processSignup}>
          다음
        </Styled.AbsoluteColBtn2>
        <div style={{height: 113}} />
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser5;
