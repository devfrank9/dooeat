import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {SelectDate} from '../../components/SelectDate';
import {StatusBar2} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const ProManageLecture = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="기록공유" />
        <div style={{height: '71px'}} />
        <BackImg />
        <DateAlign>
          <SelectDate backColor="white" />
          <div>
            <Link to="gram">
              <button />
            </Link>
            <Link to="write-calender">
              <button
                style={{
                  background: "url('/image/calender.png') no-repeat 50% 50%",
                }}
              />
            </Link>
          </div>
        </DateAlign>
        <ConnectBanner>
          <ImgAlign>
            <img src="/image/hi.png" alt="" />
            <p>홍길동</p>
            <p>전문가</p>
          </ImgAlign>
          <div
            style={{
              position: 'absolute',
              width: '70px',
              border: '1px solid rgb(239,144,167)',
              top: '54px',
            }}
          />
          <div style={{width: '50px'}} />
          <ImgAlign>
            <img src="/image/body.png" alt="" />
            <p>홍길동</p>
            <p>회원님</p>
          </ImgAlign>
        </ConnectBanner>
        <HalfCircle></HalfCircle>
        <ContentsAlign>
          <Excercise>
            <Head>운동</Head>
            <SubjectAlign>
              <Subject>수업</Subject>
              <AllLink to="">전체보기</AllLink>
            </SubjectAlign>
            <LectureEdit to="/pro/manage/lecture/write">
              수업 수정하기
            </LectureEdit>
            <Subject>하체 운동</Subject>
            <div style={{height: '12px'}} />
            <BtnAlign>
              <ExerciseKind>스쿼트</ExerciseKind>
              <ExcerciseInfo>100kg, 20회, 4SET</ExcerciseInfo>
            </BtnAlign>
            <BtnAlign>
              <ExerciseKind>런지</ExerciseKind>
              <ExcerciseInfo>80kg, 20회, 4SET</ExcerciseInfo>
            </BtnAlign>
            <div style={{height: '18px'}} />
            <Subject>유산소 운동</Subject>
            <div style={{height: '12px'}} />
            <BtnAlign>
              <ExerciseKind>줄넘기</ExerciseKind>
              <ExcerciseInfo>10분</ExcerciseInfo>
            </BtnAlign>
            <SubjectAlign>
              <Subject>개인 운동</Subject>
              <AllLink to="all">전체보기</AllLink>
            </SubjectAlign>
            <div style={{height: '26px'}} />
            <Subject>하체 운동</Subject>
            <div style={{height: '12px'}} />
            <BtnAlign>
              <ExerciseKind>스쿼트</ExerciseKind>
              <ExcerciseInfo>100kg, 20회, 4SET</ExcerciseInfo>
            </BtnAlign>
            <BtnAlign>
              <ExerciseKind>런지</ExerciseKind>
              <ExcerciseInfo>80kg, 20회, 4SET</ExcerciseInfo>
            </BtnAlign>
            <div style={{height: '18px'}} />
            <Subject>유산소 운동</Subject>
            <div style={{height: '12px'}} />
            <BtnAlign>
              <ExerciseKind>줄넘기</ExerciseKind>
              <ExcerciseInfo>10분</ExcerciseInfo>
            </BtnAlign>
          </Excercise>
        </ContentsAlign>
        <ContentsAlign
          style={{
            height: '465px',
            maxHeight: '600px',
          }}
        >
          <Excercise>
            <Head>식단</Head>
            <FileAlign>
              <Preview>
                <div>점심</div>
                <img src="/image/smile.png" alt="" />
              </Preview>
              <Preview>
                <div>점심</div>
                <img src="/image/smile.png" alt="" />
              </Preview>
              <Preview>
                <div>점심</div>
                <img src="/image/smile.png" alt="" />
              </Preview>
              <Preview>
                <div>점심</div>
                <img src="/image/smile.png" alt="" />
              </Preview>
            </FileAlign>
          </Excercise>
          <TodayGram>
            <p>오늘의 몸무게</p>
            <input type="text" value="55" />
            <p>kg</p>
          </TodayGram>
        </ContentsAlign>
        <ContentsAlign
          style={{
            height: '236px',
            maxHeight: '600px',
          }}
        >
          <Excercise>
            <Head>
              <p>코멘트</p>
              <div>
                <Link to="commEdit">수정</Link>
                <p style={{margin: '0 5px'}}>|</p>
                <p>삭제</p>
              </div>
            </Head>
            <Comment>
              <div>
                저녁에 좀 더 드시고, 점심 양을 줄이는 걸로 해봅시다. 운동은
                지금처럼 하시면 될 것 같아요. 다음 수업 전까지 2회차 복습합시다.
              </div>
            </Comment>
          </Excercise>
        </ContentsAlign>
        <ContentsAlign
          style={{
            height: '236px',
            maxHeight: '600px',
          }}
        >
          <Excercise>
            <Head>
              <p>궁금한점</p>
            </Head>
            <Comment>
              <div>
                데드리프트 운동을 했는데, 알려주신 부위가 아니라 다른부위가
                당겨요. 다이어트 음식으로만 먹었는데 살이 안빠져요.
              </div>
            </Comment>
          </Excercise>
        </ContentsAlign>
      </AlignBase>
    </BaseScreen>
  );
};
const Comment = styled.div`
  height: 144px;
  border: 1px solid rgb(252, 216, 224);
  margin-top: 15px;
  border-radius: 8px;
  font-size: 15px;
  line-height: 22px;
  div:last-child {
    margin-left: 21px;
    margin-right: 18px;
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
  }
`;
const TodayGram = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  p:nth-child(1) {
    font-size: 15px;
    line-height: 22px;
  }
  input {
    width: 140px;
    height: 52px;
    text-align: center;
    margin: 0 8px;
    border: 1px solid rgb(223, 223, 223);
    font-size: 16px;
    line-height: 24px;
    border-radius: 8px;
  }
  p:last-child {
    font-family: roboto;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    color: ${prop => prop.theme.mainColor};
  }
  margin-bottom: 30px;
`;
const Preview = styled.div`
  position: relative;
  display: block;
  min-width: 139px;
  width: 47.022%;
  height: 139px;
  border: 1px solid ${props => props.theme.btnColor2};
  border-radius: 10px;
  background: url('/image/321.png') no-repeat 50% 50%;
  background-size: cover;
  margin-bottom: 8px;
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
    width: 32px;
    height: 32px;
    right: 8px;
    bottom: 8px;
  }
`;
const FileAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    margin-bottom: 12px;
  }
`;
const ExcerciseInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${prop => prop.theme.fontColor1};
  border-radius: 8px;
  width: 226px;
  height: 48px;
  border: 1px solid ${prop => prop.theme.pointColor2};
  font-size: 15px;
  flex: 1;
`;
const ExerciseKind = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${prop => prop.theme.mainColor};
  background-color: ${prop => prop.theme.pointColor3};
  border-radius: 8px;
  width: 85px;
  height: 48px;
  border: 1px solid ${prop => prop.theme.pointColor2};
  margin-right: 8px;
  font-size: 15px;
`;
const BtnAlign = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 12px;
`;
const LectureEdit = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border: 0.1rem solid ${props => props.theme.pointColor2};
  border-radius: 8px;
  box-sizing: border-box;
  background-color: ${props => props.theme.pointColor3};
  color: ${props => props.theme.mainColor};
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  a:visited {
    text-decoration: none;
  }
  margin-top: 17px;
  margin-bottom: 30px;
`;
const AllLink = styled(Link)`
  font-size: 13px;
  line-height: 19px;
  color: rgb(151, 151, 151);
  text-decoration: none;
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
`;
const SubjectAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid rgb(245, 245, 245);
  height: 57px;
  font-size: 16px;
  font-weight: 700;
  color: ${prop => prop.theme.mainColor};
  line-height: 24px;
  a {
    color: rgb(151, 151, 151);
    text-decoration: none;
    &:visited {
      text-decoration: none;
    }
  }
  div:nth-child(2) {
    display: flex;
    font-size: 13px;
    line-height: 19px;
    color: rgb(151, 151, 151);
    font-weight: 400;
    margin-right: 9px;
  }
`;
const Excercise = styled.div`
  margin: 0 16px;
`;
const ContentsAlign = styled.div`
  margin-top: 30px;
  height: 840px;
  border-radius: 12px;
  border: 1px solid rgb(223, 223, 223);
`;
const HalfCircle = styled.div``;
const ImgAlign = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    z-index: 3;
    width: 58px;
    height: 58px;
    border-radius: 30px;
    border: 2px solid ${prop => prop.theme.mainColor};
    margin-bottom: 10px;
    background-color: white;
  }
  p:nth-child(2) {
    font-size: 16px;
    line-height: 19px;
  }
  p:nth-child(3) {
    font-size: 13px;
    line-height: 19px;
    color: ${prop => prop.theme.fontColor2};
  }
`;
const ConnectBanner = styled.div`
  position: relative;
  height: 157px;
  background-color: white;
  border-radius: 12px;
  margin-top: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DateAlign = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  div:last-child {
    button {
      width: 44px;
      height: 44px;
      border: none;
    }
    button:nth-child(1) {
      background: url('/image/gram.png') no-repeat 50% 50%;
    }
    button:nth-child(5) {
    }
  }
`;
const BackImg = styled.div`
  position: absolute;
  width: 100%;
  max-width: 480px;
  margin: 0 -28px;
  height: 330px;
  z-index: -6;
  background-color: rgb(245, 245, 245);
  background-size: cover;
  top: 48px;
`;

export default ProManageLecture;
