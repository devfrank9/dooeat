import styled from 'styled-components';

const BmiResult2 = () => {
  return (
    <ContentBox>
      <Header>
        <p>현재 체중</p>
        <p>kg</p>
      </Header>
      <BmiCalc>
        <p>현재 BMI</p>
        <p>20.29(test)</p>
      </BmiCalc>
      <HealthResult>
        <p>정상</p>
      </HealthResult>
      <BmiGraph>
        <div>저체중</div>
        <div>정상</div>
        <div>과체중</div>
        <div>경도비만</div>
        <div>중등비만</div>
      </BmiGraph>
      <BmiIndicator>
        <div>0</div>
        <div>18.5</div>
        <div>23</div>
        <div>25</div>
        <div>30</div>
      </BmiIndicator>
    </ContentBox>
  );
};
const Header = styled.div`
  margin-top: 3.3333rem;
  p {
    text-align: center;
    font-size: 1.6667rem;
  }
  p:last-child {
    color: ${prop => prop.theme.mainColor};
  }
`;
const BmiCalc = styled.div`
  margin-top: 3.3333rem;
  p:first-child {
    text-align: center;
    font-size: 1.6667rem;
  }
  p:last-child {
    text-align: center;
    font-size: 2.6667rem;
    color: rgb(51, 51, 51);
  }
`;
const HealthResult = styled.div`
  margin-top: 0.3333rem;
  p {
    text-align: center;
    font-size: 1.3333rem;
    color: ${prop => prop.theme.mainColor};
  }
`;
const BmiGraph = styled.div`
  display: flex;
  height: 3.333rem;
  padding: 0 0.8333rem;
  margin-top: 9.25rem;
  align-items: center;
  justify-content: center;
  div {
    width: 5rem;
    height: 3.3333rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1667rem;
  }
  div:nth-child(1) {
    background-color: rgb(236, 236, 236);
    color: black;
  }
  div:nth-child(2) {
    background-color: ${prop => prop.theme.mainColor};
  }
  div:nth-child(3) {
    background-color: rgb(185, 185, 185);
  }
  div:nth-child(4) {
    background-color: rgb(148, 148, 148);
  }
  div:nth-child(5) {
    background-color: rgb(90, 90, 90);
  }
`;
const BmiIndicator = styled.div`
  display: flex;
  padding: 0 0.8333rem;
  align-items: center;
  justify-content: center;
  div {
    width: 5rem;
    height: 3.3333rem;
    display: flex;
    align-items: center;
    color: black;
    font-size: 1.1667rem;
  }
`;
const ContentBox = styled.div`
  padding: 0 auto;
  margin: 0;
  width: 26.5833rem;
  height: 38.9167rem;
  box-shadow: 0pt 3pt 10pt 0pt rgb(0, 0, 0, 0.1);
  border-radius: 2rem;
`;

export default BmiResult2;
