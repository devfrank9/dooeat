import BaseScreen, {AlignBase} from '../BaseScreen';
import styled from 'styled-components';
import {ShortBtn, MiddleBtn, LongBtn} from '../../styles/BtnStyled';
import {TextArea} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {BtnFix} from './SearchMento1';

const SearchMento2 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <div
          style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
        >
          <TextAlign>
            <p>회원님의</p>
            <div style={{display: 'flex'}}>
              <p style={{fontWeight: '500'}}>식습관</p>을 알려주세요!
            </div>
          </TextAlign>
          <Subject>1. 하루 몇 끼를 드시나요?</Subject>
          <BtnAlign>
            <MiddleBtn>1끼</MiddleBtn>
            <MiddleBtn>2끼</MiddleBtn>
            <MiddleBtn>3끼</MiddleBtn>
            <MiddleBtn>4끼 이상</MiddleBtn>
          </BtnAlign>
          <Subject>2. 평소에 어떤 맛을 선호 하시나요?</Subject>
          <BtnAlign>
            <ShortBtn>아침</ShortBtn>
            <ShortBtn>점심</ShortBtn>
            <ShortBtn>저녁</ShortBtn>
            <ShortBtn>간식</ShortBtn>
            <ShortBtn>야식</ShortBtn>
          </BtnAlign>
          <Subject>3. 한 끼 식사량이 얼마나 되시나요?</Subject>
          <BtnAlign>
            <LongBtn>반그릇</LongBtn>
            <LongBtn>한그릇</LongBtn>
            <LongBtn>두그릇 이상</LongBtn>
          </BtnAlign>
          <Subject>4. 특이사항이 있다면 알려주세요!</Subject>
          <TextArea placeholder="내용을 입력해주세요" />
          <BtnFix>
            <LinkStyle to="/search-mento/3">다음</LinkStyle>
          </BtnFix>
        </div>
      </AlignBase>
    </BaseScreen>
  );
};

const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
  button {
  }
`;
export const Subject = styled.p`
  margin: 0 1px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 13px;
`;
export const TextAlign = styled.div`
  font-size: 22px;
  margin: 0 10px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-bottom: 40px;
  margin-top: 80px;
`;

export default SearchMento2;
