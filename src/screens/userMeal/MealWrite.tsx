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
  RequestSubFileData,
  ResponseQueryGetBoardListBoardList,
} from '../../lib/GQL/GQLInterfaces';
import MealSelecBtn from '../../components/MealSelecBtn';

const MealEdit = () => {
  const session = useRecoilValue(__session);
  const getMe = useRecoilValue(__me);
  const {pathname} = useLocation();
  const {wr_1, wr_id} = useParams();
  const navigate = useNavigate();
  const [getMoment] = useState(moment());

  // 이미지 파일
  const [imgData, setImgData] = useState<{}>({});
  const {
    fileRef,
    imgFiles,
    isError,
    handleClickOnFileInput,
    handleUploadFile,
    removeSeletedPreview,
  } = useImgInput();
  /*   const [mutationFile, setMutationFile] = useState<
    (RequestSubFileData | null)[]
  >([]); */
  const [resFileObj, setResFileObj] = useState<{}>({});
  const [responFile, setResponFile] = useState<string[]>([]);

  // 폼 형식
  const [mutationForm, setMutationForm] = useState<
    RequestMutationSetBoardWrite | undefined
  >(undefined);
  const [responForm, setResponForm] = useState<
    ResponseQueryGetBoardListBoardList | undefined
  >(undefined);

  // 값 상태
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const mealBtnData = useRecoilValue(mealBtnState);
  const [btn, setBtn] = useState<string[]>([]);

  // 쿼리 혹은 뮤테이션
  const [query, queryResult] = useLQueryForGetBoardList();
  const [commSetBoardWrite] = useMutationSetBoardWrite();

  useEffect(() => {
    const boardQueryResult = queryResult.data?.getBoardList.boardList;
    if (boardQueryResult !== undefined) {
      let filtered = boardQueryResult.find(
        item => item.wr_id === Number(wr_id),
      );
      if (filtered) {
        setResponForm(filtered);
        setBtn([filtered.wr_2, filtered.wr_3, filtered.wr_5]);
      } else {
        setMutationForm({
          session: String(session),
          token: String(nanoid()),
          bo_table: 'myFood',
          subject: subject,
          content: content,
          wr_id: Number(nanoid()),
          wr_1: String(getMoment.format('YYYY-MM-DD')),
          wr_6: subject,
          wr_2: mealBtnData.wr_2,
          wr_3: mealBtnData.wr_3,
          wr_5: mealBtnData.wr_5,
        });
      }
    }
  }, [queryResult.data, mealBtnData, imgData, subject]);

  useEffect(() => {
    if (responForm?.file !== undefined) {
      let empty: any[] = [];
      for (let i = 0; i < responForm.file.length; i++) {
        setResFileObj(responForm.file[i].url);
        empty.push(resFileObj);
      }
      setResponFile(empty ?? []);
    }
  }, [responForm]);

  useEffect(() => {
    let queryBoardList: RequestQueryGetBoardList = {
      session: session,
      bo_table: 'myFood',
      search: {
        mb_id: getMe?.mb_id,
        wr_1: wr_1,
      },
    };
    query({variables: queryBoardList});
  }, []);

  /*   useEffect(() => {
    const files = Object.values(imgFiles);
    let empty: any[] = [];
    for (const file of files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result;
        setImgData({fileData: base64data});
        empty.push(imgData);
      };
      setMutationFile(empty);
    }
  }, [imgFiles]);
  
  const removePreview = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const removed = responFile.filter(preview => preview !== target);
    setResponFile(removed);
  }; */

  const processSetBoard = () => {
    commSetBoardWrite({variables: mutationForm}).then(result => {
      console.log(mutationForm);
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
        value={mutationForm?.subject || responForm?.subject}
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
      ) : responForm?.file === undefined ? (
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
        <ImgInput
          fileRef={fileRef}
          name="image-uploader"
          imgFiles={imgFiles}
          isError={isError}
          preview={responFile}
          handleClickOnFileInput={handleClickOnFileInput}
          handleUploadFile={handleUploadFile}
          removeSeletedPreview={removeSeletedPreview}
          hidden
        />
      )}
      <div style={{height: '30px'}} />
      <MealSelecBtn sendChild={btn} />
      <Subject onClick={() => console.log(responForm)}>식단 일기</Subject>
      <TextArea
        style={{height: '144px'}}
        placeholder="오늘의 식단에 대해 자유롭게 적어보세요."
        value={mutationForm?.content || responForm?.content}
        onChange={e => setContent(e.target.value)}
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
