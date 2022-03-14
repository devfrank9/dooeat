// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Footer from '../../components/Footer';
// Styles
import {LongBtn} from '../../styles/BtnStyled';
import {useNavigate} from 'react-router-dom';
import * as Styled from '../../styles/joinUser/styled';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';
import {useState} from 'react';
import {useRecoilState} from 'recoil';
import {userFormState} from '../../lib/atom';

const JoinUser3 = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [userData, setUserData] = useRecoilState(userFormState);

  const processSignup = () => {
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-user/4');
  };
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={3} />
        <Styled.TextAlign>
          <p>회원님의</p>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: '500'}}>성별과 나이</p>를 입력해주세요.
          </div>
        </Styled.TextAlign>
        <div style={{height: 41}} />
        <Styled.Subject>성별</Styled.Subject>
        <BtnAlign>
          <LongBtn
            style={{fontFamily: 'Noto Sans KR'}}
            onClick={e => {
              setSignup({...signup, mb_sex: 'W'});
            }}
            isActive={signup.mb_sex === 'W' ? true : false}
          >
            여자
          </LongBtn>
          <LongBtn
            style={{fontFamily: 'Noto Sans KR'}}
            onClick={e => {
              setSignup({...signup, mb_sex: 'M'});
            }}
            isActive={signup.mb_sex === 'M' ? true : false}
          >
            남자
          </LongBtn>
        </BtnAlign>
        <div style={{height: '30px'}} />
        <Styled.Subject>나이</Styled.Subject>
        <div style={{height: '10px'}} />
        <div style={{position: 'relative'}}>
          <Styled.Age>세</Styled.Age>
          <Styled.AgeInput
            placeholder="나이를 입력해주세요."
            defaultValue={signup.mb_1 ?? ''}
            onChange={e => {
              setSignup({...signup, mb_1: e.target.value});
            }}
          />
        </div>
        <div style={{flex: 1}} />
        <Styled.AbsoluteUnColBtn onClick={() => navigate('/join-user/4')}>
          건너뛰기
        </Styled.AbsoluteUnColBtn>
        <div style={{height: '12px'}} />
        <Styled.AbsoluteColBtn2 onClick={processSignup}>
          다음
        </Styled.AbsoluteColBtn2>
        <Styled.FooterAlign>
          <Footer />
        </Styled.FooterAlign>
      </AlignBase>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  display: flex;
  margin: 0 1px;
  button {
    margin-top: 10px;
    margin-right: 12px;
  }
`;

export default JoinUser3;
