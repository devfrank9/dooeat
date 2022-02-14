// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {Select} from '../../styles/SelectStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinPro5 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={5} />
      <TextAlign>
        <p>전문가님의</p>
        <p>활동 지역은 어디인가요?</p>
      </TextAlign>
      <InputAlign>
        <Select>
          <option>광역시도</option>
        </Select>
        <Select>
          <option>시군구</option>
        </Select>
      </InputAlign>
      <BtnAlign>
        <ColoredBtn>
          <LinkStyle to="/join-pro/6">다음</LinkStyle>
        </ColoredBtn>
      </BtnAlign>
    </BaseScreen>
  );
};

const BtnAlign = styled.div`
  margin-top: 25rem;
`;
const InputAlign = styled.div`
  select {
    margin-bottom: 1rem;
  }
`;
const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  margin-top: 3.4167rem;
  margin-bottom: 2.5rem;
  p {
    font-size: 1.8333rem;
    margin: 0;
  }
`;

export default JoinPro5;
