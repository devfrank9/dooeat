// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import * as Styled from '../../styles/joinPro/styled';
import {LongLine} from '../../styles/BtnStyled';
import {TextArea} from '../../styles/InputStyled';

const JoinPro3 = () => {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={3} />
        <Styled.TextAlign2>
          <p>전문가님의</p>
          <p>직업을 선택해주세요.</p>
        </Styled.TextAlign2>
        <Styled.JobAlign>
          <LongLine>헬스 트레이너</LongLine>
          <LongLine>요가 강사</LongLine>
          <LongLine>필라테스 강사</LongLine>
          <LongLine>기타(별도입력)</LongLine>
        </Styled.JobAlign>
        <TextArea placeholder="내용을 입력해주세요." />
        <Styled.AbsoluteColBtn onClick={() => navigate('/join-pro/4')}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro3;
