import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const ProManageGram = () => {
  const [isActive, setIsActive] = useState(false);
  const onActiveToggle = () => setIsActive(prev => !prev);

  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="나의 몸 정보" />
        <div style={{height: '80px'}} />
        <BackImg />
        <HeadAlign>
          <Head>
            <p>1회차</p>
            <p>2021.12.27</p>
          </Head>
          <GramInfo>
            <GramDiv>
              <p>현재 체중</p>
              <p>55</p>
              <p>kg</p>
            </GramDiv>
            <img src="/image/back.png" alt="" />
            <GramDiv>
              <p style={{color: 'rgb(239,144,167)', fontWeight: '700'}}>
                현재 체중
              </p>
              <p style={{fontWeight: '400'}}>55</p>
              <p>kg</p>
            </GramDiv>
          </GramInfo>
        </HeadAlign>
        <Content>
          <Taps>
            <Tap isActive={!isActive} onClick={onActiveToggle}>
              근육
            </Tap>
            <Tap isActive={isActive} onClick={onActiveToggle}>
              체지방
            </Tap>
          </Taps>
          <Graph>그래프 자리</Graph>
          <div style={{display: 'flex', margin: '0 28px'}}>
            <TextBox>
              <p>목표 까지</p>
              <Inline>
                <UnderLine>
                  <strong>1주일에 0.5~1kg </strong>
                </UnderLine>
                <p> 정도 입니다.</p>
              </Inline>
            </TextBox>
          </div>
        </Content>
        <div style={{position: 'relative', maxWidth: '480px', width: '100%'}}>
          <EditBtn to="/user/health/edit" />
        </div>
      </AlignBase>
    </BaseScreen>
  );
};
const EditBtn = styled(Link)`
  position: fixed;
  bottom: 90px;
  background: url('/image/healthEdit.png') no-repeat;
  width: 66px;
  height: 66px;
  border-radius: 33px;
  right: 0;
`;
const Inline = styled.div`
  display: flex;
`;
const UnderLine = styled.p`
  font-size: 16px;
  position: relative;
  display: inline;
  font-weight: 700;
  &::after {
    content: '';
    width: 100%;
    height: 16px;
    border-radius: 8px;
    background: rgb(252, 228, 234);
    position: absolute;
    display: inline-block;
    bottom: -3px;
    left: 0;
    z-index: -1;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 143px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 300;
  margin-top: 20px;
  width: 319px;
  border: 1px solid ${prop => prop.theme.pointColor2};
`;
const Graph = styled.div`
  height: 320px;
  border: 1px solid gray;
`;
const Content = styled.div`
  background-color: white;
  background-size: cover;
  border-radius: 36px 36px 0 0;
  margin: 0 -28px;
`;
const Tap = styled.div<{isActive: boolean}>`
  max-width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid
    ${props =>
      props.isActive ? props.theme.mainColor : props.theme.fontColor2};

  min-width: 187px;

  height: 60px;
  color: ${props =>
    props.isActive ? props.theme.mainColor : props.theme.fontColor2};
`;
const Taps = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  margin: 0 -28px;
`;
const GramDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 65px;
  width: 86px;
  position: relative;
  margin-top: 16px;
  p:first-child {
    font-size: 16px;
    line-height: 24px;
  }
  p:nth-child(2) {
    font-size: 30px;
    line-height: 37px;
    font-family: roboto;
    font-weight: 300;
  }
  p:last-child {
    position: absolute;
    bottom: 10px;
    color: ${prop => prop.theme.mainColor};
    left: 56px;
    font-family: roboto;
  }
`;
const GramInfo = styled.div`
  height: 110px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  div:first-child {
  }
  img {
    width: 24px;
    height: 16px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 42px;
  }
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 66px;
  border-bottom: 1px solid rgb(225, 225, 225);
  margin: 0 20px;
  p:first-child {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 30px;
  }
  p:last-child {
    font-size: 13px;
    line-height: 19px;
    color: ${prop => prop.theme.fontColor2};
    margin-top: 30px;
  }
`;
const HeadAlign = styled.div``;
const BackImg = styled.div`
  position: absolute;
  width: 100%;
  max-width: 480px;
  margin: 0 -28px;
  height: 330px;
  z-index: -6;
  background-color: rgb(245, 245, 245);
  background-size: cover;
  top: 48px;
`;

export default ProManageGram;
