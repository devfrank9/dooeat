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
interface Prop {
  sendChild?: string[];
  toggleModal: () => void;
}

const MealSelecBtn = ({sendChild, toggleModal}: Prop) => {
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
  const [select2, setSelect2] = useState<string[]>([]);
  const [select3, setSelect3] = useState<string[]>([]);

  const [mealData, setMealData] = useRecoilState(mealBtnState);

  const btnRender = (n: number) => {
    const list: string[] = pick[n].list;
    if (n === 0) {
      return list.map((item, index) => (
        <ShortBtn
          key={index}
          name="wr_5"
          onClick={() => {
            !select.includes(item)
              ? setSelect(select => [...select, item])
              : setSelect(select.filter(button => button !== item));
            setMealData({...mealData, wr_5: item});
          }}
          isActive={
            select.includes(item) || sendChild?.includes(item) ? true : false
          }
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
            !select2.includes(item)
              ? setSelect2(select2 => [item])
              : setSelect2(select2.filter(button => button !== item));
            setMealData({...mealData, wr_2: item});
          }}
          isActive={
            select2.includes(item) || sendChild?.includes(item) ? true : false
          }
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
            !select3.includes(item)
              ? setSelect3(select3 => [item])
              : setSelect3(select3.filter(button => button !== item));
            setMealData({...mealData, wr_3: item});
          }}
          isActive={
            select3.includes(item) || sendChild?.includes(item) ? true : false
          }
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
      <SubSubject>
        <Subject>식단 종류</Subject>
        <MealBtn onClick={() => toggleModal()} />
      </SubSubject>
      <BtnAlign>{btnRender(2)}</BtnAlign>
    </>
  );
};

const MealBtn = styled.button`
  width: 20px;
  height: 20px;
  background: url('/image/group 47.png') no-repeat 50% 50%;
  border: none;
  border-radius: 10px;
`;
const SubSubject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
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
