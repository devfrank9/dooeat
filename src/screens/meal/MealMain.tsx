import styled from 'styled-components';
import BaseScreen, {AlignBase} from '../BaseScreen';

import {WaterBlock} from '../../components/WaterBlock';
import {StatusBar} from '../../components/StatusBar';
import {SelectDate} from '../../components/SelectDate';
import {FileRectengle, FileInput} from '../../styles/FileInputStyled';
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
        <FileAlign>
          <Link to="/user/meal/edit">
            <FileRectengle>
              <FileInput />
            </FileRectengle>
          </Link>
          <Link to="/user/meal/edit">
            <FileRectengle>
              <FileInput />
            </FileRectengle>
          </Link>
          <Link to="/user/meal/edit">
            <FileRectengle>
              <FileInput />
            </FileRectengle>
          </Link>
          <Link to="/user/meal/edit">
            <Preview>
              <div>점심</div>
              <img src="/image/smile.png" alt="" />
            </Preview>
          </Link>
        </FileAlign>
        <Subject>하루 물 섭취 권장량 2L</Subject>
        <WaterBlock />
        <Navigation />
      </AlignBase>
    </BaseScreen>
  );
};
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 32px;
  margin-bottom: 12px;
`;
const FileAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  label {
    margin-bottom: 18px;
  }
`;
const Preview = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 150px;
  height: 150px;
  border: 1px solid ${props => props.theme.btnColor2};
  border-radius: 10px;
  background: url('/image/321.png') no-repeat 50% 50%;
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
    src: url('');
    right: 8px;
    bottom: 8px;
  }
`;

export default mealMain;
