import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import {expertData, MemberDataLv3} from '../../Dummy/Dummy';
import BaseScreen, {AlignBase} from '../BaseScreen';

const UserMyPageFavor = () => {
  const getProData = expertData.getMineExpert.mine;
  const [proData, setProData] = useState();

  useEffect(() => {}, [proData]);
  return (
    <BaseScreen>
      <AlignBase
        style={{
          backgroundColor: 'rgb(245,245,245)',
          paddingBottom: '100%',
        }}
      >
        <StatusBar3 Subject="찜한 전문가" />
        <div style={{height: '100px'}} />
        <ProCard>
          {[...Array(3)].map((item, index) => (
            <Card>
              <Link to="/user/pro/profile">
                <img src="/image/people.png" alt="" />
              </Link>
              <button />
              <CardTextAlign>
                <p>{getProData.mb_name} 전문가</p>
                <p>건강한 바디프로필 문화를 선도하는</p>
                <p></p>
                <p>#헬스 # 크로스핏</p>
                <p>{getProData.mb_addr1}</p>
              </CardTextAlign>
            </Card>
          ))}
        </ProCard>
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
  height: 169px;
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

export default UserMyPageFavor;
