// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {LongBtn} from '../../styles/BtnStyled';
import {Common} from '../../styles/InputStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinPro7 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={7} />
      <TextAlign>
        <p>전문가님의 자신 있는</p>
        <p>코칭 분야를 선택해주세요.</p>
      </TextAlign>
      <BtnAlign>
        <LongBtn>헬스</LongBtn>
        <LongBtn>요가</LongBtn>
        <LongBtn>필라테스</LongBtn>
        <LongBtn>크로스핏</LongBtn>
        <LongBtn>복싱</LongBtn>
        <LongBtn>주짓수</LongBtn>
        <LongBtn>수영</LongBtn>
        <LongBtn>기타</LongBtn>
        <DisplayNone />
        <Common placeholder="기타 (별도 입력 해주세요.)" />
      </BtnAlign>
      <BtnAlign2>
        <ColoredBtn>
          <LinkStyle to="/join-pro/8">다음</LinkStyle>
        </ColoredBtn>
      </BtnAlign2>
    </BaseScreen>
  );
};

const BtnAlign2 = styled.div`
  margin-top: 15rem;
`;
const DisplayNone = styled(LongBtn)`
  background-color: inherit;
`;
const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  button {
    margin-right: 0.6667rem;
    margin-bottom: 0.6667rem;
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

export default JoinPro7;
