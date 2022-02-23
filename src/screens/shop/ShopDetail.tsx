import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const ShopDetail = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="상품 상세정보" />
        <div style={{height: '81px'}} />
        <BackImg />
        <TextAlign>
          <p>잇메이트</p>
          <p style={{width: '100%'}}>스팀 닭가슴살 슬라이스 오리지널</p>
          <p>31,000 원</p>
        </TextAlign>
        <div
          style={{
            backgroundColor: 'rgb(245,245,245)',
            height: '12px',
            margin: '0 -28px',
          }}
        />
        <div
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            borderBottom: '1px solid rgb(245,245,245)',
          }}
        >
          <p
            style={{
              marginBottom: '12px',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            상세정보
          </p>
        </div>
        <Contents />
        <div style={{height: '30px'}} />
      </AlignBase>
    </BaseScreen>
  );
};
const Contents = styled.div`
  background: url('/image/contents.png') no-repeat;
  background-size: cover;
  width: 100%;
  height: 1700px;
`;
const TextAlign = styled.div`
  margin-top: 20px;
  margin-bottom: 16px;
  p:nth-child(1) {
    color: ${prop => prop.theme.fontColor2};
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  p:nth-child(2) {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 11px;
  }
  p:nth-child(3) {
    font-size: 20px;
    font-family: ${prop => prop.theme.roboto};
    font-weight: 700;
  }
`;
const BackImg = styled.div`
  margin: 0 -28px;
  height: 330px;
  background: url('/image/chicken.png') no-repeat 50% 50%;
  background-size: cover;
`;

export default ShopDetail;
