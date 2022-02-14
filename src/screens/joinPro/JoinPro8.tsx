// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {LongLine} from '../../styles/BtnStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinPro8 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={8} />
      <TextAlign>
        <p>전문가님이 원하는</p>
        <p>코칭 기간을 선택해주세요.</p>
      </TextAlign>
      <JobAlign>
        <LongLine>1개월 미만</LongLine>
        <LongLine>1~6개월</LongLine>
        <LongLine>6개월~12개월</LongLine>
        <LongLine>1년 이상</LongLine>
        <LongLine>무관</LongLine>
      </JobAlign>
      <BtnAlign>
        <ColoredBtn>
          <LinkStyle to="/">완료</LinkStyle>
        </ColoredBtn>
      </BtnAlign>
    </BaseScreen>
  );
};

const BtnAlign = styled.div`
  margin-top: 11rem;
`;
const JobAlign = styled.div`
  button {
    margin-bottom: 1rem;
  }
`;
const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 108vw;
  margin-top: 3.4167rem;
  margin-bottom: 2.5rem;
  p {
    font-size: 1.8333rem;
    margin: 0;
  }
`;

export default JoinPro8;
