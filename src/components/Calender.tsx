import moment from 'moment';
import {useState} from 'react';
import styled from 'styled-components';

interface Prop {
  backColor?: string;
}

const Calender = ({backColor = ''}: Prop) => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment; // today == moment()
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  const calendarArr = () => {
    let result: any[] = [];
    let thisWeek = firstWeek;
    for (thisWeek; thisWeek <= lastWeek; thisWeek++) {
      result = result.concat(
        <Tr key={thisWeek}>
          {Array(7)
            .fill(0)
            // eslint-disable-next-line no-loop-func
            .map((data, index) => {
              let days = today
                .clone()
                .startOf('year')
                .week(thisWeek)
                .startOf('week')
                .add(index, 'day');

              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <Td
                    key={index}
                    style={{textDecoration: 'underline', fontWeight: '700'}}
                  >
                    <TdSpan>{days.format('D')}</TdSpan>
                  </Td>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <Td key={index} style={{color: 'rgb(223,223,223)'}}>
                    <TdSpan>{days.format('D')}</TdSpan>
                  </Td>
                );
              } else {
                return (
                  <Td key={index}>
                    <TdSpan>{days.format('D')}</TdSpan>
                  </Td>
                );
              }
            })}
        </Tr>,
      );
    }
    return result;
  };

  return (
    <Container>
      <DateSelect>
        <BackBtn
          backColor={backColor}
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, 'month'));
          }}
        />
        <DateText>{today.format('YYYY. MM. DD')}</DateText>
        <NextBtn
          backColor={backColor}
          onClick={() => {
            setMoment(getMoment.clone().add(1, 'month'));
          }}
        />
      </DateSelect>
      <div style={{height: '20px'}} />
      <Table>
        <Tbody>
          <WeekText>
            <td>일</td>
            <td>월</td>
            <td>화</td>
            <td>수</td>
            <td>목</td>
            <td>금</td>
            <td>토</td>
          </WeekText>
          {calendarArr()}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Calender;

const WeekText = styled.tr`
  display: flex;
  flex-direction: row;
  background-color: ${prop => prop.theme.pointColor3};
  border-top: 1px solid ${prop => prop.theme.pointColor2};
  border-bottom: 1px solid ${prop => prop.theme.pointColor2};
  td {
    display: flex;
    min-width: 44px;
    min-height: 44px;
    font-size: 13px;
    justify-content: center;
    align-items: center;
  }
`;
const TdSpan = styled.span`
  display: flex;
  font-family: roboto;
  font-size: 14px;
  align-items: center;
  justify-content: center;
`;
const Td = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  width: 5vw;
  min-height: 44px;
  height: 5vh;
`;
const Tr = styled.tr`
  display: flex;
  flex-direction: row;
`;
const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
`;
const Table = styled.table`
  display: flex;
`;
const DateText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
  font-size: 18px;
  width: 140px;
`;
const BackBtn = styled.button<Prop>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: url('/image/Icon ionic-ios-arrow-back.png') no-repeat 50% 50%;
  background-color: ${prop => (prop.backColor ? 'white' : 'rgb(245,245,245)')};
  border: none;
`;
const NextBtn = styled(BackBtn)`
  background: url('/image/Icon ionic-ios-arrow-forward.png') no-repeat 50% 50%;
  background-color: ${prop => (prop.backColor ? 'white' : 'rgb(245,245,245)')};
`;
const DateSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
