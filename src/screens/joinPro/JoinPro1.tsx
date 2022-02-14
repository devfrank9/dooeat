// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Agreement from '../../components/Agreement';
// Styles
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinPro1 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={1} />
      <TextAlign>
        <p>전문가님의</p>
        <p>정확한 정보가 필요합니다.</p>
      </TextAlign>
      <Agreement />
      <BtnAlign>
        <ColoredBtn>
          <LinkStyle to="/join-pro/2">휴대폰 본인 확인</LinkStyle>
        </ColoredBtn>
      </BtnAlign>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  margin-top: 22.25rem;
`;
const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  margin-top: 3.4167rem;
  margin-bottom: 2rem;
  p {
    font-size: 1.8333rem;
    margin: 0;
  }
`;

export default JoinPro1;
