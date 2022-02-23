import styled from 'styled-components';
import {StatusBar3} from '../components/StatusBar';
import BaseScreen, {AlignBase} from './BaseScreen';

const NoticeDetail = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="공지사항" />
        <div style={{height: '80px'}} />
        <Banner>
          <div style={{marginTop: '30px'}}>
            <NoticeBlock>공지</NoticeBlock>
            <div style={{height: '8px'}} />
            <p
              style={{fontSize: '16px', fontWeight: '500', marginBottom: '4px'}}
            >
              글제목이 출력 되어 집니다.
            </p>
            <p style={{fontSize: '14px', marginBottom: '8px'}}>글쓴이</p>
            <TextInline>
              <p>2021. 12. 31</p>
              <p>조회 0</p>
            </TextInline>
          </div>
          <div style={{height: '20px'}} />
          <Line />
        </Banner>
        <Content>글내용 시작. 공지 내용 입니다.</Content>
      </AlignBase>
    </BaseScreen>
  );
};
const Content = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 20px;
`;
const TextInline = styled.div`
  display: flex;
  font-size: 12px;
  color: ${prop => prop.theme.fontColor2};
  align-items: center;
  p:first-child {
    width: 73px;
    margin-right: 12px;
    font-family: ${prop => prop.theme.roboto};
  }
  p:last-child {
  }
`;
const Line = styled.div`
  margin: 0 -28px;
  height: 1px;
  border-bottom: 1px solid ${prop => prop.theme.pointColor2};
`;
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
`;
const Banner = styled.div``;

export default NoticeDetail;
