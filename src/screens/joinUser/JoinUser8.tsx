// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import BmiResult2 from '../../components/BmiResult2';
// Styles
import {UnColoredBtn, ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle, LinkStyle2} from '../../styles/LinkStyled';

const JoinUser8 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={8} />
      <OverFlow>
        <Banner>
          <p>닉네임 님의 목표,</p>
          <p>함께 이뤄드릴께요!</p>
        </Banner>
        <BmiResult2 />
        <Arrow>
          <img src="/image/Icon awesome-arrow-down.png" alt="" />
        </Arrow>
        <BmiResult2 />
        <Goal>
          <p>총 감량 목표</p>
          <p>7</p>
          <p>kg</p>
        </Goal>
        <BtnAlign>
          <ColoredBtn>
            <LinkStyle to="/search-mento/1">동네 운동 멘토 찾기</LinkStyle>
          </ColoredBtn>
          <UnColoredBtn>
            <LinkStyle2 to="/">아니오, 괜찮습니다!</LinkStyle2>
          </UnColoredBtn>
        </BtnAlign>
      </OverFlow>
    </BaseScreen>
  );
};

const BtnAlign = styled.div`
  margin-top: 4.3333rem;
  button:first-child {
    margin-bottom: 1rem;
  }
`;
const Goal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2.5rem;
  margin-top: 4.0833rem;
  p:first-child {
    font-size: 1.6667rem;
    color: ${prop => prop.theme.mainColor};
    margin-right: 1.1667rem;
  }
  p:last-child {
    font-size: 1.3333rem;
    color: ${prop => prop.theme.mainColor};
    margin-left: 1.1667rem;
  }
`;
const Arrow = styled.div`
  margin: 3.6667rem;
  text-align: center;
  img {
    width: 2.6667rem;
    height: 2.6667rem;
  }
`;
const Banner = styled.div`
  text-align: center;
  margin-top: 5.8333rem;
  p {
    font-size: 2rem;
  }
  p:last-child {
    text-decoration: dashed;
  }
`;
const OverFlow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  height: 100%;
`;

export default JoinUser8;
