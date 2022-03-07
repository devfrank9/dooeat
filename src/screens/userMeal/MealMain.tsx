import BaseScreen, {AlignBase} from '../BaseScreen';
import {StatusBar} from '../../components/StatusBar';
import {Navigation} from '../../components/Navigation';
import DateSelect from '../../components/DateSelect';
import * as Styled from '../../styles/userMeal/styled';
import {useEffect, useState} from 'react';
import {WaterBlock} from '../../components/WaterBlock';
import moment from 'moment';
import {RectPrev, RectInput} from './Rectengle';
import {FoodData} from '../../Dummy/Dummy';
import {ResponseQueryGetBoardListBoardList} from '../../lib/GQL/GQLInterfaces';

const MealMain = () => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment.format('YYYY. MM. DD');
  const [water, setWater] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const keyDate = getMoment.format('YYYY-MM-DD');
  const [render, setRender] = useState(false);
  const boardQuery = FoodData.getBoardList.boardList;
  const [userData, setUserData] = useState<
    ResponseQueryGetBoardListBoardList[]
  >([]);

  /*   for (let i = 0; i <= boardQuery.length; i++) {
    if (boardQuery[i].datetime === keyDate) setRender(prev => !prev);
  } */

  const onClickWater = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(prev => !prev);
    if (isActive === true) setWater(water - 0.25);
    else setWater(water + 0.25);
  };
  useEffect(() => {
    setUserData(boardQuery);
  }, [boardQuery, userData]);
  useEffect(() => {}, [render]);

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
            {userData.map(data => (
              <RectPrev key={data.wr_id} img={data} text={data.wr_2} />
            ))}
          </Styled.FileAlign>
        </Styled.RectengleAlign>
        <div style={{height: '32px'}} />
        <Styled.Subject>하루 물 섭취 권장량 2L</Styled.Subject>
        <WaterBlock
          active={isActive}
          onClick={onClickWater}
          waterCalc={water}
        />
        <div style={{height: '135px'}} />
        <Navigation />
      </AlignBase>
    </BaseScreen>
  );
};

export default MealMain;
