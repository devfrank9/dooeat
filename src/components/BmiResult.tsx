import styled from 'styled-components';

const BmiResult = () => {
  return (
    <ContentBox>
      <Header>
        <p>BMI(신체질량지수)</p>
      </Header>
      <BmiCalc></BmiCalc>
    </ContentBox>
  );
};
const Header = styled.div``;
const BmiCalc = styled.div``;
const HealthResult = styled.div``;
const BmiCursor = styled.div``;
const BmiGraph = styled.div``;
const ContentBox = styled.div`
  width: 26.5833rem;
  height: 30rem;
  box-shadow: 0pt 3pt 10pt 0pt rgb(0, 0, 0, 0.1);
  border-radius: 2rem;
`;

export default BmiResult;
