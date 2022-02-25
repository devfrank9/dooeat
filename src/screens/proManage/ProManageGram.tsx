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
              <div style={{display: 'flex', position: 'relative'}}>
                <p>체지방</p>
                <p style={{fontWeight: '500', margin: '0 5px'}}>5kg</p>
                <p>감량</p>
                <UnderLIne style={{width: '95px', left: '-3px'}} />
              </div>
              <div style={{display: 'flex', position: 'relative'}}>
                <p>근육</p>
                <p style={{fontWeight: '500', margin: '0 5px'}}>2kg</p>
                <p>증가 필요</p>
                <UnderLIne />
              </div>
            </TextBox>
          </div>
        </Content>
        <BtnAlign>
          <EditBtn to="edit" />
        </BtnAlign>
      </AlignBase>
    </BaseScreen>
  );
};
const UnderLIne = styled.div`
  width: 83px;
  height: 12px;
  border-radius: 8px;
  background-color: ${prop => prop.theme.pointColor2};
  position: absolute;
  opacity: 0.5;
  left: -7px;
  bottom: -2px;
`;
const BtnAlign = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  width: 100%;
  max-width: 480px;
`;
const EditBtn = styled(Link)`
  width: 66px;
  height: 66px;
  border-radius: 33px;
  background: url('/image/healthEdit.png') no-repeat;
  position: absolute;
  right: 28px;
  bottom: 0;
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
  margin: 0 28px;
  margin-top: 40.5px;
`;
const Content = styled.div`
  background-color: white;
  background-size: cover;
  border-radius: 36px 36px 0 0;
  margin: 0 -28px;
`;
const Tap = styled.div<{isActive: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
