import {StatusBar} from '../../components/StatusBar';
import DateSelect from '../../components/DateSelect';
import * as Styled from '../../styles/userMeal/styled';
import {useEffect, useState} from 'react';
import {FoodData} from '../../Dummy/Dummy';
import moment from 'moment';
import {RectPrev} from './Rectengle';
import {Link, useParams} from 'react-router-dom';
import {ResponseQueryGetBoardListBoardList} from '../../lib/GQL/GQLInterfaces';
import styled from 'styled-components';
import {useQueryForGetBoardList} from '../../lib/GQL/CommunicationMap';
import {__me, __session} from '../../lib/atom';
import {useRecoilValue} from 'recoil';

const MealMain = () => {
  let params = useParams();
  const session = useRecoilValue(__session);
  const [water, setWater] = useState(0);
  const [getMoment, setMoment] = useState(moment());
  const [select, setSelect] = useState<number[]>([]);
  const nowDate = getMoment.format('YYYY-MM-DD');
  const getMe = useRecoilValue(__me);

  const [userData, setUserData] = useState<
    ResponseQueryGetBoardListBoardList[] | any
  >([]);
  const queryResult = useQueryForGetBoardList({
    session: session,
    bo_table: 'myFood',
    search: {
      mb_id: getMe?.mb_id,
      wr_1: nowDate,
    },
  });

  useEffect(() => {
    let boardResult = queryResult.data?.getBoardList.boardList;
    if (boardResult !== undefined) {
      for (let i = 0; i < boardResult.length; i++) {
        if (boardResult[i].wr_1 === nowDate) setUserData(boardResult);
        else setUserData([...userData]);
      }
    }
  }, [getMoment]);

  const waterRender = () => {
    return (
      <Container>
        <TextAlign>
          <p>{water}</p>
          <p>L</p>
        </TextAlign>
        <Hr />
        <Notice>한 컵당 250ml</Notice>
        <AlignGlass>
          {[...Array(8)].map((item, index) => (
            <GlassWater
              key={index}
              onClick={() => {
                !select.includes(item)
                  ? setSelect(select => [...select, item])
                  : setSelect(select.filter(button => button !== item));
              }}
              isActive={select.includes(index) ? true : false}
            />
          ))}
        </AlignGlass>
      </Container>
    );
  };

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
              <FileRectengle to={`${nowDate}/${index + 1}`} key={index} />
            ))
          ) : (
            <>
              {userData.map((data: any, index: any) => (
                <RectPrev
                  link={`${data.wr_1}/${data.wr_id}`}
                  key={data.wr_id}
                  img={''}
                  text={data.wr_2}
                />
              ))}
              <FileRectengle to="write" />
            </>
          )}
        </Styled.FileAlign>
      </Styled.RectengleAlign>
      <div style={{height: '32px'}} />
      <Styled.Subject>하루 물 섭취 권장량 2L</Styled.Subject>
      {waterRender()}
      <div style={{height: '135px'}} />
    </>
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
const AlignGlass = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 35px;
  button {
    margin: 0 10px;
    margin-bottom: 20px;
  }
  margin-bottom: 10px;
`;
const GlassWater = styled.button<{isActive?: boolean}>`
  width: 40px;
  height: 52px;
  background: ${prop =>
    !prop.isActive
      ? "url('/image/empty glass.png') no-repeat 50% 50%"
      : "url('/image/fill glass.png') no-repeat 50% 50%"};
  border: none;
`;
const Notice = styled.p`
  font-size: 14px;
  color: ${prop => prop.theme.mainColor};
  text-align: center;
  margin-bottom: 10px;
`;
const Hr = styled.hr`
  width: 160px;
  opacity: 0.5;
`;
const TextAlign = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin-top: 24px;
  font-family: ${prop => prop.theme.roboto};
  p:last-child {
    position: relative;
    left: 10px;
    top: 12px;
    font-size: 20px;
    align-items: flex-start;
  }
`;
const Container = styled.div`
  display: block;
  border: 1px solid rgb(223, 223, 223);
  box-shadow: 0pt 3pt 10pt 0pt rgb(0, 0, 0, 0.1);
  border-radius: 12px;
`;

export default MealMain;
