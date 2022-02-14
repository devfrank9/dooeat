// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {ColoredBtn, LongLine} from '../../styles/BtnStyled';
import {TextArea} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinPro3 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={3} />
      <TextAlign>
        <p>전문가님의</p>
        <p>직업을 선택해주세요.</p>
      </TextAlign>
      <JobAlign>
        <LongLine>헬스 트레이너</LongLine>
        <LongLine>요가 강사</LongLine>
        <LongLine>필라테스 강사</LongLine>
        <LongLine>기타(별도입력)</LongLine>
        <TextArea placeholder="내용을 입력해주세요." />
      </JobAlign>
      <BtnAlign>
        <ColoredBtn>
          <LinkStyle to="/join-pro/4">다음</LinkStyle>
        </ColoredBtn>
      </BtnAlign>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  margin-top: 9rem;
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
  width: 100vw;
  margin-top: 3.4167rem;
  margin-bottom: 2.5rem;
  p {
    font-size: 1.8333rem;
    margin: 0;
  }
`;

export default JoinPro3;
