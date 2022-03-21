import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import {TextArea} from '../../styles/InputStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import {useRecoilValue} from 'recoil';
import {mealBtnState, __me, __session} from '../../lib/atom';
import {
  useLQueryForGetBoardList,
  useMutationSetBoardWrite,
} from '../../lib/GQL/CommunicationMap';
import {TimeInputStyle} from '../../components/TimeInput';
import ImgInput from '../../components/ImgInput';
import useImgInput from '../../lib/Hook/useImgInput';
import moment from 'moment';
import {
  RequestMutationSetBoardWrite,
  RequestQueryGetBoardList,
} from '../../lib/GQL/GQLInterfaces';
import MealSelecBtn from '../../components/MealSelecBtn';

const MealEdit = () => {
  const {pathname} = useLocation();
  const {wr_id} = useParams();
  const navigate = useNavigate();
  const [getMoment] = useState(moment());
  const [imgData, setImgData] = useState<{}>({
    fileData: '',
    fileName: '',
  });
  const {
    fileRef,
    imgFiles,
    isError,
    handleClickOnFileInput,
    handleUploadFile,
    removeSeletedPreview,
  } = useImgInput();
  const session = useRecoilValue(__session);
  const getMe = useRecoilValue(__me);
  const [commSetBoardWrite] = useMutationSetBoardWrite();
  const [data, setData] = useState<RequestMutationSetBoardWrite | any>({});
  const [queryData, queryDataResult] = useLQueryForGetBoardList();
  const mealBtnData = useRecoilValue(mealBtnState);
  const [file, setFile] = useState<any[]>([]);
  const [subject, setSubject] = useState('');

  useEffect(() => {
    let queryBoardList: RequestQueryGetBoardList = {
      session: session,
      bo_table: 'myFood',
      search: {
        mb_id: getMe?.mb_id,
        wr_1: String(getMoment.format('YYYY-MM-DD')),
      },
    };
    queryData({variables: queryBoardList});
  }, [getMoment]);

  useEffect(() => {
    const boardQueryResult = queryDataResult.data?.getBoardList.boardList;
    if (boardQueryResult !== undefined) {
      for (let i = 0; i < boardQueryResult.length; i++) {
        if (boardQueryResult[i].wr_id === Number(wr_id)) {
          return setData(boardQueryResult[i]);
        } else {
          return setData({...data});
        }
      }
    } else {
      return setData({
        subject: subject,
        session: String(session),
        bo_table: 'myFood',
        token: String(nanoid()),
        wr_id: Number(nanoid()),
        files: file,
        wr_1: String(getMoment.format('YYYY-MM-DD')),
        wr_2: mealBtnData.wr_2,
        wr_3: mealBtnData.wr_3,
        wr_5: mealBtnData.wr_5,
        wr_6: subject,
        mb_id: getMe?.mb_id,
      });
    }
    console.log(data);
  }, [queryDataResult, mealBtnData, imgData]);

  useEffect(() => {
    const files = Object.values(imgFiles);
    let empty: any[] = [];
    for (const file of files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result;
        setImgData({
          fileData: base64data,
          fileName: file.name,
        });
        empty.push(imgData);
      };
      setFile(empty);
    }
  }, [imgFiles]);

  const processSetBoard = () => {
    commSetBoardWrite({variables: data}).then(result => {
      console.log(data);
      console.log(result.data?.setBoardWrite);
      if (result.data?.setBoardWrite) navigate(-1);
    });
  };

  return (
    <>
      <StatusBar2 Subject="식단입력" />
      <div style={{height: '110px'}} />
      <Subject>식사 시간</Subject>
      <TimeInputStyle
        type="time"
        value={data?.subject || subject}
        onChange={e => setSubject(e.target.value)}
      />
      <div style={{height: '30px'}} />
      <Subject>식단 사진</Subject>
      {pathname === 'write' ? (
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
      ) : data !== undefined ? (
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
      ) : (
        <img src={data.file[0].url} alt="" />
      )}
      <div style={{height: '30px'}} />
      <MealSelecBtn />
      <Subject>식단 일기</Subject>
      <TextArea
        style={{height: '144px'}}
        placeholder="오늘의 식단에 대해 자유롭게 적어보세요."
        value={data?.content}
        onChange={e => setData({...data, content: e.target.value})}
        name="content"
      />
      <div style={{height: '30px'}} />
      <CheckInput>
        <input type="checkbox" id="check2" />
        <label htmlFor="check2" />
        <p>식사 기록을 내 전문가와 공유</p>
      </CheckInput>
      <div style={{height: '30px'}} />
      <ColoredBtn onClick={processSetBoard}>기록하기</ColoredBtn>
      <div style={{height: '30px'}} />
    </>
  );
};

const CheckInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  p {
    font-size: 16px;
    font-weight: 400;
  }
  input {
    display: none;
  }
  input + label {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 1px solid ${prop => prop.theme.btnColor2};
    border-radius: 4px;
    position: relative;
    margin-right: 11.8px;
  }
  input:checked + label::after {
    content: url('/image/Icon feather-check_pink.png');
    font-size: 15px;
    width: 23px;
    height: 16px;
    text-align: center;
    position: absolute;
    left: 7px;
    bottom: 10px;
  }
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export default MealEdit;
