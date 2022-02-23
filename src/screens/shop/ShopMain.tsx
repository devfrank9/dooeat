import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Navigation} from '../../components/Navigation';
import {StatusBar} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const ShopMain = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar
          Subject="쇼핑몰"
          Img="/image/myInfo.png"
          LinkTo="/user/mypage"
        />
        <div style={{height: '110px'}} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            height: '100%',
            width: '100%',
          }}
        >
          <Align to="/shop/:id">
            <Merchant />
            <p>잇메이트</p>
            <p style={{width: '100%'}}>00 닭가슴살 슬라이스 오리지널</p>
            <p>31,000 원</p>
          </Align>
          <Align to="/shop/:id">
            <Merchant />
            <p>잇메이트</p>
            <p style={{width: '100%'}}>00 닭가슴살 슬라이스 오리지널</p>
            <p>31,000 원</p>
          </Align>
          <Align to="/shop/:id">
            <Merchant />
            <p>잇메이트</p>
            <p style={{width: '100%'}}>00 닭가슴살 슬라이스 오리지널</p>
            <p>31,000 원</p>
          </Align>
          <Align to="/shop/:id">
            <Merchant />
            <p>잇메이트</p>
            <p style={{width: '100%'}}>00 닭가슴살 슬라이스 오리지널</p>
            <p>31,000 원</p>
          </Align>
          <Align to="/shop/:id">
            <Merchant />
            <p>잇메이트</p>
            <p style={{width: '100%'}}>00 닭가슴살 슬라이스 오리지널</p>
            <p>31,000 원</p>
          </Align>
          <Align to="/shop/:id">
            <Merchant />
            <p>잇메이트</p>
            <p style={{width: '100%'}}>00 닭가슴살 슬라이스 오리지널</p>
            <p>31,000 원</p>
          </Align>
          <Align to="/shop/:id">
            <Merchant />
            <p>잇메이트</p>
            <p style={{width: '100%'}}>00 닭가슴살 슬라이스 오리지널</p>
            <p>31,000 원</p>
          </Align>
          <Align to="/shop/:id">
            <Merchant />
            <p>잇메이트</p>
            <p style={{width: '100%'}}>00 닭가슴살 슬라이스 오리지널</p>
            <p>31,000 원</p>
          </Align>
        </div>
        <Navigation />
      </AlignBase>
    </BaseScreen>
  );
};
const Align = styled(Link)`
  display: flex;
  flex-direction: column;
  min-width: 152px;
  flex-wrap: wrap;
  width: 47.65%;
  margin-bottom: 20px;
  text-decoration: none;
  &:link {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: black;
    text-decoration: none;
  }
  p:nth-child(2) {
    color: ${prop => prop.theme.fontColor2};
    font-size: 12px;
    font-weight: 500;
  }
  p:nth-child(3) {
    font-size: 14px;
  }
  p:nth-child(4) {
    font-size: 14px;
    font-family: ${prop => prop.theme.roboto};
    font-weight: 700;
  }
`;
const Merchant = styled.div`
  display: block;
  min-width: 152px;
  width: 100%;
  padding-bottom: 100%;
  background: url('/image/chicken.png') no-repeat 50% 50%;
  background-size: cover;
`;

export default ShopMain;
