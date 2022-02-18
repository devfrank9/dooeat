// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import BmiResult2 from '../../components/BmiResult2';
// Styles
import {UnColoredBtn, ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle, LinkStyle2} from '../../styles/LinkStyled';

const JoinUser8 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={8} />
        <div style={{position: 'relative', width: '100%'}}>
          <p style={{fontSize: '24px', textAlign: 'center', fontWeight: 400}}>
            닉네임 님의 목표,
          </p>
          <Inline>
            <UnderLine>함께 이뤄드릴께요!</UnderLine>
          </Inline>
        </div>
        <BmiResult2 />
        <Arrow>
          <img src="/image/Icon awesome-arrow-down.png" alt="" />
        </Arrow>
        <BmiResult2 />
        <TextAlign>
          <p>총 감량 목표</p>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Label>kg</Label>
            <KgInput placeholder="입력해주세요." type="text" value={7} />
          </div>
        </TextAlign>
        <LinkStyle to="/search-mento/1">
          <ColoredBtn>동네 운동 멘토 찾기</ColoredBtn>
        </LinkStyle>
        <div style={{height: '12px'}} />
        <LinkStyle2 to="/user/meal">
          <UnColoredBtn>아니오, 괜찮습니다!</UnColoredBtn>
        </LinkStyle2>
        <div style={{height: '38px'}} />
      </AlignBase>
    </BaseScreen>
  );
};
const Inline = styled.div`
  display: flex;
  justify-content: center;
`;
const Label = styled.label`
  position: absolute;
  right: 11.4px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
`;
const KgInput = styled.input`
  width: 91.5px;
  font-size: 30px;
  border: none;
  border-bottom: 1px solid rgb(239, 239, 239);
  padding-right: 20px;
  text-align: center;
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
const TextAlign = styled.div`
  display: flex;
  color: ${prop => prop.theme.mainColor};
  font-size: 20px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
  margin-bottom: 50px;
  p:nth-child(2) {
    font-size: 30px;
    color: ${props => props.theme.fontColor1};
    margin: 0 18px;
  }
  p:nth-child(3) {
    font-size: 16px;
  }
`;
const UnderLine = styled.p`
  text-align: center;
  font-size: 24px;
  position: relative;
  font-weight: 500;
  &::after {
    border-radius: 12px;
    content: '';
    width: 100%;
    height: 12px;
    background: ${props => props.theme.pointColor2};
    position: absolute;
    bottom: 0.1rem;
    left: 0;
    z-index: -1;
  }
  margin-bottom: 30px;
`;
const Arrow = styled.div`
  margin: 44px;
  text-align: center;
  img {
    width: 30.7px;
    height: 31.5px;
  }
`;

export default JoinUser8;
