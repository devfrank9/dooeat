import BaseScreen from '../BaseScreen';
import styled from 'styled-components';
import {ShortBtn, MiddleBtn, LongBtn} from '../../styles/BtnStyled';
import {TextArea} from '../../styles/InputStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const SearchMento2 = () => {
  return (
    <BaseScreen>
      <TextAlign>
        <p>회원님의</p>
        <p>식습관을 알려주세요!</p>
      </TextAlign>
      <BtnAlign>
        <BtnAlignIndex>
          <p>1. 하루 몇 끼를 드시나요?</p>
          <IndexBtnAlign>
            <MiddleBtn>1끼</MiddleBtn>
            <MiddleBtn>2끼</MiddleBtn>
            <MiddleBtn>3끼</MiddleBtn>
            <MiddleBtn>4끼 이상</MiddleBtn>
          </IndexBtnAlign>
        </BtnAlignIndex>
        <BtnAlignIndex>
          <p>2. 평소에 어떤 맛을 선호 하시나요?</p>
          <IndexBtnAlign>
            <ShortBtn>아침</ShortBtn>
            <ShortBtn>점심</ShortBtn>
            <ShortBtn>저녁</ShortBtn>
            <ShortBtn>간식</ShortBtn>
            <ShortBtn>야식</ShortBtn>
          </IndexBtnAlign>
        </BtnAlignIndex>
        <BtnAlignIndex>
          <p>3. 한 끼 식사량이 얼마나 되시나요?</p>
          <IndexBtnAlign>
            <LongBtn>반그릇</LongBtn>
            <LongBtn>한그릇</LongBtn>
            <LongBtn>두그릇 이상</LongBtn>
          </IndexBtnAlign>
        </BtnAlignIndex>
        <BtnAlignIndex>
          <p>4. 특이사항이 있다면 알려주세요!</p>
          <IndexBtnAlign>
            <TextArea type="textarea" placeholder="내용을 입력해주세요" />
          </IndexBtnAlign>
        </BtnAlignIndex>
      </BtnAlign>
      <ColoredBtn>
        <LinkStyle to="/search-mento/3">다음</LinkStyle>
      </ColoredBtn>
    </BaseScreen>
  );
};

const TextAlign = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  width: 110vw;
  margin-top: 3.4167rem;
  p {
    font-size: 1.8333rem;
    margin: 0;
  }
`;
const BtnAlign = styled.div`
  display: border;
  margin-top: 3.3333rem;
  p {
    margin-bottom: 1.0833rem;
  }
`;
const BtnAlignIndex = styled.div`
  margin-bottom: 2.5rem;
`;
const IndexBtnAlign = styled.div`
  display: flex;
  width: 110vw;
  button {
    margin-right: 0.6667rem;
  }
`;

export default SearchMento2;
