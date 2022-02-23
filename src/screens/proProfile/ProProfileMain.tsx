import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Navigation2} from '../../components/Navigation';
import {StatusBar} from '../../components/StatusBar';
import Switch from '../../components/Toggle';
import BaseScreen, {AlignBase} from '../BaseScreen';

const ProProfileMain = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar
          Subject="프로필"
          Img="/image/myInfo.png"
          LinkTo="/pro/mypage"
        />
        <BackImg>
          <p>등록된 소개 사진이 없습니다.</p>
          <p>우측 하단 "수정"에서</p>
          <p>데이터를 입력해주세요.</p>
        </BackImg>
        <ProfileImg>
          <img src="/image/Icon material-person.png" alt="" />
        </ProfileImg>
        <ContentAlgin>
          <TextAlign>
            <p>#헬스 #크로스핏</p>
            <p>홍길동 전문가</p>
            <p>한줄 소개를 등록 전입니다.</p>
            <div style={{height: '40px'}} />
          </TextAlign>
        </ContentAlgin>
        <InfoAlign>
          <div style={{marginBottom: '12px'}}>
            <PinkDiv>고용횟수</PinkDiv>
            <p style={{color: 'rgb(151,151,151)'}}>아직 고용 전입니다.</p>
          </div>
          <div style={{marginBottom: '12px'}}>
            <PinkDiv>활동지역</PinkDiv>
            <p>서울특별시 용산구</p>
          </div>
          <div style={{marginBottom: '12px'}}>
            <PinkDiv>상담시간</PinkDiv>
            <p>오전 10시 ~ 오후 9시</p>
          </div>
          <div style={{marginBottom: '31px'}}>
            <PinkDiv>사이트</PinkDiv>
            <p>Instagram.com/ioplanit</p>
          </div>
        </InfoAlign>
        <CareerAlign>
          <Subject>경력 사항</Subject>
          <ul style={{margin: '0 10px'}}>
            <ListStyle>경력 사항 등록 전입니다.</ListStyle>
          </ul>
          <Subject>자격 사항</Subject>
          <ul style={{margin: '0 10px'}}>
            <ListStyle>경력 사항 등록 전입니다.</ListStyle>
          </ul>
          <div style={{height: '30px'}} />
        </CareerAlign>
        <Switch></Switch>
        <ReviewAlign>
          <ReviewTop>
            <div>
              <p>리뷰</p>
              <p>0</p>
            </div>
            <button>
              <LinkStyle to="/pro/profile/edit">리뷰 작성</LinkStyle>
            </button>
          </ReviewTop>
          <Review>
            <p style={{marginTop: '12px'}}>작성된 리뷰가 없습니다.</p>
          </Review>
        </ReviewAlign>
        <BtnAlign>
          <EditBtn to={'/pro/profile/edit'} />
        </BtnAlign>
        <div style={{height: '130px'}} />
        <Navigation2 />
      </AlignBase>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 90px;
  width: 100%;
  max-width: 480px;
`;
const EditBtn = styled(Link)`
  width: 48px;
  height: 48px;
  background: url('/image/Icon awesome-edit.png') no-repeat 50% 50%;
  background-color: ${prop => prop.theme.mainColor};
  border: none;
  border-radius: 24px;
  position: absolute;
  right: 29px;
  bottom: 0;
`;
const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
  p {
    font-size: 15px;
    line-height: 24px;
    font-weight: 300;
    color: ${prop => prop.theme.fontColor2};
  }
  margin-top: 22px;
`;
const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${prop => prop.theme.pointColor1};
  font-size: 14px;
  font-weight: 600;
`;
const CareerAlign = styled.div`
  border-bottom: 1px solid ${prop => prop.theme.btnColor2};
  margin-bottom: 26px;
`;
const ReviewTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: 88px;
    height: 32px;
    border: 1px solid ${prop => prop.theme.pointColor1};
    border-radius: 6px;
    background-color: inherit;
  }
  div {
    display: flex;
    align-items: center;
    p:first-child {
      font-size: 18px;
      font-weight: 600;
    }
    p:last-child {
      margin-left: 10px;
      font-family: ${prop => prop.theme.roboto};
      color: ${prop => prop.theme.mainColor};
    }
  }
`;
const ReviewAlign = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListStyle = styled.li`
  background: url('/image/circle20.png') no-repeat 0% 50%;
  background-size: 8px 8px;
  padding-left: 20px;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 400;
  color: ${prop => prop.theme.fontColor2};
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 12px;
`;
const InfoAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  div {
    display: flex;
    align-items: center;
    p {
      margin-left: 13px;
      font-size: 15px;
    }
  }
  border-bottom: 1px solid ${prop => prop.theme.btnColor2};
`;
const PinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 34px;
  border: 1px solid ${prop => prop.theme.pointColor1};
  border-radius: 17px;
  color: ${prop => prop.theme.pointColor1};
  font-size: 14px;
  font-weight: 500;
`;
const TextAlign = styled.div`
  text-align: center;
  p:first-child {
    color: ${prop => prop.theme.mainColor};
    font-size: 14px;
    font-weight: 300;
    margin-top: 86px;
  }
  p:nth-child(2) {
    font-size: 18px;
    font-weight: 600;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  p:nth-child(3) {
    font-size: 15px;
    font-weight: 300;
    color: ${prop => prop.theme.fontColor2};
  }
`;
const ContentAlgin = styled.div`
  position: relative;
  bottom: 44px;
  z-index: 3;
  background-color: white;
  margin: 0 -28px;
  border-radius: 34px 34px 0 0;
  border-bottom: 1px solid ${prop => prop.theme.btnColor2};
`;
const ProfileImg = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 55px;
  top: 342px;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background-color: ${prop => prop.theme.pointColor2};
  img {
    position: absolute;
    width: 60px;
    height: 60px;
    left: 50%;
    transform: translateX(-50%);
    top: 27px;
  }
`;
const BackImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 -28px;
  height: 440px;
  background-color: rgb(245, 245, 245);
  z-index: -6;
  background-size: cover;
  p {
    font-size: 14px;
    font-weight: 300;
    color: ${prop => prop.theme.fontColor2};
    line-height: 25px;
  }
`;

export default ProProfileMain;
