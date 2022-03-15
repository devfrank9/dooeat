import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Navigation} from '../../components/Navigation';
import {StatusBar} from '../../components/StatusBar';
import {LinkStyle2} from '../../styles/LinkStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';

const ProManagMain = () => {
  const [isActive, setIsActive] = useState(false);
  const onActiveToggle = () => setIsActive(prev => !prev);

  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar
          Subject="회원관리"
          Img="/image/myInfo.png"
          LinkTo="/pro/mypage"
        />
        <div style={{height: '80px'}} />
        <Taps>
          <Tap isActive={!isActive} onClick={onActiveToggle}>
            코칭 신청 내역
          </Tap>
          <Tap isActive={isActive} onClick={onActiveToggle}>
            회원관리
          </Tap>
        </Taps>
        <UserCard>
          <UserNick>
            <img src="/image/hi.png" alt="" />
            <div>
              <p>닉네임</p>
              <p>서울시 금천구</p>
            </div>
          </UserNick>
          <UserInfo>
            <li>
              <p>신청날짜</p>
              <p>2022. 02. 11</p>
            </li>
            <li>
              <p>나이</p>
              <p>-</p>
            </li>
            <li>
              <p>현재 키</p>
              <p>165cm</p>
            </li>
            <li>
              <p>현재 몸무게</p>
              <p>55kg</p>
            </li>
            <li>
              <p>BMI</p>
              <p>23.51</p>
            </li>
            <li>
              <p>목표 몸무게</p>
              <p>48kg</p>
            </li>
            <li>
              <p>운동 기간</p>
              <p>2021.12.31 ~ 2022.06.26</p>
            </li>
            <li>
              <p>상세정보</p>
              <p
                style={{
                  fontFamily: 'Noto Sans KR',
                  fontWeight: '500',
                  textDecoration: 'underline',
                }}
              >
                자세히보기
              </p>
            </li>
          </UserInfo>
          <BtnAlign>
            <button>거절하기</button>
            <div style={{width: '12px'}} />
            <button>수락하기</button>
          </BtnAlign>
        </UserCard>
        <Navigation />
      </AlignBase>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  margin: 0 24px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  button {
    min-width: 130px;
    width: 100%;
    height: 44px;
    border: 1px solid ${prop => prop.theme.mainColor};
    background-color: white;
    border-radius: 8px;
    color: ${prop => prop.theme.mainColor};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    &:last-child {
      background-color: ${prop => prop.theme.mainColor};
      color: white;
    }
  }
`;
const UserInfo = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  li {
    display: flex;
    align-items: center;
    margin-top: 12px;
    p:nth-child(1) {
      font-size: 13px;
      font-weight: 500;
      line-height: 19px;
      color: ${prop => prop.theme.mainColor};
      margin-left: 30px;
      width: 84px;
    }
    p:nth-child(2) {
      font-size: 15px;
      line-height: 18px;
      font-family: ${prop => prop.theme.roboto};
      margin-left: 7px;
    }
  }
`;
const UserNick = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(245, 245, 245, 245);
  height: 106px;
  display: flex;
  img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-left: 30px;
  }
  div {
    margin-left: 31px;
    p:nth-child(1) {
      font-size: 18px;
      line-height: 27px;
      font-weight: 500;
      height: 27px;
    }
    p:nth-child(2) {
      font-size: 13px;
      line-height: 19px;
      color: ${prop => prop.theme.fontColor2};
      margin-top: 4px;
    }
  }
`;
const UserCard = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 468px;
  box-shadow: 0px 3px 6px 0px rgb(0, 0, 0, 0.1);
  border-radius: 16px;
`;
const Tap = styled.div<{isActive: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${props =>
    props.isActive
      ? '3px solid rgb(239,144,167)'
      : '2px solid rgb(174,174,174)'};
  min-width: 187px;
  width: 100%;
  height: 60px;
  color: ${props =>
    props.isActive ? props.theme.mainColor : props.theme.fontColor2};
  font-size: 18px;
  font-weight: ${props => (props.isActive ? 700 : 400)};
  line-height: 27px;
`;
const Taps = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  margin: 0 -28px;
`;

export default ProManagMain;
