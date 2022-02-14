import styled from 'styled-components';
import BaseScreen from '../BaseScreen';
import {LongBtn} from '../../styles/BtnStyled';
import {Common} from '../../styles/InputStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const SearchMento1 = () => {
  return (
    <BaseScreen>
      <TextAlign>
        <p>관심있는</p>
        <p>운동분야를 선택해주세요.</p>
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
      <InputAlign>
        <Common placeholder="기타(별도 입력 해주세요.)" />
      </InputAlign>
      <ColoredBtn>
        <LinkStyle to="/search-mento/2">다음</LinkStyle>
      </ColoredBtn>
    </BaseScreen>
  );
};

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
const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 130vw;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  button {
    margin-right: 0.6667rem;
    margin-bottom: 0.6667rem;
  }
`;
const DisplayNone = styled(LongBtn)`
  background-color: inherit;
`;
const InputAlign = styled.div`
  margin-top: 0.4167rem;
  margin-bottom: 18rem;
`;

export default SearchMento1;
