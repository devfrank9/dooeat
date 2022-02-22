import styled from 'styled-components';
import BaseScreen, {AlignBase} from '../BaseScreen';

import Rectengle from './Rectengle';
import {WaterBlock} from '../../components/WaterBlock';
import {StatusBar} from '../../components/StatusBar';
import {SelectDate} from '../../components/SelectDate';
import {Navigation} from '../../components/Navigation';
import {Link} from 'react-router-dom';

const mealMain = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar Subject="오늘" Img="/image/myInfo.png" />
        <div style={{height: '110px'}}></div>
        <SelectDate />
        <Subject>식단 입력</Subject>
        <div
          style={{
            display: 'block',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '100%',
            height: '30%',
          }}
        >
          <FileAlign>
            <Rectengle />
            <Rectengle />
            <Rectengle />
            <Preview to="/user/meal/edit">
              <div>점심</div>
              <img src="/image/smile.png" alt="" />
            </Preview>
          </FileAlign>
        </div>
        <div style={{height: '32px'}} />
        <Subject>하루 물 섭취 권장량 2L</Subject>
        <WaterBlock />
        <div style={{flex: 1}}></div>
        <div style={{height: '135px'}} />
        <Navigation />
      </AlignBase>
    </BaseScreen>
  );
};
const FileAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    margin-bottom: 12px;
  }
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 32px;
  margin-bottom: 12px;
`;
const Preview = styled(Link)`
  position: relative;
  display: block;
  min-width: 150px;
  width: 47.022%;
  padding-bottom: 47.022%;
  border: 1px solid ${props => props.theme.btnColor2};
  border-radius: 10px;
  background: url('/image/321.png') no-repeat 50% 50%;
  background-size: cover;
  div {
    position: absolute;
    width: 68px;
    height: 32px;
    border-radius: 16px;
    background-color: rgb(51, 51, 51, 0.6);
    left: 12px;
    top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${prop => prop.theme.fontColor3};
    font-size: 15px;
    font-weight: 300;
  }
  img {
    position: absolute;
    width: 32px;
    height: 32px;
    right: 8px;
    bottom: 8px;
  }
`;

export default mealMain;
