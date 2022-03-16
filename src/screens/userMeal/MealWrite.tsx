import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import {ShortBtn, MiddleBtn, LongBtn} from '../../styles/BtnStyled';
import {TextArea} from '../../styles/InputStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import {RequestImgFileData, RequestMutationSetBoardWrite} from '../../lib/GQL/GQLInterfaces';
import {useRecoilValue} from 'recoil';
import {__session} from '../../lib/atom';
import {
  useMutationSetBoardWrite,
  useQueryForGetBoardWrite,
} from '../../lib/GQL/CommunicationMap';
import {TimeInputStyle} from '../../components/TimeInput';
import ImgInput from '../../components/ImgInput';
import useImgInput from '../../lib/Hook/useImgInput';
import {compressImageFile} from '../../lib/imgApi';

interface Iselect {
  [x: string]: any;
  key: number;
  list: string[];
}

const MealEdit = () => {
  const arr = [
    {
      key: 1,
      list: ['아침', '점심', '저녁', '간식', '야식'],
    },
    {
      key: 2,
      list: ['가벼워요', '적당해요', '배불러요', '과했어요'],
    },
    {
      key: 3,
      list: ['치팅', '일반식', '다이어트식'],
    },
  ];
  const {bo_table, wr_id} = useParams();
  const navigate = useNavigate();
  const session = useRecoilValue(__session);
  const queryResult = useQueryForGetBoardWrite({
    bo_table: bo_table!,
    wr_id: wr_id,
    session: session,
  });
  const [commSetBoardWrite] = useMutationSetBoardWrite();
  const [pick, setPick] = useState<Iselect[]>(arr);
  const [select, setSelect] = useState<string[]>([]);
  const [data, setData] = useState<RequestMutationSetBoardWrite>({
    session: '',
    bo_table: 'food',
    token: '',
    subject: '',
    content: '',
  });
  const {
    fileRef,
    imgFiles,
    isError,
    handleClickOnFileInput,
    handleUploadFile,
    removeSeletedPreview,
  } = useImgInput();

  useEffect(() => {
    if (queryResult.data?.getBoardWrite) {
      let boardInfo = queryResult.data.getBoardWrite.boardInfo;
      if (boardInfo) {
        setData({
          session: session,
          bo_table: bo_table || '',
          token: '',
          wr_id: boardInfo.wr_id,
          subject: boardInfo.subject,
          content: boardInfo.content,
          wr_1: boardInfo.wr_1,
          wr_2: boardInfo.wr_2,
          wr_3: boardInfo.wr_3,
          wr_4: boardInfo.wr_4,
          wr_5: boardInfo.wr_5,
          wr_6: boardInfo.wr_6,
          wr_7: boardInfo.wr_7,
          wr_8: boardInfo.wr_8,
          wr_9: boardInfo.wr_9,
          wr_10: boardInfo.wr_10,
          files: boardInfo.file,
        });
      }
    }
  }, [queryResult.data?.getBoardWrite]);

  useEffect(() => {
    commSetBoardWrite({variables: data}).then(result => {
      if (result.data && result.data.setBoardWrite) navigate(-1);
    });
  }, [commSetBoardWrite]);

  const selectChange = (item: string) => {
    if (!select.includes(item)) return setSelect(select => [...select, item]);
    else return setSelect(select.filter(button => button !== item));
  };

  const processImg = async () => {
    const files = Object.values(imgFiles);
    const empty: RequestImgFileData[] = [];
    for (const file of files) {
      let x = await compressImageFile(file);
      empty.push(x);
    }
    empty.map((item,index)=>(
       
    ))
  };

  const process = () => {
    processImg();
    setData({...data, bo_table: 'food'});
    console.log(data);
  };
  const btnRender = (n: number) => {
    const list: string[] = pick[n].list;
    if (n === 0) {
      return list.map((item, index) => (
        <ShortBtn
          key={index}
          name="wr_5"
          onClick={() => {
            selectChange(item);
            setData({...data, wr_5: item});
          }}
          isActive={select.includes(item) ? true : false}
        >
          {item}
        </ShortBtn>
      ));
    }
    if (n === 1) {
      return list.map((item, index) => (
        <MiddleBtn
          key={index}
          name="wr_2"
          onClick={() => {
            selectChange(item);
            setData({...data, wr_2: item});
          }}
          isActive={select.includes(item) ? true : false}
        >
          {item}
        </MiddleBtn>
      ));
    }
    if (n === 2) {
      return list.map((item, index) => (
        <LongBtn
          key={index}
          name="wr_3"
          onClick={() => {
            selectChange(item);
            setData({...data, wr_3: item});
          }}
          isActive={select.includes(item) ? true : false}
        >
          {item}
        </LongBtn>
      ));
    }
  };

  return (
    <>
      <StatusBar2 Subject="식단입력" />
      <div style={{height: '110px'}} />
      <Subject>식사 시간</Subject>
      <TimeInputStyle
        type="time"
        value={data.subject}
        onChange={e => setData({...data, subject: e.target.value})}
      />
      <div style={{height: '30px'}} />
      <Subject>식단 사진</Subject>
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
      <Subject>타입</Subject>
      <BtnAlign>{btnRender(0)}</BtnAlign>
      <Subject>먹은 양</Subject>
      <BtnAlign>{btnRender(1)}</BtnAlign>
      <Subject>식단 종류</Subject>
      <BtnAlign>{btnRender(2)}</BtnAlign>
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
      <ColoredBtn onClick={process}>기록하기</ColoredBtn>
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
const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  margin-bottom: 30px;
  button {
  }
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export default MealEdit;
