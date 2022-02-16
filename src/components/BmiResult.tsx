import styled from 'styled-components';

const BmiResult = () => {
  return (
    <ContentBox>
      <Header>
        <p>BMI(신체질량지수)</p>
      </Header>
      <BmiCalc>
        <p>20.29</p>
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
  margin-top: 44px;
  p {
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    color: rgb(148, 148, 148);
  }
`;
const BmiCalc = styled.div`
  margin-top: 16px;
  p {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: rgb(51, 51, 51);
  }
`;
const HealthResult = styled.div`
  margin-top: 4px;
  p {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: ${prop => prop.theme.mainColor};
  }
`;
const BmiGraph = styled.div`
  display: flex;
  height: 40px;
  padding: 0 10px;
  margin-top: 111px;
  align-items: center;
  justify-content: center;
  div {
    flex: 1;
    min-width: 60px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
  }
  div:nth-child(1) {
    background-color: rgb(236, 236, 236);
    color: black;
    border-radius: 6px 0px 0px 6px;
  }
  div:nth-child(2) {
    background-color: ${prop => prop.theme.mainColor};
  }
  div:nth-child(3) {
    background-color: rgb(180, 180, 180);
  }
  div:nth-child(4) {
    background-color: rgb(148, 148, 148);
  }
  div:nth-child(5) {
    background-color: rgb(51, 51, 51);
    border-radius: 0px 6px 6px 0px;
  }
`;
const BmiIndicator = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  div {
    flex: 1;
    min-width: 60px;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 300;
  }
`;
const ContentBox = styled.div`
  padding: 0 auto;
  margin: 0;
  width: 100%;
  height: 360px;
  box-shadow: 0px 3px 10px 0px rgb(0, 0, 0, 0.1);
  border-radius: 12px;
`;

export default BmiResult;
