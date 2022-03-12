import React, {useState} from 'react';
import styled from 'styled-components';

interface Prop {
  waterCalc: number;
  onClick: () => void;
}

export const WaterBlock = ({waterCalc, onClick}: Prop) => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);
  const [isActive8, setIsActive8] = useState(false);

  return (
    <Container>
      <TextAlign>
        <p>{waterCalc}</p>
        <p>L</p>
      </TextAlign>
      <Hr />
      <Notice>한 컵당 250ml</Notice>
      <AlignGlass>
        <GlassWater
          isActive={isActive}
          onClick={e => {
            setIsActive(prev => !prev);
          }}
        />
        <GlassWater
          isActive={isActive2}
          onClick={() => {
            setIsActive2(prev => !prev);
          }}
        />
        <GlassWater
          isActive={isActive3}
          onClick={() => {
            setIsActive3(prev => !prev);
          }}
        />
        <GlassWater
          isActive={isActive4}
          onClick={() => {
            setIsActive4(prev => !prev);
          }}
        />
        <GlassWater
          isActive={isActive5}
          onClick={() => {
            setIsActive5(prev => !prev);
          }}
        />
        <GlassWater
          isActive={isActive6}
          onClick={() => {
            setIsActive6(prev => !prev);
          }}
        />
        <GlassWater
          isActive={isActive7}
          onClick={() => {
            setIsActive7(prev => !prev);
          }}
        />
        <GlassWater
          isActive={isActive8}
          onClick={() => {
            setIsActive8(prev => !prev);
          }}
        />
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
const GlassWater = styled.button<{isActive: boolean}>`
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
