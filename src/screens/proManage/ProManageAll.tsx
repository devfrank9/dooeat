import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const ProManageAll = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="개인운동 전체보기" />
        <div style={{height: '80px'}} />
        <Rect>
          <RectContent>
            <Head>21년 12월 27일</Head>
            <Subject>하체 운동</Subject>
            <BtnAlign>
              <ExerciseKind>스쿼트</ExerciseKind>
              <ExcerciseInfo>100kg, 20회, 4SET</ExcerciseInfo>
            </BtnAlign>
            <BtnAlign>
              <ExerciseKind>런지</ExerciseKind>
              <ExcerciseInfo>80kg, 20회, 4SET</ExcerciseInfo>
            </BtnAlign>
            <Subject>유산소 운동</Subject>
            <BtnAlign>
              <ExerciseKind>줄넘기</ExerciseKind>
              <ExcerciseInfo>10분</ExcerciseInfo>
            </BtnAlign>
          </RectContent>
        </Rect>
      </AlignBase>
    </BaseScreen>
  );
};
const ExcerciseInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${prop => prop.theme.fontColor1};
  border-radius: 8px;
  width: 226px;
  height: 48px;
  border: 1px solid ${prop => prop.theme.pointColor2};
  font-size: 15px;
  flex: 1;
`;
const ExerciseKind = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${prop => prop.theme.mainColor};
  background-color: ${prop => prop.theme.pointColor3};
  border-radius: 8px;
  width: 85px;
  height: 48px;
  border: 1px solid ${prop => prop.theme.pointColor2};
  margin-right: 8px;
  font-size: 15px;
`;
const BtnAlign = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 12px;
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  margin-top: 30px;
`;
const Head = styled.div`
  border-bottom: 2px solid rgb(245, 245, 245);
  height: 55px;
  color: ${prop => prop.theme.mainColor};
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;
const RectContent = styled.div`
  margin: 0 16px;
`;
const Rect = styled.div`
  height: 381px;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 12px;
  margin-top: 30px;
`;

export default ProManageAll;
