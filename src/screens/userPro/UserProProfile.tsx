import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {StatusBar} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const UserProProfile = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar Subject="프로필" />
        <div style={{position: 'relative', width: '100%'}}>
          <BackImg />
        </div>
        <div style={{position: 'relative'}}>
          <ProfileImg src="/image/people.png" alt="" />
        </div>
        <ContentAlgin>
          <button />
          <TextAlign>
            <p>#헬스 #크로스핏</p>
            <p>홍길동 전문가</p>
            <p>건강한 바디프로필 문화를 선도하는</p>
            <p>경력 10년의 배테랑 전문가 입니다.</p>
            <SearchLink to="/user/pro/profile/story">
              전문가 스토리 보러가기 {`>`}
            </SearchLink>
            <div style={{height: '42px'}} />
          </TextAlign>
        </ContentAlgin>
        <InfoAlign>
          <div style={{marginBottom: '12px'}}>
            <PinkDiv>고용횟수</PinkDiv>
            <p>10회 고용</p>
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
            <ListStyle>2020 서울시장 연합 -80 1위</ListStyle>
            <ListStyle>2020 아이오플래닛 무제한급 2위</ListStyle>
          </ul>
          <Subject>자격 사항</Subject>
          <ul style={{margin: '0 10px'}}>
            <ListStyle>마스터 트레이너 자격증</ListStyle>
            <ListStyle>스포츠테이핑 2급 자격증</ListStyle>
            <ListStyle>생활체육지도사 자격증 2급</ListStyle>
          </ul>
          <div style={{height: '30px'}} />
        </CareerAlign>
        <ReviewAlign>
          <ReviewTop>
            <div>
              <p>리뷰</p>
              <p>120</p>
            </div>
            <button>
              <LinkStyle to="/user/pro/review">리뷰 작성</LinkStyle>
            </button>
          </ReviewTop>
          <Reviewer>
            <p>닉네임</p>
            <p>2021/12/30</p>
          </Reviewer>
          <Review>
            <img src="/image/follows me.png" alt="" />
            <p style={{marginTop: '12px'}}>
              나의 신체 특성부터 분석을 해주시고 나에게 맞는
            </p>
            <p>운동을 추천해주시기 때문에. 단시간에 높은 효과</p>
            <p>를 얻을 수 있었습니다.</p>
          </Review>
        </ReviewAlign>
        <BtnAlign>
          <BtnLinkStyle to="/user/pro/apply">
            <button>코칭 신청하기</button>
          </BtnLinkStyle>
          <BtnLinkStyle2 to="/user/pro/consult">
            <button>1:1 상담하러 가기</button>
          </BtnLinkStyle2>
        </BtnAlign>
      </AlignBase>
    </BaseScreen>
  );
};
const BtnLinkStyle = styled(Link)`
  text-decoration: none;
  color: ${prop => prop.theme.pointColor2};
  button {
    background-color: white;
    color: ${prop => prop.theme.mainColor};
  }
`;
const BtnLinkStyle2 = styled(BtnLinkStyle)`
  text-decoration: none;
  button {
    background-color: ${prop => prop.theme.mainColor};
    color: white;
  }
`;
const BtnAlign = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  button {
    border: 1px solid ${prop => prop.theme.mainColor};
    flex: 1;
    width: 156px;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
  }
  margin-bottom: 30px;
`;
const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
  p {
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
  }
  margin-bottom: 30px;
`;
const Reviewer = styled.div`
  margin: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p:first-child {
    font-size: 16px;
    font-weight: 500;
  }
  p:last-child {
    font-size: 14px;
    font-family: ${prop => prop.theme.roboto};
    color: ${prop => prop.theme.fontColor2};
  }
  margin-bottom: 12px;
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
    margin-bottom: 36px;
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
    margin-bottom: 36px;
  }
`;
const ReviewAlign = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${prop => prop.theme.btnColor2};
  margin-bottom: 40px;
`;
const ListStyle = styled.li`
  background: url('/image/circle20.png') no-repeat 0% 50%;
  background-size: 8px 8px;
  padding-left: 20px;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 400;
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
const SearchLink = styled(Link)`
  color: ${prop => prop.theme.fontColor2};
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  opacity: 0.8;
  text-decoration: none;
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
  p:nth-child(3),
  p:nth-child(4) {
    font-size: 15px;
    font-weight: 400;
  }
  p:nth-child(4) {
    margin-bottom: 17px;
  }
`;
const ContentAlgin = styled.div`
  position: relative;
  bottom: 44px;
  z-index: 3;
  background-color: white;
  margin: 0 -28px;
  border-radius: 34px 34px 0 0;
  button {
    position: absolute;
    width: 40px;
    height: 40px;
    background: url('/image/Icon awesome-bookmark.png') no-repeat 50% 50%;
    border: none;
    right: 30px;
    top: 30px;
  }
  border-bottom: 1px solid ${prop => prop.theme.btnColor2};
`;
const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  bottom: -5px;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
`;
const BackImg = styled.div`
  margin: 0 -28px;
  height: 440px;
  z-index: -6;
  background-size: cover;
`;

export default UserProProfile;
