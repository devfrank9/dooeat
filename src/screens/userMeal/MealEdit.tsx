import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import {FileRectengle} from '../../styles/FileInputStyled';
import {Time, TextArea} from '../../styles/InputStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {useLocation, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {
  RequestMutationSetBoardWrite,
  RequestQueryGetBoardList,
} from '../../lib/GQL/GQLInterfaces';
import {useRecoilValue} from 'recoil';
import {mealBtnState, __me, __session} from '../../lib/atom';
import {
  useLQueryForGetBoardList,
  useMutationSetBoardWrite,
} from '../../lib/GQL/CommunicationMap';
import moment from 'moment';
import {nanoid} from 'nanoid';
import MealSelecBtn from '../../components/MealSelecBtn';

const MealEdit = () => {
  const {wr_id} = useParams();
  const session = useRecoilValue(__session);
  const [board, setBoard] = useState({});
  const [commSetBoardWrite] = useMutationSetBoardWrite();
  const [data, setData] = useState<RequestMutationSetBoardWrite | any>({});
  const [queryData, queryDataResult] = useLQueryForGetBoardList();
  const mealBtnData = useRecoilValue(mealBtnState);
  const [file, setFile] = useState<string[]>([]);
  const [subject, setSubject] = useState('');
  const getMe = useRecoilValue(__me);
  const [getMoment] = useState(moment());
  const [imgData, setImgData] = useState<{}>({
    fileData: '',
    fileName: '',
  });

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
    console.log(data);
  }, []);

  useEffect(() => {
    const boardQueryResult = queryDataResult.data?.getBoardList.boardList;
    if (boardQueryResult !== undefined) {
      for (let i = 0; i < boardQueryResult.length; i++) {
        if (boardQueryResult[i].wr_id === Number(wr_id)) {
          return setData(boardQueryResult[i]);
        } else {
          setData({});
          return;
        }
      }
    }
  }, [queryDataResult]);

  return (
    <>
      <StatusBar2 Subject="식단입력" />
      <div style={{height: '110px'}} />
      <Subject>식사 시간</Subject>
      <Time
        type="time"
        value={data?.subject || subject}
        onChange={e => setSubject(e.target.value)}
      />
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
      <MealSelecBtn />
      <Subject>식단 일기</Subject>
      <TextInput
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
      <LinkStyle to="/user/meal">
        <Btn>기록하기</Btn>
      </LinkStyle>
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
const Btn = styled(ColoredBtn)`
  margin: 30px 0;
`;
const TextInput = styled(TextArea)`
  height: 144px;
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
const Preview = styled.div`
  position: relative;
  display: block;
  min-width: 150px;
  width: 47.022%;
  padding-bottom: 47.022%;
  border: 1px solid ${props => props.theme.btnColor2};
  border-radius: 10px;
  background: url('/image/321.png') no-repeat 50% 50%;
  background-size: cover;
  div {
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
  }
  img {
    position: absolute;
    width: 18px;
    height: 18px;
    right: -4px;
    top: -4px;
  }
`;

export default MealEdit;
