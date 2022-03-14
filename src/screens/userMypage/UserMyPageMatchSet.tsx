import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import {ColoredBtn, LongBtn, MiddleBtn, ShortBtn} from '../../styles/BtnStyled';
import {Common, TextArea} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import DropDown from '../../components/JoinSelect';
import BaseScreen, {AlignBase} from '../BaseScreen';

const UserMyPageMatchSet = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="매칭 정보 설정" />
        <div style={{height: '110px'}} />
        <Subject>관심있는 운동분야</Subject>
        <div style={{height: '12px'}} />
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
        <div style={{height: '30px'}} />
        <Subject>식습관</Subject>
        <div style={{height: '12px'}} />
        <CoSubject>1. 하루 몇 끼를 드시나요?</CoSubject>
        <BtnAlign>
          <MiddleBtn>1끼</MiddleBtn>
          <MiddleBtn>2끼</MiddleBtn>
          <MiddleBtn>3끼</MiddleBtn>
          <MiddleBtn>4끼 이상</MiddleBtn>
        </BtnAlign>
        <div style={{height: '12px'}} />
        <CoSubject>2. 평소에 어떤 맛을 선호 하시나요?</CoSubject>
        <BtnAlign>
          <ShortBtn>아침</ShortBtn>
          <ShortBtn>점심</ShortBtn>
          <ShortBtn>저녁</ShortBtn>
          <ShortBtn>간식</ShortBtn>
          <ShortBtn>야식</ShortBtn>
        </BtnAlign>
        <div style={{height: '12px'}} />
        <CoSubject>3. 한 끼 식사량이 얼마나 되시나요?</CoSubject>
        <BtnAlign>
          <LongBtn>반그릇</LongBtn>
          <LongBtn>한그릇</LongBtn>
          <LongBtn>두그릇 이상</LongBtn>
        </BtnAlign>
        <div style={{height: '12px'}} />
        <CoSubject>4. 특이사항이 있다면 알려주세요!</CoSubject>
        <TextArea style={{height: '104px'}} placeholder="내용을 입력해주세요" />
        <div style={{height: '30px'}} />
        <Subject>운동습관</Subject>
        <CoSubject>
          <p>1. 1주일 동안 격렬한 활동한 날은 며칠인가요?</p>
          <p>(예: 달리기,자전거,에어로빅 등)</p>
        </CoSubject>
        <DropDown />
        <div style={{height: '30px'}} />
        <CoSubject>
          2. 1주일 동안 평소보다 숨이 조금 더 차게 만드는 정도의 활동을 시행한
          날은 며칠인가요?
        </CoSubject>
        <DropDown />
        <div style={{height: '30px'}} />
        <CoSubject>
          3. 1주일 동안 하루 총 30분 이상 걸은 날은 며칠인가요? (출퇴근 시간
          포함)
        </CoSubject>
        <DropDown />
        <div style={{height: '30px'}} />
        <Subject>운동 목표 기간</Subject>
        <div style={{height: '12px'}} />
        <CoSubject>
          <p>1. 시작일</p>
        </CoSubject>
        <DateLabel htmlFor="date">
          날짜선택
          <DateInput type="date" id="date" />
        </DateLabel>
        <CoSubject>
          <p>2. 종료일</p>
        </CoSubject>
        <DateLabel htmlFor="date">
          날짜선택
          <DateInput type="date" id="date" />
        </DateLabel>
        <div style={{display: 'flex'}}>
          <TextBox>
            <p>건강한 다이어트를 위한</p>
            <p>적정 감량 속도는</p>
            <Inline>
              <UnderLine>
                <strong>1주일에 0.5~1kg </strong>
              </UnderLine>
              <p> 정도 입니다.</p>
            </Inline>
          </TextBox>
        </div>
        <div style={{height: '30px'}} />
        <ColoredBtn>
          <LinkStyle to="/user/profile">설정 완료</LinkStyle>
        </ColoredBtn>
        <div style={{height: '30px'}} />
      </AlignBase>
    </BaseScreen>
  );
};
const UnderLine = styled.p`
  font-size: 16px;
  position: relative;
  display: inline;
  font-weight: 700;
  &::after {
    content: '';
    width: 100%;
    height: 16px;
    border-radius: 8px;
    background: rgb(252, 228, 234);
    position: absolute;
    display: inline-block;
    bottom: -3px;
    left: 0;
    z-index: -1;
  }
`;
const Inline = styled.div`
  display: flex;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 143px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 300;
  min-width: 311px;
  width: 83%;
`;
const DateLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border: 1px solid ${props => props.theme.mainColor};
  border-radius: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  background-color: ${props => props.theme.pointColor3};
  color: ${props => props.theme.mainColor};
  font-size: 15px;
  margin-bottom: 30px;
`;
const DateInput = styled.input`
  display: none;
`;
const CoSubject = styled.div`
  margin-bottom: 12px;
  font-size: 14px;
`;
const DisplayNone = styled(LongBtn)`
  background-color: inherit;
`;
const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  button {
    margin-bottom: 8px;
  }
`;
const Subject = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export default UserMyPageMatchSet;
