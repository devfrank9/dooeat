import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';
import useLogout from '../../lib/Hook/useLogout';
import {MemberDataLv2} from '../../Dummy/Dummy';

const UserMyPageMain = () => {
  const getData = MemberDataLv2.getMe;
  const logout = useLogout();
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="마이페이지" />
        <div style={{height: '80px'}} />
        <MyPageBanner>
          <img src="/image/body.png" alt="" />
          <p>{getData.mb_name}</p>
          <p>{getData.mb_email}</p>
          <EditLink to="/user/mypage/edit">편집</EditLink>
        </MyPageBanner>
        <List>
          <ListContent to="/user/mypage/my-post">내가 쓴 글</ListContent>
          <ListContent to="/user/mypage/my-comment">내가 쓴 댓글</ListContent>
          <ListContent to="/user/mypage/match-set">매칭 정보 설정</ListContent>
          <ListContent to="/user/mypage/match-apply">
            매칭 신청 내역
          </ListContent>
          <ListContent to="/user/mypage/favor-pro">찜한 전문가</ListContent>
          <ListContent to="/notice">공지사항</ListContent>
          <ListContent to="/user/mypage/alert-set">알림설정</ListContent>
        </List>
        <div style={{height: '116px'}} />
        <MypageFooter>
          <a onClick={logout}>로그아웃</a>
          <Link to="/">회원탈퇴</Link>
        </MypageFooter>
      </AlignBase>
    </BaseScreen>
  );
};
const MypageFooter = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    font-size: 14px;
    color: rgb(151, 151, 151);
    &:link {
      color: rgb(151, 151, 151);
      text-decoration: none;
    }
    &:visited {
      color: rgb(151, 151, 151);
      text-decoration: none;
    }
  }
`;
const ListContent = styled(Link)`
  display: flex;
  align-items: center;
  height: 61px;
  text-decoration: none;
  border-bottom: 1px solid rgb(245, 245, 245);
  font-size: 15px;
  font-weight: 500;

  &:link {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: black;
    text-decoration: none;
  }
`;
const List = styled.div`
  margin-top: 10px;
`;
const EditLink = styled(Link)`
  position: absolute;
  width: 50px;
  height: 32px;
  border: 1px solid rgb(180, 180, 180, 0.5);
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 6px;
  right: 0;
  top: 30px;
  &:link {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: black;
    text-decoration: none;
  }
`;
const MyPageBanner = styled.div`
  height: 120px;
  position: relative;
  width: 100%;
  border-bottom: 1px solid rgb(252, 216, 224);
  img {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 30px;
    border-radius: 30px;
  }
  p {
    position: absolute;
    left: 72px;
    top: 30px;
    font-weight: 500;
    font-size: 16px;
  }
  p:nth-child(3) {
    top: 58px;
    font-family: ${prop => prop.theme.roboto};
    color: ${prop => prop.theme.fontColor2};
    font-size: 14px;
  }
`;
export default UserMyPageMain;
