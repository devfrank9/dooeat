import styled from 'styled-components';
import Calender from '../../components/Calender';
import {SelectDate} from '../../components/SelectDate';
import {StatusBar2} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const ProManageCal = () => {
  return (
    <BaseScreen>
      <AlignBase style={{backgroundColor: 'rgb(245,245,245)'}}>
        <StatusBar2 Subject="기록 캘린더" />
        <div style={{backgroundColor: 'white', margin: '0 -28px'}}>
          <div style={{height: '110px'}} />
          <Calender />
          <div style={{height: '20px', position: 'relative'}} />
        </div>
        <HealthProgress>
          <div style={{margin: '0 20px'}}>
            <p>이번달 운동 달성률</p>
            <ProgressBorder>
              <Progress />
            </ProgressBorder>
            <p>이번달 식단 달성률</p>
            <ProgressBorder>
              <Progress
                style={{backgroundColor: 'rgb(252,216,224)', width: '60%'}}
              />
            </ProgressBorder>
          </div>
        </HealthProgress>
        <div style={{height: '20px'}} />
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <BoxProgress>
            <p>수강기간 동안</p>
            <IngProgress>
              <span>-5</span>
              <img src="/image/Icon open-arrow-thick-bottom.png" alt="" />
              <span>kg</span>
            </IngProgress>
          </BoxProgress>
          <div style={{width: '15px'}} />
          <BoxProgress>
            <p style={{marginBottom: '12px'}}>앞으로 목표까지</p>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <ForProgress>
                <span>-3</span>
                <span>kg</span>
              </ForProgress>
              <ForProgress>
                <span>-3</span>
                <span>kg</span>
              </ForProgress>
            </div>
          </BoxProgress>
        </div>
        <div style={{height: '95px'}} />
      </AlignBase>
    </BaseScreen>
  );
};
const IngProgress = styled.div`
  text-align: center;
  font-family: roboto;
  line-height: 36px;
  margin-top: 22px;
  position: relative;
  span:first-child {
    font-size: 40px;
    font-weight: 300;
    margin-right: 5px;
  }
  span:last-child {
    font-size: 15px;
    font-weight: 400;
    color: ${prop => prop.theme.mainColor};
  }
  img {
    width: 14px;
    height: 18.7px;
    position: absolute;
    left: 20px;
  }
`;
const ForProgress = styled.div`
  text-align: center;
  font-family: roboto;
  line-height: 36px;
  span:first-child {
    font-size: 25px;
    font-weight: 300;
    margin-right: 5px;
  }
  span:last-child {
    font-size: 16px;
    font-weight: 500;
    color: ${prop => prop.theme.mainColor};
  }
`;
const BoxProgress = styled.div`
  min-width: 152px;
  width: 100%;
  height: 140px;
  background-color: white;
  box-shadow: 0px 3px 6px 0px rgb(0, 0, 0, 0.1);
  border-radius: 12px;
  p {
    margin-top: 20px;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 500;
  }
`;
const Progress = styled.div`
  background-color: ${prop => prop.theme.mainColor};
  text-align: right;
  font-size: 20px;
  border-radius: 16px;
  height: 1rem;
  width: 80%;
`;
const ProgressBorder = styled.div`
  background-color: rgb(245, 245, 245);
  border-radius: 8px;
  height: 1rem;
`;
const HealthProgress = styled.div`
  background-color: white;
  height: 206px;
  margin-top: 28px;
  box-shadow: 0px 3px 6px 0px rgb(0, 0, 0, 0.1);
  border-radius: 12px;
  p {
    font-size: 16px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 12px;
  }
`;
export default ProManageCal;
