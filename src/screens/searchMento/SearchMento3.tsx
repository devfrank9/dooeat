import styled from 'styled-components';
import BaseScreen from '../BaseScreen';
import {Select} from '../../styles/SelectStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const SearchMento3 = () => {
  return (
    <BaseScreen>
      <TextAlign>
        <p>회원님의</p>
        <p>운동습관을 알려주세요!</p>
      </TextAlign>
      <SelectAlign>
        <SelcetTextAlign>
          <p>1.1주일 동안 격렬한 활동한 날은 며칠인가요?</p>
          <p>(예: 달리기,자전거,에어로빅 등)</p>
          <IndexBtnAlign>
            <SelectBoxAlign>
              <Select>
                <option value="">1일</option>
              </Select>
            </SelectBoxAlign>
          </IndexBtnAlign>
        </SelcetTextAlign>
        <SelcetTextAlign>
          <p>
            2.1주일 동안 평소보다 숨이 조금 더 차게 만드는 정도의 활동을 시행한
            날은 며칠인가요?
          </p>
          <IndexBtnAlign>
            <SelectBoxAlign>
              <Select>
                <option value="">1일</option>
              </Select>
            </SelectBoxAlign>
          </IndexBtnAlign>
        </SelcetTextAlign>
        <SelcetTextAlign>
          <p>
            3.1주일 동안 하루 총 30분 이상 걸은 날은 며칠인가요? (출퇴근 시간
            포함)
          </p>
          <IndexBtnAlign>
            <SelectBoxAlign>
              <Select>
                <option value="">1일</option>
              </Select>
            </SelectBoxAlign>
          </IndexBtnAlign>
        </SelcetTextAlign>
        <BtnAlign>
          <ColoredBtn>
            <LinkStyle to="/search-mento/4">다음</LinkStyle>
          </ColoredBtn>
        </BtnAlign>
      </SelectAlign>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  margin-top: 6rem;
`;
const SelectBoxAlign = styled.div`
  margin-top: 1.3333rem;
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

export default SearchMento3;
