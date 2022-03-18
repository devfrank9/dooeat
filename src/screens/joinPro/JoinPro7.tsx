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

  const arr: string[] = [
    '1개월 미만',
    '1~6개월',
    '6개월~12개월',
    '1년 이상',
    '무관',
  ];
  const [select, setSelect] = useState<string[]>([]);

  const btnRender = () => {
    return arr.map((item, index) => (
      <LongLine
        key={index}
        onClick={() => {
          !select.includes(item)
            ? setSelect(select => [...select, item])
            : setSelect(select.filter(button => button !== item));
        }}
        isActive={select.includes(item) ? true : false}
      >
        {item}
      </LongLine>
    ));
  };

  const processSignup = () => {
    Object.assign(signup, userData);
    setUserData(signup);
    commSetMember({variables: userData}).then(data => {
      if (data.data?.setMember) {
        setSession(data.data.setMember);
        alert('회원가입을 환영합니다');
        navigate('/pro/profile');
        reset();
      } else {
        alert('회원가입 실패');
        navigate('/');
        reset();
      }
    });
  };

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={7} />
        <Styled.TextAlign3>
          <p>전문가님이 원하는</p>
          <p>코칭 기간을 선택해주세요.</p>
        </Styled.TextAlign3>
        <Styled.InputAlign>{btnRender()}</Styled.InputAlign>
        <Styled.AbsoluteColBtn onClick={processSignup}>
          완료
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro8;
