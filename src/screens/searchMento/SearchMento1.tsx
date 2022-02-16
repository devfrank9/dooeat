import styled from 'styled-components';
import BaseScreen, {AlignBase} from '../BaseScreen';
import {LongBtn} from '../../styles/BtnStyled';
import {Common} from '../../styles/InputStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const SearchMento1 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <div style={{flex: 1.6}} />
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
          <Common placeholder="기타 (별도 입력 해주세요.)" />
        </InputAlign>
        <div style={{flex: 2.8}} />
        <ColoredBtn>
          <LinkStyle to="/search-mento/2">다음</LinkStyle>
        </ColoredBtn>
        <div style={{flex: 0.3}} />
      </AlignBase>
    </BaseScreen>
  );
};
const TextAlign = styled.div`
  font-size: 22px;
  margin: 0 10px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
`;
const BtnAlign = styled.div`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  height: 160px;
  button {
  }
`;
const DisplayNone = styled(LongBtn)`
  background-color: inherit;
`;
const InputAlign = styled.div`
  margin-top: 13px;
`;

export default SearchMento1;
