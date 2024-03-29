import moment from 'moment';
import {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components';
import KindRegiModal from '../../components/Modal/HealthModal/KindRegiModal';
import {StatusBar2} from '../../components/StatusBar';
import {__session} from '../../lib/atom';
import {useQueryForGetBoardWrite} from '../../lib/GQL/CommunicationMap';
import useModal from '../../lib/Hook/useModal';
import {FileInput, FileRectengle} from '../../styles/FileInputStyled';
import {Common} from '../../styles/InputStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';
import Excer from './EditBtnComp/Exer';
import {IGetExcerForm} from './HealthMain';
import ImgInput from '../../components/ImgInput';
import useImgInput from '../../lib/Hook/useImgInput';

const HealthEdit = () => {
  const session = useRecoilValue(__session);
  const {date} = useParams();
  const [getMoment, setMoment] = useState(moment());
  const [formData, setFormData] = useState<IGetExcerForm>();
  const [exers, setExers] = useState([
    {
      id: 1,
      content: '헬스',
      active: false,
    },
    {
      id: 2,
      content: '홈트',
      active: false,
    },
    {
      id: 3,
      content: '기타',
      active: false,
    },
  ]);
  const [exersDetail, setExersDetail] = useState([
    {
      id: 1,
      content: '가슴',
      active: false,
    },
    {
      id: 2,
      content: '어깨',
      active: false,
    },
    {
      id: 3,
      content: '팔',
      active: false,
    },
    {
      id: 4,
      content: '등',
      active: false,
    },
    {
      id: 5,
      content: '하체',
      active: false,
    },
    {
      id: 6,
      content: '전신',
      active: false,
    },
    {
      id: 7,
      content: '유산소',
      active: false,
    },
    {
      id: 8,
      content: '스트레칭',
      active: false,
    },
  ]);
  const [isOpen, toggleModal] = useModal(false);
  const {
    fileRef,
    imgFiles,
    isError,
    handleClickOnFileInput,
    handleUploadFile,
    removeSeletedPreview,
  } = useImgInput();
  const [modalOk, setModalOk] = useState(false);

  const onToggleExers = useCallback(
    (id: number) => {
      setExers(
        exers.map(exer =>
          exer.id === id ? {...exer, active: !exer.active} : exer,
        ),
      );
    },
    [exers],
  );
  const onToggleDetail = useCallback(
    (id: number) => {
      setExersDetail(
        exersDetail.map(exer =>
          exer.id === id ? {...exer, active: !exer.active} : exer,
        ),
      );
    },
    [exersDetail],
  );

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
        <ImgInput
          fileRef={fileRef}
          name="image-uploader"
          imgFiles={imgFiles}
          isError={isError}
          handleClickOnFileInput={handleClickOnFileInput}
          handleUploadFile={handleUploadFile}
          removeSeletedPreview={removeSeletedPreview}
          hidden
        />
        <div style={{height: '30px'}} />
        <Excer
          exers={exers}
          exersDetail={exersDetail}
          onToggleExers={onToggleExers}
          onToggleDetail={onToggleDetail}
          toggleModal={toggleModal}
        />
        <div style={{height: '30px'}} />
      </div>
      {isOpen && (
        <KindRegiModal toggleModal={toggleModal} progressOk={modalOk} />
      )}
    </BaseScreen>
  );
};
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
