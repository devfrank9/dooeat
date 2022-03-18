import React, {useState} from 'react';
import styled from 'styled-components';

interface Prop {
  waterCalc?: number;
}

export const WaterBlock = ({waterCalc}: Prop) => {
  const [value, setValue] = useState(0);
  const [pick, setPick] = useState<number[]>([]);
  const [select, setSelect] = useState<number[]>([]);

  return (
    <Container>
      <TextAlign>
        <p>{waterCalc}</p>
        <p>L</p>
      </TextAlign>
      <Hr />
      <Notice>한 컵당 250ml</Notice>
      <AlignGlass>
        {[...Array(8)].map((item, index) => (
          <GlassWater
            key={index}
            onClick={() => {
              !select.includes(item)
                ? setSelect(select => [...select, item])
                : setSelect(select.filter(button => button !== item));
            }}
            isActive={select.includes(item) ? true : false}
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
