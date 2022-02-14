import styled from 'styled-components';
import BaseScreen from '../BaseScreen';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const SearchMento4 = () => {
  return (
    <BaseScreen>
      <TextAlign>
        <p>회원님의</p>
        <p>목표 기간을 설정해주세요.</p>
      </TextAlign>
      <SelectAlign>
        <SelcetTextAlign>
          <p>1. 시작일</p>
          <IndexBtnAlign>
            <SelectBoxAlign>
              <DateLabel htmlFor="date">
                날짜선택
                <DateInput type="date" id="date" />
              </DateLabel>
            </SelectBoxAlign>
          </IndexBtnAlign>
        </SelcetTextAlign>
        <SelcetTextAlign>
          <p>2. 종료일</p>
          <IndexBtnAlign>
            <SelectBoxAlign>
              <DateLabel htmlFor="date">
                날짜선택
                <DateInput type="date" id="date" />
              </DateLabel>
            </SelectBoxAlign>
          </IndexBtnAlign>
        </SelcetTextAlign>
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
        <ColoredBtn>
          <LinkStyle to="/">전문가 추천 받으러 가기</LinkStyle>
        </ColoredBtn>
      </SelectAlign>
    </BaseScreen>
  );
};

const Inline = styled.div`
  display: flex;
`;
const UnderLine = styled.p`
  font-size: 1.5rem;
  position: relative;
  display: inline;
  &::after {
    content: '';
    width: 100%;
    height: 0.8rem;
    margin-bottom: 0.1rem;
    background: rgb(252, 216, 224);
    position: absolute;
    display: inline-block;
    bottom: 0.1rem;
    left: 0;
    z-index: -1;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 26.5833rem;
  height: 11.9167rem;
  border: 0.1rem solid rgb(252, 216, 224);
  border-radius: 0.5rem;
  font-size: 1.5rem;
  margin-bottom: 4rem;
`;
const DateInput = styled.input`
  display: none;
`;
const DateLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26.5833rem;
  height: 4rem;
  border: 0.1rem solid ${props => props.theme.mainColor};
  border-radius: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  background-color: rgb(255, 249, 249);
  color: ${props => props.theme.mainColor};
  font-size: 1.25rem;
`;
const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 110vw;
  margin-top: 3.4167rem;
  p {
    font-size: 1.8333rem;
    margin: 0;
  }
`;
const SelectAlign = styled.div`
  display: border;
  margin-top: 3.3333rem;
  p {
    margin: 0;
  }
`;
const SelcetTextAlign = styled.div`
  margin-bottom: 2.5rem;
  font-size: 1.3333rem;
  p:nth-child(1) {
    font-weight: bold;
  }
`;
const IndexBtnAlign = styled.div`
  display: flex;
  button {
    margin-right: 0.6667rem;
  }
`;
const SelectBoxAlign = styled.div`
  margin-top: 1.3333rem;
`;

export default SearchMento4;
