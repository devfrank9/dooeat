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

  const arr: string[] = [
    '헬스',
    '요가',
    '필라테스',
    '크로스핏',
    '복싱',
    '주짓수',
    '수영',
    '기타',
  ];
  const [select, setSelect] = useState<string[]>([]);
  const [etc, setEtc] = useState('');

  const btnRender = () => {
    return arr.map((item, index) => (
      <LongBtn
        key={index}
        onClick={() => {
          !select.includes(item)
            ? setSelect(select => [item])
            : setSelect(select.filter(button => button !== item));
        }}
        isActive={select.includes(item) ? true : false}
      >
        {item}
      </LongBtn>
    ));
  };

  const processSignup = () => {
    signup.mb_7 = select.toString();
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-pro/7');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={6} />
        <Styled.TextAlign3>
          <p>전문가님의 자신 있는</p>
          <p>코칭 분야를 선택해주세요.</p>
        </Styled.TextAlign3>
        <Styled.BtnAlign>
          {btnRender()}
          <Styled.DisplayNone />
        </Styled.BtnAlign>
        <div style={{height: '9px'}} />
        <Common
          placeholder="기타 (별도 입력 해주세요.)"
          //@ts-ignore
          disabled={select.includes('기타') === true ? false : true}
          onChange={e => setEtc(e.target.value)}
        />
        <Styled.AbsoluteColBtn onClick={processSignup}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};
export default JoinPro7;
