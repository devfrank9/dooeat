import styled from 'styled-components';

interface Prop {
  today: any;
  backClick: () => void;
  forClick: () => void;
}

const DateSelect = ({today, backClick, forClick}: Prop) => {
  return (
    <>
      <DateSelectAlign>
        <BackBtn onClick={backClick} />
        <DateText>{today}</DateText>
        <NextBtn onClick={forClick} />
      </DateSelectAlign>
    </>
  );
};

const DateText = styled.span`
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
  background-color: rgb(245, 245, 245);
  border: none;
`;
const NextBtn = styled(BackBtn)`
  background: url('/image/Icon ionic-ios-arrow-forward.png') no-repeat 50% 50%;
  background-color: rgb(245, 245, 245);
`;
const DateSelectAlign = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default DateSelect;
