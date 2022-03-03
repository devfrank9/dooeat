import styled from 'styled-components';

interface Prop {
  HeaderText?: string;
  HeaderColor: string;
  gram?: string;
  result?: string | number;
  text?: string;
  statu?: string;
}

const BmiResult2 = ({
  HeaderText,
  HeaderColor,
  gram,
  result,
  text,
  statu,
}: Prop) => {
  return (
    <ContentBox>
      <Header HeaderColor={HeaderColor}>
        <p>{HeaderText}</p>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Label>kg</Label>
          <KgInput type="text" value={gram} />
        </div>
      </Header>
      <BmiCalc HeaderColor={HeaderColor}>
        <p>{text} BMI</p>
        <p>{result}</p>
      </BmiCalc>
      <HealthResult>
        <p>{statu}</p>
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
      <div style={{flex: 1}}></div>
    </ContentBox>
  );
};
const Label = styled.label`
  position: absolute;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  left: 60%;
  bottom: 5px;
  font-family: ${prop => prop.theme.roboto};
`;
const KgInput = styled.input`
  width: 91.5px;
  font-size: 30px;
  border: none;
  border-bottom: 1px solid rgb(239, 239, 239);
  padding-left: 25px;
  margin-top: 8.1px;
  font-weight: 300;
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
  font-family: 'Roboto';
`;
const Header = styled.div<Prop>`
  margin-top: 40px;
  p {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: ${prop => prop.HeaderColor};
  }
`;
const BmiCalc = styled.div<Prop>`
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
  color: ${prop => prop.HeaderColor};
  p:last-child {
    text-align: center;
    font-size: 32px;
    color: rgb(51, 51, 51);
    font-family: ${prop => prop.theme.roboto};
    margin-top: 14px;
  }
`;
const HealthResult = styled.div`
  margin-top: 4px;
  p {
    text-align: center;
    font-size: 16px;
    color: ${prop => prop.theme.mainColor};
    font-weight: 700;
  }
`;
const BmiGraph = styled.div`
  display: flex;
  height: 40px;
  padding: 0 10px;
  margin-top: 101px;
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
    font-weight: 300;
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
  font-family: ${prop => prop.theme.roboto};
  div {
    flex: 1;
    min-width: 60px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 300;
  }
`;
const ContentBox = styled.div`
  height: 467px;
  box-shadow: 0px 3px 10px 0px rgb(0, 0, 0, 0.1);
  border-radius: 12px;
`;

export default BmiResult2;
