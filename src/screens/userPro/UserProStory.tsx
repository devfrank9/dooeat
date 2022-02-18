import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const UserProStory = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="전문가 스토리" />
        <div style={{height: '110px'}} />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <ProfileImg src="/image/people.png" alt="" />
        </div>
        <TextAlign>
          <p>#헬스 #크로스핏</p>
          <p>홍길동 전문가</p>
          <p>건강한 바디프로필 문화를 선도하는</p>
          <p>경력 10년의 배테랑 전문가 입니다.</p>
          <div style={{height: '42px'}} />
        </TextAlign>
        <PicAlign>
          <img src="/image/hi.png" alt="" />
          <img src="/image/hi.png" alt="" />
          <img src="/image/hi.png" alt="" />
          <img src="/image/hi.png" alt="" />
          <img src="/image/hi.png" alt="" />
          <img src="/image/hi.png" alt="" />
          <img src="/image/hi.png" alt="" />
          <img src="/image/hi.png" alt="" />
          <img src="/image/hi.png" alt="" />
          <img src="/image/hi.png" alt="" />
          <img src="/image/hi.png" alt="" />
          <img src="/image/hi.png" alt="" />
        </PicAlign>
        <div style={{height: '8px'}} />
      </AlignBase>
    </BaseScreen>
  );
};
const PicAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  img {
    width: 103px;
    height: 103px;
    border-radius: 6px;
    flex: 1;
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;
const TextAlign = styled.div`
  text-align: center;
  p:first-child {
    color: ${prop => prop.theme.mainColor};
    font-size: 14px;
    font-weight: 300;
    margin-top: 30px;
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
  }
`;
const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 55px;
`;

export default UserProStory;
