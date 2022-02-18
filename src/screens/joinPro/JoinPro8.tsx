// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {LongLine} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {AbsoluteColBtn} from './JoinPro1';

const JoinPro8 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={8} />
        <TextAlign>
          <p>전문가님이 원하는</p>
          <p>코칭 기간을 선택해주세요.</p>
        </TextAlign>
        <InputAlign>
          <LongLine>1개월 미만</LongLine>
          <LongLine>1~6개월</LongLine>
          <LongLine>6개월~12개월</LongLine>
          <LongLine>1년 이상</LongLine>
          <LongLine>무관</LongLine>
        </InputAlign>
        <AbsoluteColBtn>
          <LinkStyle to="/pro">완료</LinkStyle>
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
  margin-bottom: 40px;
`;

export default JoinPro8;
