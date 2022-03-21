import {StatusBar} from '../../components/StatusBar';
import DateSelect from '../../components/DateSelect';
import * as Styled from '../../styles/userMeal/styled';
import {useEffect, useState} from 'react';
import moment from 'moment';
import {RectPrev} from './Rectengle';
import {useNavigate, useParams} from 'react-router-dom';
import {
  RequestQueryGetBoardList,
  ResponseQueryGetBoardListBoardList,
} from '../../lib/GQL/GQLInterfaces';
import styled from 'styled-components';
import {useLQueryForGetBoardList} from '../../lib/GQL/CommunicationMap';
import {__me, __session} from '../../lib/atom';
import {useRecoilValue} from 'recoil';
import {WaterBlock} from '../../components/WaterBlock';

const MealMain = () => {
  let params = useParams();
  const session = useRecoilValue(__session);
  const [getMoment, setMoment] = useState(moment());
  const nowDate = getMoment.format('YYYY-MM-DD');
  const getMe = useRecoilValue(__me);
  const navigate = useNavigate();

  const [queryData, queryDataResult] = useLQueryForGetBoardList();
  const [userData, setUserData] = useState<
    ResponseQueryGetBoardListBoardList[]
  >([]);

  useEffect(() => {
    const foodBoardData = queryDataResult.data?.getBoardList.boardList;
    if (foodBoardData !== undefined) {
      foodBoardData.map((item, index) => {
        foodBoardData[index].wr_1 === nowDate
          ? setUserData(foodBoardData)
          : setUserData([]);
      });
    }
  }, [queryDataResult, navigate]);

  useEffect(() => {
    let queryFoodBoard: RequestQueryGetBoardList = {
      bo_table: 'myFood',
      session: session,
      search: {
        mb_id: getMe?.mb_id,
        wr_1: nowDate,
      },
    };
    queryData({variables: queryFoodBoard});
    console.log(userData);
  }, [getMoment]);

  return (
    <>
      <StatusBar Subject="오늘" Img="/image/myInfo.png" LinkTo="/user/mypage" />
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
      <Styled.Subject>식단 입력</Styled.Subject>
      <Styled.RectengleAlign>
        <Styled.FileAlign>
          {userData.length === 0 ? (
            [...Array(2)].map((data, index) => (
              <FileRectengle onClick={() => navigate('write')} key={index} />
            ))
          ) : (
            <>
              {userData.map((data, index) => (
                <RectPrev
                  link={`${data.wr_id}`}
                  key={index}
                  img={data.file[0].url}
                  text={data.wr_2}
                />
              ))}
              <FileRectengle onClick={() => navigate('write')} />
            </>
          )}
        </Styled.FileAlign>
      </Styled.RectengleAlign>
      <div style={{height: '32px'}} />
      <Styled.Subject>하루 물 섭취 권장량 2L</Styled.Subject>
      <WaterBlock />
      <div style={{height: '135px'}} />
    </>
  );
};

const FileRectengle = styled.div`
  display: block;
  min-width: 150px;
  width: 47.022%;
  padding-bottom: 47.022%;
  border: 1px solid ${props => props.theme.btnColor2};
  border-radius: 10px;
  background: url('/image/IIcon feather-plus-circle.png') no-repeat 50% 50%;
`;

export default MealMain;
