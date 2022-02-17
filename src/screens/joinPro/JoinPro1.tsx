// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Agreement from '../../components/Agreement';
// Styles
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinPro1 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={1} />
        <TextAlign>
          <p>전문가님의</p>
          <p>정확한 정보가 필요합니다.</p>
        </TextAlign>
        <Agreement />
        <AbsoluteColBtn>
          <LinkStyle to="/join-pro/2">휴대폰 본인 확인</LinkStyle>
        </AbsoluteColBtn>
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
  margin-top: 30px;
  margin-bottom: 40px;
`;
export const AbsoluteColBtn = styled(ColoredBtn)`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  width: 85%;
  max-width: 480px;
`;

export default JoinPro1;
