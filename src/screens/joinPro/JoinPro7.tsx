// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {LongBtn} from '../../styles/BtnStyled';
import {Common} from '../../styles/InputStyled';
import * as Styled from '../../styles/joinPro/styled';
import {useNavigate} from 'react-router-dom';
import {useCallback, useState} from 'react';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';
import {useRecoilState} from 'recoil';
import {userFormState} from '../../lib/atom';
import styled from 'styled-components';

const JoinPro7 = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [userData, setUserData] = useRecoilState(userFormState);
  const [isActive, setIsActive] = useState(false);

  const [coach, setCoach] = useState<string[]>([]);

  const toggleTags = (value: string) => {
    let index = coach.indexOf(value);
    let tmpCoach = [...coach];
    if (index === -1) {
      tmpCoach.push(value);
    } else {
      tmpCoach.splice(index, 1);
    }
    setCoach(coach);
  };

  const isInTag = (value: string) => {
    setIsActive(prev => !prev);
    return coach.indexOf(value) > -1;
  };

  const processSignup = () => {
    signup.mb_7 = [...coach];
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-pro/8');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={7} />
        <Styled.TextAlign3>
          <p>전문가님의 자신 있는</p>
          <p>코칭 분야를 선택해주세요.</p>
        </Styled.TextAlign3>
        <Styled.BtnAlign>
          <JobSelectBtn
            onClick={e => {
              toggleTags('헬스');
              isInTag('헬스');
            }}
            isActive={isActive}
          >
            헬스
          </JobSelectBtn>
          <JobSelectBtn
            onClick={e => {
              toggleTags('요가');
              isInTag('요가');
            }}
            isActive={isActive}
          >
            요가
          </JobSelectBtn>
          <LongBtn>필라테스</LongBtn>
          <LongBtn>크로스핏</LongBtn>
          <LongBtn>복싱</LongBtn>
          <LongBtn>주짓수</LongBtn>
          <LongBtn>수영</LongBtn>
          <LongBtn>기타</LongBtn>
          <Styled.DisplayNone />
        </Styled.BtnAlign>
        <div style={{height: '9px'}} />
        <Common placeholder="기타 (별도 입력 해주세요.)" />
        <Styled.AbsoluteColBtn onClick={processSignup}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

const JobSelectBtn = styled(LongBtn)<{isActive: boolean}>`
  background-color: ${prop =>
    prop.isActive ? 'rgb(245, 245, 245)' : 'rgb(239, 144, 167)'};
  color: ${prop => (prop.isActive ? 'black' : 'white')};
`;

export default JoinPro7;
