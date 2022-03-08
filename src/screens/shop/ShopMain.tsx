import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Navigation} from '../../components/Navigation';
import {StatusBar} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';
import * as Styled from '../../styles/shop/styled';

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
        <Styled.MerchantList>
          {[...Array(8)].map((x, i) => (
            <Styled.Align to="/shop/:id">
              <Styled.Merchant src="/image/chicken.png" alt="" />
              <p>잇메이트</p>
              <p style={{width: '100%'}}>00 닭가슴살 슬라이스 오리지널</p>
              <p>31,000 원</p>
            </Styled.Align>
          ))}
        </Styled.MerchantList>
        <Navigation />
      </AlignBase>
    </BaseScreen>
  );
};

export default ShopMain;
