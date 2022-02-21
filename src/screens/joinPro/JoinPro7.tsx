// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {LongBtn} from '../../styles/BtnStyled';
import {Common} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {AbsoluteColBtn} from './JoinPro1';

const JoinPro7 = () => {
  return (
    <BaseScreen>
      <AlignBase>
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
        </BtnAlign>
        <div style={{height: '9px'}} />
        <Common placeholder="기타 (별도 입력 해주세요.)" />
        <AbsoluteColBtn>
          <LinkStyle to="/join-pro/8">다음</LinkStyle>
        </AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  button {
    margin-bottom: 8px;
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
const DisplayNone = styled(LongBtn)`
  background-color: inherit;
`;

export default JoinPro7;
