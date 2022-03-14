import {Link, useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Navigation} from '../../components/Navigation';
import {StatusBar} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {MemberDataLv3} from '../../Dummy/Dummy';

SwiperCore.use([Pagination]);

const UserProMain = () => {
  const navigate = useNavigate();
  let params = useParams();
  const data = MemberDataLv3.getMe;
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar
          Subject="전문가"
          Img="/image/myInfo.png"
          LinkTo="/user/mypage"
        />
        <div style={{height: '110px'}} />
        <Search placeholder="원하시는 전문가를 검색해보세요." />
        <Subject>추천 전문가</Subject>
        <div style={{display: 'flex'}}>
          <Swiper
            style={{width: '100%'}}
            spaceBetween={20}
            slidesPerView={1.1}
            pagination={{clickable: true}}
          >
            {[...Array(3)].map((item, index) => (
              <SwiperSlide>
                <RecommendPro>
                  <button />
                  <div onClick={() => navigate(':wr_id')}>
                    <img
                      src={data.mb_img}
                      alt=""
                      style={{borderRadius: '40px'}}
                    />
                  </div>
                  <p>#헬스 # 크로스핏</p>
                  <p>{data.mb_name}전문가</p>
                  <p>건강한 바디프로필 문화를 선도하는</p>
                  <p>경력 10년의 배테랑 전문가 입니다.</p>
                  <p>{data.mb_addr1}</p>
                </RecommendPro>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <RecommendAlign>
          <Subject style={{margin: 0}}>100명의 전문가</Subject>
          <select>
            <option>최신순</option>
          </select>
        </RecommendAlign>
        <ProCard>
          <Card>
            <Link to="/user/pro/profile">
              <img src="/image/people.png" alt="" />
            </Link>
            <button />
            <CardTextAlign>
              <p>홍길동 전문가</p>
              <p>건강한 바디프로필 문화를 선도하는</p>
              <p>경력 10년의 배테랑 전문가 입니다.</p>
              <p>#헬스 # 크로스핏</p>
              <p>서울시 금천구</p>
            </CardTextAlign>
          </Card>
          {[...Array(2)].map((item, index) => (
            <Card>
              <img src="/image/people.png" alt="" />
              <button
                style={{
                  background: `url('/image/Icon awesome-bookmark_gray.png') no-repeat 50% 50%`,
                }}
              />
              <CardTextAlign>
                <p>홍길동 전문가</p>
                <p>건강한 바디프로필 문화를 선도하는</p>
                <p>경력 10년의 배테랑 전문가 입니다.</p>
                <p>#헬스 # 크로스핏</p>
                <p>서울시 금천구</p>
              </CardTextAlign>
            </Card>
          ))}
        </ProCard>
        <div style={{height: '90px'}} />
        <Navigation />
      </AlignBase>
    </BaseScreen>
  );
};
const CardTextAlign = styled.div`
  position: absolute;
  left: 100px;
  top: 24px;
  p:nth-child(1) {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  p:nth-child(2),
  p:nth-child(3) {
    font-size: 14px;
  }
  p:nth-child(4) {
    font-size: 14px;
    color: ${prop => prop.theme.mainColor};
    font-weight: 300;
    margin-top: 8px;
  }
  p:nth-child(5) {
    font-size: 13px;
    color: ${prop => prop.theme.fontColor2};
  }
`;
const Card = styled.div`
  position: relative;
  width: 319px;
  height: 182px;
  box-shadow: 0px 3px 10px 0px rgb(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 0 auto;
  margin-top: 20px;
  img {
    position: absolute;
    width: 68px;
    height: 68px;
    border-radius: 34px;
    left: 20px;
    top: 30px;
  }
  button {
    position: absolute;
    width: 40px;
    height: 40px;
    background: url('/image/Icon awesome-bookmark.png') no-repeat 50% 50%;
    border: none;
    right: 4px;
    top: 8px;
  }
`;
const ProCard = styled.div`
  margin-top: 10px;
`;
const RecommendAlign = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  select {
    width: 84px;
    height: 32px;
    border: 1px solid rgb(223, 223, 223);
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    border-radius: 6px;
    background-color: inherit;
  }
`;
const RecommendPro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  height: 310px;
  box-shadow: 0px 3px 10px 0px rgb(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 0 auto;
  img {
    width: 80px;
    height: 80px;
    margin-top: 35px;
  }
  button {
    position: absolute;
    width: 18px;
    height: 24px;
    background: url('/image/Icon awesome-bookmark.png') no-repeat 50% 50%;
    border: none;
    right: 20px;
    top: 20px;
  }
  p:nth-child(3) {
    color: ${prop => prop.theme.mainColor};
    font-size: 14px;
    font-weight: 300;
    margin-top: 12px;
  }
  p:nth-child(4) {
    color: ${prop => prop.theme.fontColor1};
    font-weight: 600;
  }
  p:nth-child(5) {
    color: ${prop => prop.theme.fontColor1};
    font-size: 15px;
    margin-top: 11px;
  }
  p:nth-child(6) {
    color: ${prop => prop.theme.fontColor1};
    font-size: 15px;
  }
  p:nth-child(7) {
    color: ${prop => prop.theme.fontColor2};
    font-size: 13px;
    margin-top: 32px;
  }
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 12px;
`;
const Search = styled.input`
  padding-right: 50px;
  height: 48px;
  padding-left: 20px;
  border: 1px solid ${props => props.theme.btnColor2};
  font-size: 15px;
  border-radius: 24px;
  display: block;
  box-sizing: border-box;
  background: url('/image/Icon feather-search.png') no-repeat 95% 50%;
  &::-webkit-input-placeholder {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
export default UserProMain;
