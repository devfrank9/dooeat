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

const JoinPro8 = () => {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={8} />
        <Styled.TextAlign3>
          <p>전문가님이 원하는</p>
          <p>코칭 기간을 선택해주세요.</p>
        </Styled.TextAlign3>
        <Styled.InputAlign>
          <LongLine>1개월 미만</LongLine>
          <LongLine>1~6개월</LongLine>
          <LongLine>6개월~12개월</LongLine>
          <LongLine>1년 이상</LongLine>
          <LongLine>무관</LongLine>
        </Styled.InputAlign>
        <Styled.AbsoluteColBtn onClick={() => navigate('/pro/profile')}>
          완료
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro8;
