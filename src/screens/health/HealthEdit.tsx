import moment from 'moment';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import {exerciseForm} from '../../Dummy/Dummy';
import {FileInput, FileRectengle} from '../../styles/FileInputStyled';
import {Common} from '../../styles/InputStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';
import Excer from './EditBtnComp/Excer';
import {IGetExcerForm} from './HealthMain';

const HealthEdit = () => {
  const {date} = useParams();
  const [getMoment, setMoment] = useState(moment());
  const getForm = exerciseForm.getExercise;
  const [formData, setFormData] = useState<IGetExcerForm>();

  useEffect(() => {
    if (date !== undefined) setFormData(getForm);
    else return;
  }, [getForm, date]);
  useEffect(() => {}, [Excer]);

  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="운동 기록" />
        <div style={{height: '110px'}} />
        <Subject>오늘의 체중</Subject>
        <div style={{position: 'relative'}}>
          <Label>kg</Label>
          <Input
            placeholder="kg단위로 입력해주세요."
            defaultValue={formData?.todayWeight ?? ''}
          />
        </div>
        <div style={{height: '30px'}} />
        <Subject>눈바디 사진 업로드</Subject>
      </AlignBase>
      <div style={{margin: '0 28px'}}>
        {formData === undefined ? (
          <FileRectengle>
            <FileInput />
          </FileRectengle>
        ) : (
          <ImgAlign>
            {formData?.file.map((img, index) => (
              <img key={index} src={`${formData?.file[index].url}`} alt="" />
            ))}
          </ImgAlign>
        )}
        <div style={{height: '30px'}} />
        <Excer />
        <div style={{height: '30px'}} />
      </div>
    </BaseScreen>
  );
};
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
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;
const Label = styled.label`
  position: absolute;
  top: 15px;
  right: 31px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
`;
const Input = styled(Common)`
  padding-left: 30px;
`;

export default HealthEdit;
