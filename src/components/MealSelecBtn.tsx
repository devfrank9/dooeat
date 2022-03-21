import {useState} from 'react';
import {useRecoilState} from 'recoil';
import styled from 'styled-components';
import {mealBtnState} from '../lib/atom';
import {LongBtn, MiddleBtn, ShortBtn} from '../styles/BtnStyled';

interface Iselect {
  [x: string]: any;
  key: number;
  list: string[];
}

const MealSelecBtn = () => {
  const arr = [
    {
      key: 1,
      list: ['아침', '점심', '저녁', '간식', '야식'],
    },
    {
      key: 2,
      list: ['가벼워요', '적당해요', '배불러요', '과했어요'],
    },
    {
      key: 3,
      list: ['치팅', '일반식', '다이어트식'],
    },
  ];
  const [pick, setPick] = useState<Iselect[]>(arr);
  const [select, setSelect] = useState<string[]>([]);
  const selectChange = (item: string) => {
    if (!select.includes(item)) return setSelect(select => [...select, item]);
    else return setSelect(select.filter(button => button !== item));
  };
  const [mealData, setMealData] = useRecoilState(mealBtnState);

  const btnRender = (n: number) => {
    const list: string[] = pick[n].list;
    if (n === 0) {
      return list.map((item, index) => (
        <ShortBtn
          key={index}
          name="wr_5"
          onClick={() => {
            selectChange(item);
            setMealData({...mealData, wr_5: item});
          }}
          isActive={select.includes(item) ? true : false}
        >
          {item}
        </ShortBtn>
      ));
    }
    if (n === 1) {
      return list.map((item, index) => (
        <MiddleBtn
          key={index}
          name="wr_2"
          onClick={() => {
            selectChange(item);
            setMealData({...mealData, wr_2: item});
          }}
          isActive={select.includes(item) ? true : false}
        >
          {item}
        </MiddleBtn>
      ));
    }
    if (n === 2) {
      return list.map((item, index) => (
        <LongBtn
          key={index}
          name="wr_3"
          onClick={() => {
            selectChange(item);
            setMealData({...mealData, wr_3: item});
          }}
          isActive={select.includes(item) ? true : false}
        >
          {item}
        </LongBtn>
      ));
    }
  };

  return (
    <>
      <Subject>타입</Subject>
      <BtnAlign>{btnRender(0)}</BtnAlign>
      <Subject>먹은 양</Subject>
      <BtnAlign>{btnRender(1)}</BtnAlign>
      <Subject>식단 종류</Subject>
      <BtnAlign>{btnRender(2)}</BtnAlign>
    </>
  );
};

const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  margin-bottom: 30px;
  button {
  }
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export default MealSelecBtn;
