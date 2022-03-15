import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import {FileInput, FileRectengle} from '../../styles/FileInputStyled';
import {ShortBtn, MiddleBtn, LongBtn} from '../../styles/BtnStyled';
import {Time, TextArea} from '../../styles/InputStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';
import {ColoredBtn} from '../../styles/BtnStyled';
import {useNavigate, useParams} from 'react-router-dom';
import React, {useState} from 'react';
import {ResponseQueryGetBoardListBoardList} from '../../lib/GQL/GQLInterfaces';

interface Iselect {
  [x: string]: any;
  key: number;
  list: string[];
}

const MealEdit = () => {
  const navigate = useNavigate();
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
  const [pick, setPick] = useState<Iselect[]>(arr);
  const [select, setSelect] = useState<string[]>([]);
  const [fileUrl, setFileUrl] = useState<string[]>([]);
  const [data, setData] = useState({
    subject: '',
    content: '',
    wr_5: '',
    wr_2: '',
    wr_3: '',
    file: {},
  });

  const handleChange = (event: any) => {
    const {name, value} = event.target;
    setData({...data, [name]: value});
  };
  const processImage = (e: any) => {
    const imageUrlList: string[] = [...fileUrl];
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    imageUrlList.push(imageUrl);
    setFileUrl(imageUrlList);
  };
  const handleDeleteImage = (id: number) => {
    setFileUrl(fileUrl.filter((_, index) => index !== id));
  };
  const renderFile = () => {
    return (
      <>
        {fileUrl.length === 0 ? (
          <>
            <FileInput
              type="file"
              id="file1"
              onChange={e => {
                processImage(e);
              }}
              accept="image/*"
            />
            <FileRectengle htmlFor="file1" />
          </>
        ) : (
          <>
            <FileInput
              type="file"
              id="file1"
              onChange={e => {
                processImage(e);
              }}
              accept="image/*"
            />
            <UploadImgContainer>
              {fileUrl.map((image: string, id: number) => (
                <ImgContainer key={id}>
                  <div>{}</div>
                  <UploadedImg src={fileUrl[0]} alt={`${image}-${id}`} />
                  <Delete onClick={() => handleDeleteImage(id)} />
                </ImgContainer>
              ))}
            </UploadImgContainer>
          </>
        )}
      </>
    );
  };
  const selectChange = (item: string) => {
    if (!select.includes(item)) return setSelect(select => [...select, item]);
    else return setSelect(select.filter(button => button !== item));
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
            console.log(select);
            console.log(data);
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
            !select.includes(item)
              ? setSelect(select => [...select, item])
              : setSelect(select.filter(button => button !== item));
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
            !select.includes(item)
              ? setSelect(select => [...select, item])
              : setSelect(select.filter(button => button !== item));
          }}
          isActive={select.includes(item) ? true : false}
        >
          {item}
        </LongBtn>
      ));
    }
  };

  const process = () => {
    console.log(data);
    navigate(-1);
  };
  return (
    <>
      <StatusBar2 Subject="식단입력" />
      <div style={{height: '110px'}} />
      <Subject>식사 시간</Subject>
      <Time
        placeholder="시간을 입력해주세요."
        type="time"
        value={data.subject}
      />
      <div style={{height: '30px'}} />
      <Subject>식단 사진</Subject>
      <FileAlign>{renderFile()}</FileAlign>
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
        value={data.content}
        onChange={e => handleChange(e)}
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

const ImgContainer = styled.div`
  position: relative;
  display: block;
  border-radius: 10px;
  margin-bottom: 21px;
  width: 150px;
  div:first-child {
    position: absolute;
    width: 68px;
    height: 32px;
    border-radius: 16px;
    background-color: rgb(51, 51, 51, 0.6);
    left: 12px;
    top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${prop => prop.theme.fontColor3};
    font-size: 15px;
    font-weight: 300;
    z-index: 3;
  }
`;
const UploadedImg = styled.img`
  position: relative;
  display: block;
  width: 150px;
  border-radius: 10px;
`;
const Delete = styled.div`
  background: url('/image/imageDelete.png') no-repeat 50% 50%;
  width: 18px;
  height: 18px;
  position: absolute;
  top: -4px;
  right: -4px;
`;
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
const FileAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;
const UploadImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default MealEdit;
