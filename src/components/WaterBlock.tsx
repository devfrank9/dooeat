import React, {useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import styled from 'styled-components';
import {waterResult, __session} from '../lib/atom';
import {
  useLQueryForWaterDrink,
  useMutationForSetWaterDrink,
} from '../lib/GQL/CommunicationMap';

interface Prop {
  waterText: number;
  day: string;
}

export const WaterBlock = ({waterText, day}: Prop) => {
  const [water, setWater] = useRecoilState(waterResult);
  const [pick, setPick] = useState<number[]>([]);
  const [select, setSelect] = useState<number[]>([]);
  const session = useRecoilValue(__session);
  const [query, queryResult] = useLQueryForWaterDrink();
  /*   const [commSetWater] = useMutationForSetWaterDrink(); boolean 타입 되어있음 */

  /*   useEffect(() => {
    let queryWaterData = {
      session: String(session),
      date: day,
    };
    query({session: String(session),
      date: day,});
  }, []); */

  useEffect(() => {
    console.log(select.length);
    if (select.length + 1) setWater(water + 250);
    else if (select.length - 1) setWater(water - 250);
  }, [select]);

  return (
    <Container>
      <TextAlign>
        <p>{waterText}</p>
        <p>L</p>
      </TextAlign>
      <Hr />
      <Notice>한 컵당 250ml</Notice>
      <AlignGlass>
        {[...Array(8)].map((item, index) => (
          <GlassWater
            key={index}
            onClick={() => {
              !select.includes(index)
                ? setSelect(select => [...select, index])
                : setSelect(select.filter(button => button !== index));
            }}
            isActive={select.includes(index) ? true : false}
          />
        ))}
      </AlignGlass>
    </Container>
  );
};

const AlignGlass = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 35px;
  button {
    margin: 0 10px;
    margin-bottom: 20px;
  }
  margin-bottom: 10px;
`;
const GlassWater = styled.button<{isActive?: boolean}>`
  width: 40px;
  height: 52px;
  background: ${prop =>
    !prop.isActive
      ? "url('/image/empty glass.png') no-repeat 50% 50%"
      : "url('/image/fill glass.png') no-repeat 50% 50%"};
  border: none;
`;
const Notice = styled.p`
  font-size: 14px;
  color: ${prop => prop.theme.mainColor};
  text-align: center;
  margin-bottom: 10px;
`;
const Hr = styled.hr`
  width: 160px;
  opacity: 0.5;
`;
const TextAlign = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin-top: 24px;
  font-family: ${prop => prop.theme.roboto};
  p:last-child {
    position: relative;
    left: 10px;
    top: 12px;
    font-size: 20px;
    align-items: flex-start;
  }
`;
const Container = styled.div`
  display: block;
  border: 1px solid rgb(223, 223, 223);
  box-shadow: 0pt 3pt 10pt 0pt rgb(0, 0, 0, 0.1);
  border-radius: 12px;
`;
