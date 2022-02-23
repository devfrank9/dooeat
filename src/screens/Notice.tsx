import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {StatusBar3} from '../components/StatusBar';
import BaseScreen, {AlignBase} from './BaseScreen';

const Notice = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="공지사항" />
        <div style={{height: '80px'}} />
        <div style={{height: '30px'}} />
        <TopBanner to="/notice/:id">
          <div style={{display: 'flex'}}>
            <NoticeBlock>공지</NoticeBlock>
            <p style={{fontWeight: 600, fontSize: '16px', color: 'black'}}>
              글제목이 출력 되어 집니다.
            </p>
          </div>
          <div style={{display: 'flex', alignItems: 'center', height: '30px'}}>
            <p style={{marginRight: '12px', fontSize: '14px', color: 'black'}}>
              글쓴이
            </p>
            <p
              style={{
                marginRight: '12px',
                width: '90px',
                fontFamily: 'roboto',
                fontSize: '12px',
                color: 'rgb(151,151,151)',
              }}
            >
              2021. 12. 31
            </p>
            <p
              style={{
                fontSize: '12px',
                color: 'rgb(151,151,151)',
              }}
            >
              조회 0
            </p>
          </div>
          <Line />
        </TopBanner>
        <TopBanner to="/notice/:id">
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: 600, fontSize: '16px', color: 'black'}}>
              글제목이 출력 되어 집니다.
            </p>
          </div>
          <div style={{display: 'flex', alignItems: 'center', height: '30px'}}>
            <p style={{marginRight: '12px', fontSize: '14px', color: 'black'}}>
              글쓴이
            </p>
            <p
              style={{
                marginRight: '12px',
                width: '90px',
                fontFamily: 'roboto',
                fontSize: '12px',
                color: 'rgb(151,151,151)',
              }}
            >
              2021. 12. 31
            </p>
            <p
              style={{
                fontSize: '12px',
                color: 'rgb(151,151,151)',
              }}
            >
              조회 0
            </p>
          </div>
          <Line style={{borderBottom: '1px solid rgb(245,245,245)'}} />
        </TopBanner>
        <TopBanner to="/notice/:id">
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: 600, fontSize: '16px', color: 'black'}}>
              글제목이 출력 되어 집니다.
            </p>
          </div>
          <div style={{display: 'flex', alignItems: 'center', height: '30px'}}>
            <p style={{marginRight: '12px', fontSize: '14px', color: 'black'}}>
              글쓴이
            </p>
            <p
              style={{
                marginRight: '12px',
                width: '90px',
                fontFamily: 'roboto',
                fontSize: '12px',
                color: 'rgb(151,151,151)',
              }}
            >
              2021. 12. 31
            </p>
            <p
              style={{
                fontSize: '12px',
                color: 'rgb(151,151,151)',
              }}
            >
              조회 0
            </p>
          </div>
          <Line style={{borderBottom: '1px solid rgb(245,245,245)'}} />
        </TopBanner>
      </AlignBase>
    </BaseScreen>
  );
};
const NoticeBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 24px;
  border: 1px solid ${prop => prop.theme.pointColor2};
  border-radius: 19px;
  font-size: 13px;
  font-weight: 500;
  line-height: 19px;
  color: ${prop => prop.theme.mainColor};
  margin-right: 8px;
`;
const Line = styled.div`
  height: 1px;
  border-bottom: 1px solid ${prop => prop.theme.pointColor2};
  margin: 0 -28px;
  margin-top: 19px;
`;
const TopBanner = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 98px;
  text-decoration: none;
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
`;

export default Notice;
