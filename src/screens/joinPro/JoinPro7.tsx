// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {LongBtn} from '../../styles/BtnStyled';
import {Common} from '../../styles/InputStyled';
import * as Styled from '../../styles/joinPro/styled';
import {useNavigate} from 'react-router-dom';

const JoinPro7 = () => {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={7} />
        <Styled.TextAlign3>
          <p>전문가님의 자신 있는</p>
          <p>코칭 분야를 선택해주세요.</p>
        </Styled.TextAlign3>
        <Styled.BtnAlign>
          <LongBtn>헬스</LongBtn>
          <LongBtn>요가</LongBtn>
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
        <Styled.AbsoluteColBtn onClick={() => navigate('/join-pro/8')}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro7;
