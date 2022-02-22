import styled from 'styled-components';
import BaseScreen, {AlignBase} from '../BaseScreen';
import {LinkStyle} from '../../styles/LinkStyled';
import {Subject, TextAlign} from './SearchMento2';
import {BtnFix} from './SearchMento1';

const SearchMento4 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <div
          style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
        >
          <TextAlign>
            <p>회원님의</p>
            <div style={{display: 'flex'}}>
              <p style={{fontWeight: '500'}}>목표 기간</p>을 설정해주세요.
            </div>
          </TextAlign>
          <Subject>
            <p>1. 시작일</p>
          </Subject>
          <DateLabel htmlFor="date">
            날짜선택
            <DateInput type="date" id="date" />
          </DateLabel>
          <Subject>
            <p>2. 종료일</p>
          </Subject>
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
          <BtnFix>
            <LinkStyle to="/user/pro">전문가 추천 받으러 가기</LinkStyle>
          </BtnFix>
        </div>
      </AlignBase>
    </BaseScreen>
  );
};
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
const Inline = styled.div`
  display: flex;
`;
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
  margin-top: 20px;
  min-width: 311px;
  width: 83%;
`;
const DateInput = styled.input`
  display: none;
`;

export default SearchMento4;
