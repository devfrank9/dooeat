// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {LongLine} from '../../styles/BtnStyled';
import {TextArea} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {AbsoluteColBtn} from './JoinPro1';

const JoinPro3 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={3} />
        <TextAlign>
          <p>전문가님의</p>
          <p>직업을 선택해주세요.</p>
        </TextAlign>
        <InputAlign>
          <LongLine>헬스 트레이너</LongLine>
          <LongLine>요가 강사</LongLine>
          <LongLine>필라테스 강사</LongLine>
          <LongLine>기타(별도입력)</LongLine>
        </InputAlign>
        <TextArea placeholder="내용을 입력해주세요." />
        <AbsoluteColBtn>
          <LinkStyle to="/join-pro/4">다음</LinkStyle>
        </AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};
const InputAlign = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 10px;
  }
`;

const TextAlign = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default JoinPro3;
