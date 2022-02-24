import {useState} from 'react';
import {Routes} from 'react-router-dom';
import styled from 'styled-components';
import {Navigation2} from '../../components/Navigation';
import {StatusBar} from '../../components/StatusBar';
import {ColoredBtn, UnColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle2} from '../../styles/LinkStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';
import SearchId from '../SearchId';

const ProManageMain2 = () => {
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
        <div style={{height: '30px'}} />
        <SearchAlign>
          <Search placeholder="회원 닉네임 검색" />
          <ManageSet />
        </SearchAlign>
        <UserCard>
          <UserNick>
            <img src="/image/hi.png" alt="" />
            <div>
              <p>#헬스 # 주짓수</p>
              <p>닉네임</p>
            </div>
            <WaitBox>대기</WaitBox>
          </UserNick>
          <UserInfo>
            <li>
              <p>수업시작</p>
              <p>2021.01.01 / 180일 남음</p>
            </li>
            <li>
              <p>수업</p>
              <p>0회/10회</p>
              <p>0%</p>
            </li>
            <li>
              <p>식단</p>
              <p>0일/180일</p>
              <p>0%</p>
            </li>
            <li>
              <p>운동</p>
              <p>0일/180일</p>
              <p>0%</p>
            </li>
          </UserInfo>
          <BtnAlign>
            <ColoredBtn style={{height: '44px'}}>거절하기</ColoredBtn>
            <div style={{height: '8px'}} />
            <LinkStyle2 to="/pro/manage/lecture">
              <UnColoredBtn style={{height: '44px'}}>
                코칭 진행하기
              </UnColoredBtn>
            </LinkStyle2>
          </BtnAlign>
        </UserCard>
        <Navigation2 />
      </AlignBase>
    </BaseScreen>
  );
};
const SearchAlign = styled.div`
  display: flex;
  position: relative;
`;
const ManageSet = styled.button`
  background: url('/image/manageSet.png') no-repeat 50% 50%;
  width: 44px;
  height: 44px;
  border: none;
  position: absolute;
  right: 0;
`;
const Search = styled.input`
  min-width: 270px;
  width: 80%;
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
const WaitBox = styled.div`
  position: absolute;
  right: 22px;
  bottom: 20px;
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
`;
const BtnAlign = styled.div`
  margin: 0 24px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UserInfo = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  li {
    display: flex;
    align-items: center;
    margin-top: 12px;
    position: relative;
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
    p:nth-child(3) {
      position: absolute;
      right: 35px;
      width: 34px;
      font-family: ${prop => prop.theme.roboto};
      font-size: 15px;
      line-height: 18px;
      color: rgb(174, 174, 174, 174);
    }
  }
`;
const UserNick = styled.div`
  position: relative;
  align-items: center;
  border-bottom: 1px solid rgb(245, 245, 245, 245);
  height: 129px;
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
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
      color: ${prop => prop.theme.mainColor};
    }
    p:nth-child(2) {
      font-size: 18px;
      line-height: 27px;
      font-weight: 500;
      height: 27px;
    }
  }
`;
const UserCard = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 425px;
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

export default ProManageMain2;
