import styled from 'styled-components';

export const SelectDate = () => {
  const a = new Date();
  const year = a.getFullYear();
  const month = a.getMonth();
  const date = a.getDay();

  return (
    <Container>
      <BackBtn onClick={() => date - 1} />
      <DateText>
        {year}. {month}. {date}
      </DateText>
      <NextBtn onClick={() => date - 1} />
    </Container>
  );
};

const DateText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
  font-size: 18px;
  width: 140px;
`;
const BackBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: url('/image/Icon ionic-ios-arrow-back.png') no-repeat 50% 50%;
  background-color: ${prop => prop.theme.btnColor1};
  border: none;
`;
const NextBtn = styled(BackBtn)`
  background: url('/image/Icon ionic-ios-arrow-forward.png') no-repeat 50% 50%;
  background-color: ${prop => prop.theme.btnColor1};
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
