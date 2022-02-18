import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Navigation} from '../../components/Navigation';
import {SelectDate} from '../../components/SelectDate';
import {StatusBar} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const HealthMain = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar Subject="오늘" Img="/image/myInfo.png" />
        <div style={{height: '110px'}} />
        <SelectDate />
        <KgBanner>
          <Link to="/scale-graph">
            <Scale />
          </Link>
          <BannerTextAlign>
            <p>오늘의 몸무게는</p>
            <Label>kg</Label>
            <KgInput placeholder="입력해주세요." type="text" value={55} />
            <p>입니다</p>
          </BannerTextAlign>
        </KgBanner>
        <div style={{height: '30px'}} />
        <Subject>하루 운동량 분석</Subject>
        <HealthKind>헬스</HealthKind>
        <div style={{height: '30px'}} />
        <Subject>눈바디</Subject>
        <ImgAlign>
          <img src="/image/body.png" alt="" />
          <img src="/image/body2.png" alt="" />
        </ImgAlign>
        <div style={{height: '30px'}} />
        <Subject>하체 운동</Subject>
        <BtnAlign>
          <ExerciseKind>스쿼트</ExerciseKind>
          <ExcerciseInfo>100kg, 20회, 4SET</ExcerciseInfo>
        </BtnAlign>
        <BtnAlign>
          <ExerciseKind>런지</ExerciseKind>
          <ExcerciseInfo>80kg, 20회, 4SET</ExcerciseInfo>
        </BtnAlign>
        <LongExKind>라잉힙 사이드 레그레이즈</LongExKind>
        <div style={{height: '12px'}} />
        <LongExInfo>20회 4세트</LongExInfo>
        <div style={{height: '30px'}} />
        <Subject>유산소 운동</Subject>
        <BtnAlign>
          <ExerciseKind2>줄넘기</ExerciseKind2>
          <ExcerciseInfo2>10분</ExcerciseInfo2>
        </BtnAlign>
        <BtnAlign>
          <ExerciseKind2>러닝머신</ExerciseKind2>
          <ExcerciseInfo2>40분</ExcerciseInfo2>
        </BtnAlign>
        <div style={{height: '102px'}} />
        <Navigation />
      </AlignBase>
    </BaseScreen>
  );
};
const LongExKind = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${prop => prop.theme.mainColor};
  height: 48px;
  background-color: ${prop => prop.theme.pointColor3};
  border: 1px solid ${prop => prop.theme.pointColor2};
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
`;
const LongExInfo = styled(LongExKind)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${prop => prop.theme.fontColor1};
  height: 48px;
  background-color: ${prop => prop.theme.fontColor3};
  border: 1px solid ${prop => prop.theme.pointColor2};
  border-radius: 8px;
  font-size: 15px;
  font-weight: 400;
`;
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
  flex: 1;
  font-size: 15px;
`;
const ExerciseKind2 = styled(ExerciseKind)`
  width: 128px;
`;
const ExcerciseInfo2 = styled(ExcerciseInfo)`
  width: 183px;
`;
const BtnAlign = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 12px;
`;
const ImgAlign = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 152px;
    height: 152px;
    border-radius: 10px;
    opacity: 0.9;
  }
`;
const HealthKind = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 48px;
  border: 1px solid ${prop => prop.theme.pointColor1};
  border-radius: 8px;
  font-size: 15px;
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;
const KgInput = styled.input`
  position: absolute;
  width: 69px;
  height: 37px;
  font-size: 30px;
  border: none;
  border-bottom: 1px solid rgb(239, 239, 239);
  margin-top: 8.1px;
  font-weight: 300;
  left: 159.5px;
  bottom: 54px;
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
  font-family: 'Roboto';
`;
const Label = styled.label`
  position: absolute;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
  left: 210px;
  bottom: 62px;
  z-index: 6;
`;
const BannerTextAlign = styled.div`
  font-size: 16px;
  p:first-child {
    position: absolute;
    bottom: 98px;
    left: 159.5px;
    color: ${prop => prop.theme.fontColor1};
  }
  p:last-child {
    position: absolute;
    left: 235px;
    bottom: 60px;
    color: ${prop => prop.theme.fontColor1};
  }
`;
const KgBanner = styled.div`
  position: relative;
  margin-top: 36px;
  border-bottom: 1px solid ${prop => prop.theme.btnColor1};
  height: 170px;
`;
const Scale = styled.div`
  background-color: ${props => props.theme.pointColor2};
  background-image: url('/image/group 3.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 42px 38px;
  width: 102px;
  height: 102px;
  border-radius: 104px;
  margin: 0 auto;
  position: absolute;
  left: 26px;
  bottom: 32px;
`;

export default HealthMain;
