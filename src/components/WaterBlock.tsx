import {useState} from 'react';
import styled from 'styled-components';

export const WaterBlock = () => {
  const [water, setWater] = useState();

  return (
    <Container>
      <TextAlign>
        <p>0.25</p>
        <p>L</p>
      </TextAlign>
      <Hr />
      <Notice>한 컵당 250ml</Notice>
      <AlignGlass>
        <FillGlassWater />
        <GlassWater />
        <GlassWater />
        <GlassWater />
        <GlassWater />
        <GlassWater />
        <GlassWater />
        <GlassWater />
      </AlignGlass>
    </Container>
  );
};

const AlignGlass = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 35px;
  button {
    margin: 0 10.875px;
    margin-bottom: 20px;
  }
  margin-bottom: 10px;
`;
const FillGlassWater = styled.button`
  width: 40px;
  height: 52px;
  background: url('/image/fill glass.png') no-repeat 50% 50%;
  border: none;
`;
const GlassWater = styled.button`
  width: 40px;
  height: 52px;
  background: url('/image/empty glass.png') no-repeat 50% 50%;
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
