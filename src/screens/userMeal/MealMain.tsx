import BaseScreen, {AlignBase} from '../BaseScreen';
import {StatusBar} from '../../components/StatusBar';
import {Navigation} from '../../components/Navigation';
import DateSelect from '../../components/DateSelect';
import * as Styled from '../../styles/userMeal/styled';
import Rectengle from './Rectengle';
import {useEffect, useState} from 'react';
import {WaterBlock} from '../../components/WaterBlock';
import {FoodData} from '../../Dummy/Dummy';
import {useQueryForAllBoard} from '../../lib/GQL/CommunicationMap';
import {useParams} from 'react-router-dom';
import moment from 'moment';

const MealMain = () => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment.format('YYYY. MM. DD');
  const [water, setWater] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const onClickWater = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(prev => !prev);
    if (isActive === true) setWater(water - 0.25);
    else setWater(water + 0.25);
  };

  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar
          Subject="오늘"
          Img="/image/myInfo.png"
          LinkTo="/user/mypage"
        />
        <div style={{height: '110px'}} />
        <DateSelect
          today={today}
          backClick={() => {
            setMoment(getMoment.clone().subtract(1, 'day'));
          }}
          forClick={() => {
            setMoment(getMoment.clone().add(1, 'day'));
          }}
        />
        <Styled.Subject>식단 입력</Styled.Subject>
        <Styled.RectengleAlign>
          <Styled.FileAlign>
            <Rectengle />
            <Rectengle />
            <Rectengle />
            <Styled.Preview to="/user/meal/edit">
              <div>점심</div>
              <img src="/image/smile.png" alt="" />
            </Styled.Preview>
          </Styled.FileAlign>
        </Styled.RectengleAlign>
        <div style={{height: '32px'}} />
        <Styled.Subject>하루 물 섭취 권장량 2L</Styled.Subject>
        <WaterBlock
          isActive={isActive}
          onClickWater={onClickWater}
          water={water}
        />
        <div style={{height: '135px'}} />
        <Navigation />
      </AlignBase>
    </BaseScreen>
  );
};

export default MealMain;
