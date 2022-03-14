import {useParams} from 'react-router-dom';
import BaseScreen, {AlignBase} from '../BaseScreen';
<<<<<<< HEAD

const MealEdit = () => {
  const {wr_id} = useParams();
  return (
    <BaseScreen>
      <AlignBase></AlignBase>
=======
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {FoodData} from '../../Dummy/Dummy';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {ResponseQueryGetBoardListBoardList} from '../../lib/GQL/GQLInterfaces';

const MealEdit = () => {
  const getData: ResponseQueryGetBoardListBoardList[] =
    FoodData.getBoardList.boardList;
  const {wr_id} = useParams();
  const [board, setBoard] = useState({});

  useEffect(() => {
    getData.map((item, index) => {
      return getData[index].wr_id === Number(wr_id)
        ? setBoard(getData[index])
        : setBoard({});
    });
    console.log(board);
  }, [getData]);

  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="식단입력" />
        <div style={{height: '110px'}} />
        <Subject>식사 시간</Subject>
        <Time placeholder="시간을 입력해주세요." type="time" />
        <div style={{height: '30px'}} />
        <Subject>식단 사진</Subject>
        <FileAlign>
          <FileRectengle />
          <Preview>
            {/* <div>{getData !== undefined ? board.wr_5 : ''}</div> */}
            <img src="/image/exe.png" alt="" />
          </Preview>
        </FileAlign>
        <div style={{height: '30px'}} />
        <Subject>타입</Subject>
        <BtnAlign>
          <ShortBtn>아침</ShortBtn>
          <ShortBtn>점심</ShortBtn>
          <ShortBtn>저녁</ShortBtn>
          <ShortBtn>간식</ShortBtn>
          <ShortBtn>야식</ShortBtn>
        </BtnAlign>
        <Subject>먹은 양</Subject>
        <BtnAlign>
          <MiddleBtn>가벼워요</MiddleBtn>
          <MiddleBtn>적당해요</MiddleBtn>
          <MiddleBtn>배불러요</MiddleBtn>
          <MiddleBtn>과했어요</MiddleBtn>
        </BtnAlign>
        <Subject>식단 종류</Subject>
        <BtnAlign>
          <LongBtn>치팅</LongBtn>
          <LongBtn>일반식</LongBtn>
          <LongBtn>다이어트식</LongBtn>
        </BtnAlign>
        <Subject>식단 일기</Subject>
        <TextInput placeholder="오늘의 식단에 대해 자유롭게 적어보세요." />
        <div style={{height: '30px'}} />
        <CheckInput>
          <input type="checkbox" id="check2" />
          <label htmlFor="check2" />
          <p>식사 기록을 내 전문가와 공유</p>
          <div style={{flex: 1}} />
        </CheckInput>
        <LinkStyle to="/user/meal">
          <Btn>기록하기</Btn>
        </LinkStyle>
      </AlignBase>
>>>>>>> df6cce6af795814bedb480d5e743b95e26677bec
    </BaseScreen>
  );
};

export default MealEdit;
