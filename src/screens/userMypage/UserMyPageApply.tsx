import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import {MemberDataLv3} from '../../Dummy/Dummy';
import BaseScreen, {AlignBase} from '../BaseScreen';

const UserMyPageApply = () => {
  const getData = MemberDataLv3.getMe;
  return (
    <BaseScreen>
      <AlignBase
        style={{backgroundColor: 'rgb(245,245,245)', paddingBottom: '100%'}}
      >
        <StatusBar3 Subject="매칭 신청 내역" />
        <div style={{height: '100px'}} />
        <ProCard>
          {[...Array(3)].map((item, index) => (
            <Card>
              <div
                style={{
                  borderBottom: '2px solid rgb(245,245,245)',
                  height: '159px',
                }}
              >
                <Link to="/user/pro/profile">
                  <img src={getData.mb_img} alt="" />
                </Link>
                <button />
                <CardTextAlign>
                  <p>{getData.mb_name} 전문가</p>
                  <p>건강한 바디프로필 문화를 선도하는</p>
                  <p>경력 10년의 배테랑 전문가 입니다.</p>
                  <p>#헬스 # 크로스핏</p>
                  <p>{getData.mb_addr1}</p>
                </CardTextAlign>
              </div>
              <CardFooter>
                <p>2021. 12. 31 신청</p>
                <div>대기중</div>
              </CardFooter>
            </Card>
          ))}

          <Card>
            <div
              style={{
                borderBottom: '2px solid rgb(245,245,245)',
                height: '159px',
              }}
            >
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
            </div>
            <CardFooter>
              <p>2021. 12. 31 신청</p>
              <div style={{border: '1px solid rgb(239,144,167)'}}>승인</div>
            </CardFooter>
          </Card>
          <Card>
            <div
              style={{
                borderBottom: '2px solid rgb(245,245,245)',
                height: '159px',
              }}
            >
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
            </div>
            <CardFooter>
              <p>2021. 12. 31 신청</p>
              <div
                style={{
                  border: '1px solid rgb(180,180,180)',
                  color: 'rgb(180,180,180)',
                }}
              >
                거절
              </div>
            </CardFooter>
          </Card>
        </ProCard>
      </AlignBase>
    </BaseScreen>
  );
};
const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  height: 49px;
  p {
    font-family: ${prop => prop.theme.roboto};
    font-size: 14px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 28px;
    border: 1px solid ${prop => prop.theme.pointColor2};
    border-radius: 19px;
    font-size: 13px;
    font-weight: 500;
    line-height: 19px;
    color: ${prop => prop.theme.mainColor};
  }
`;
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

  box-shadow: 0px 3px 10px 0px rgb(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 0 auto;
  margin-bottom: 16px;
  background-color: white;
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
const ProCard = styled.div``;

export default UserMyPageApply;
