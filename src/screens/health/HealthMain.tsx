import moment from 'moment';
import {useEffect, useState} from 'react';
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components';
import DateSelect from '../../components/DateSelect';
import {Navigation} from '../../components/Navigation';
import {StatusBar} from '../../components/StatusBar';
import {exerciseForm} from '../../Dummy/Dummy';
import {__session} from '../../lib/atom';
import BaseScreen, {AlignBase} from '../BaseScreen';
import HealthMain2 from './HealthMain2';

interface IImg {
  url: string | number;
  fileType: string;
  thumb: string | number;
  bf_id: number;
  bo_table: string;
  wr_id: number;
  fileName: string;
  downloadCount: number;
}
interface IExcerData {
  part: string;
  name: string;
  set: number;
  weight: number;
  times: number;
  movieURL: string;
  time: string;
  power: string;
}
interface IGetExcerForm {
  [x: string]: any;
  date: string;
  exerciseType: string;
  todayWeight: number;
  file: IImg[];
  exerciseData: IExcerData[];
}

const HealthMain = () => {
  let params = useParams();
  const navigate = useNavigate();
  const session = useRecoilValue(__session);
  const [getMoment, setMoment] = useState(moment());
  const getForm = exerciseForm.getExercise;
  const [formData, setFormData] = useState<IGetExcerForm>();

  useEffect(() => {
    const nowDate = getMoment.format('YYYY-MM-DD');
    if (getForm.date === nowDate) setFormData(getForm);
    else setFormData(undefined);
  }, [getMoment, getForm]);

  const healthRender = () => {
    if (formData !== undefined) {
      const n = formData.exerciseData.length;
      let renderArray: any[] = [];

      for (let i = 0; i < n; i++) {
        if (formData.exerciseData[i].name.length < 4) {
          let empty: any[] = [];
          empty.push(formData.exerciseData[i]);
          renderArray.push(
            empty.map((data, index) => (
              <>
                <Subject>{empty[index].part} 운동</Subject>
                <BtnAlign>
                  <ExerciseKind>{empty[index].name}</ExerciseKind>
                  <ExcerciseInfo>{`${empty[index].weight}kg, ${empty[index].times}회, ${empty[index].set}SET`}</ExcerciseInfo>
                </BtnAlign>
              </>
            )),
          );
        }
      }
      for (let i = 0; i < n; i++) {
        if (formData.exerciseData[i].name.length >= 4) {
          let empty: any[] = [];
          empty.push(formData.exerciseData[i]);
          renderArray.push(
            empty.map((data, index) => (
              <>
                <Subject>{empty[index].part} 운동</Subject>
                <LongExKind>{empty[index].name}</LongExKind>
                <div style={{height: '12px'}} />
                <LongExInfo>{`${empty[index].times}회, ${empty[index].set}SET`}</LongExInfo>
                <div style={{height: '30px'}} />
              </>
            )),
          );
        }
      }
      for (let i = 0; i < n; i++) {
        if (formData.exerciseData[i].part === '유산소') {
          let empty: any[] = [];
          empty.push(formData.exerciseData[i]);
          renderArray.push(
            empty.map((data, index) => (
              <>
                <Subject>{empty[index].part}운동</Subject>
                <BtnAlign>
                  <ExerciseKind2>{empty[index].name}</ExerciseKind2>
                  <ExcerciseInfo2>{empty[index].times}분</ExcerciseInfo2>
                </BtnAlign>
              </>
            )),
          );
        }
      }
      return renderArray;
    }
  };
  const editBtnProcess = () => {
    if (formData !== undefined) navigate(`${formData.date}`);
    else navigate('edit');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar
          Subject="오늘"
          Img="/image/myInfo.png"
          LinkTo="/user/profile"
        />
        <div style={{height: '110px'}} />
        <DateSelect
          today={getMoment.format('YYYY. MM. DD')}
          backClick={() => {
            setMoment(getMoment.clone().subtract(1, 'day'));
          }}
          forClick={() => {
            setMoment(getMoment.clone().add(1, 'day'));
          }}
        />
        {formData === undefined ? (
          <HealthMain2 />
        ) : (
          <>
            <KgBanner>
              <Link to="/user/health/scale-graph">
                <Scale />
              </Link>
              <BannerTextAlign>
                <p>오늘의 몸무게는</p>
                <Label>kg</Label>
                <KgInput
                  placeholder="입력해주세요."
                  type="text"
                  defaultValue={formData.todayWeight}
                />
                <p>입니다</p>
              </BannerTextAlign>
            </KgBanner>
            <div style={{height: '30px'}} />
            <Subject>하루 운동량 분석</Subject>
            <HealthKind>{formData.exerciseType}</HealthKind>
            <div style={{height: '30px'}} />
            <Subject>눈바디</Subject>
            <ImgAlign>
              {formData.file.length === 0
                ? [...Array(2)].map(item => <FileRectengle to="write" />)
                : formData.file.map((img, index) => (
                    <img
                      key={index}
                      src={`${formData.file[index].url}`}
                      alt=""
                    />
                  ))}
            </ImgAlign>
            <div style={{height: '30px'}} />
            {healthRender()}
            <div style={{height: '30px'}} />
            <BtnAlign2>
              <EditBtn onClick={() => editBtnProcess()} />
            </BtnAlign2>
            <div style={{height: '102px'}} />
          </>
        )}
        <Navigation />
      </AlignBase>
    </BaseScreen>
  );
};

const FileRectengle = styled(Link)`
  display: block;
  min-width: 150px;
  width: 47.022%;
  padding-bottom: 47.022%;
  border: 1px solid ${props => props.theme.btnColor2};
  border-radius: 10px;
  background: url('/image/IIcon feather-plus-circle.png') no-repeat 50% 50%;
`;
const BtnAlign2 = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 90px;
  width: 100%;
  max-width: 480px;
`;
const EditBtn = styled.button`
  width: 66px;
  height: 66px;
  border-radius: 33px;
  background: url('/image/healthEdit.png') no-repeat;
  position: absolute;
  right: 28px;
  bottom: 0;
  border: none;
`;
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
    display: block;
    min-width: 150px;
    width: 47.022%;
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
