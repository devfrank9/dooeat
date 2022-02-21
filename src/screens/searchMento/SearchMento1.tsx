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
        <TextAlign>
          <p>관심있는</p>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: '500'}}>운동분야</p>를 선택해주세요.
          </div>
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
        <BtnFix>
          <LinkStyle to="/search-mento/2">다음</LinkStyle>
        </BtnFix>
      </AlignBase>
    </BaseScreen>
  );
};
export const BtnFix = styled(ColoredBtn)`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  width: 85%;
  max-width: 480px;
`;
const TextAlign = styled.div`
  font-size: 22px;
  margin: 0 10px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 151px;
`;
const BtnAlign = styled.div`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
  button {
    margin-bottom: 8px;
  }
`;
const DisplayNone = styled(LongBtn)`
  background-color: inherit;
`;
const InputAlign = styled.div`
  margin-top: 13px;
`;

export default SearchMento1;
