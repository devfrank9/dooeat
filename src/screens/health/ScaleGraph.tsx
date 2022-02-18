import {useCallback, useState} from 'react';
import styled from 'styled-components';
import {Navigation} from '../../components/Navigation';
import {StatusBar2} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const ScaleGraph = () => {
  const [isActive, setIsActive] = useState(false);
  const onActiveToggle = useCallback(() => {
    setIsActive(prev => !prev);
  }, []);

  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="체중 그래프" />
        <div style={{height: '110px'}} />
        <BtnAlign>
          <Btn>일주일</Btn>
          <Btn>한달</Btn>
          <Btn>3개월</Btn>
          <Btn>1년</Btn>
          <Btn>3년</Btn>
        </BtnAlign>
        <SetDate>22. 04 ~ 22. 10</SetDate>
        <div style={{height: '20px'}} />
        <GraphBtn onClick={onActiveToggle} isActive={isActive}>
          <p>체중</p>
          <p>(kg)</p>
        </GraphBtn>
        <Navigation />
      </AlignBase>
    </BaseScreen>
  );
};
const GraphBtn = styled.div<{isActive: boolean}>`
  position: relative;
  width: 319px;
  height: ${prop => (prop.isActive ? '52px' : '320px')};
  box-shadow: 0rem 0.1rem 0.5rem 0rem rgb(223, 223, 223, 0.8);
  border-radius: 12px;
  p:first-child {
    position: absolute;
    font-size: 16px;
    left: 21px;
    top: 20px;
    font-weight: 600;
  }
  p:last-child {
    position: absolute;
    font-size: 14px;
    left: 50px;
    top: 23px;
    font-weight: 600;
  }
  background: ${prop =>
    prop.isActive
      ? `url("/image/Icon ionic-ios-arrow-down.png") no-repeat 90%`
      : `url("/image/Icon ionic-ios-arrow-down.png") no-repeat 50%`};
`;
const SetDate = styled.div`
  margin-top: 20px;
  display: flex;
  height: 52px;
  align-items: center;
  padding-left: 19px;
  border: 1px solid ${props => props.theme.pointColor2};
  border-radius: 8px;
  background: url('/image/Icon ionic-md-calendar.png') no-repeat 95% 50%;
  box-sizing: border-box;
  background-color: ${props => props.theme.pointColor3};
  color: ${props => props.theme.mainColor};
  font-size: 16px;
  font-family: ${prop => prop.theme.roboto};
  font-weight: 500;
`;
const Btn = styled.button`
  width: 59px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid ${prop => prop.theme.btnColor2};
  background-color: inherit;
  font-size: 15px;
  &:hover {
    background-color: ${props => props.theme.mainColor};
    color: ${prop => prop.theme.fontColor3};
  }
  &:active {
    background-color: ${props => props.theme.mainColor};
    color: ${prop => prop.theme.fontColor3};
  }
`;
const BtnAlign = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default ScaleGraph;
