import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const UserMyPageSet = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="알림 설정" />
        <div style={{height: '80px'}} />
        <div style={{height: '30px'}} />
        <Content>
          <TextAlign>
            <p>공지 알림 받기</p>
            <p>공지성 알림 받기</p>
          </TextAlign>
          <div>토글자리</div>
        </Content>
        <Line />
        <Content>
          <TextAlign>
            <p>매칭 알림 받기</p>
            <p>회원이 전문가에게 매칭 신청 시 받을 수 있습니다.</p>
          </TextAlign>
          <div>토글자리</div>
        </Content>
        <Line />
        <Content>
          <TextAlign>
            <p>매칭 알림 받기</p>
            <p>전문가가 매칭 승인 or 거절 시 받을 수 있습니다.</p>
          </TextAlign>
          <div>토글자리</div>
        </Content>
        <Line />
      </AlignBase>
    </BaseScreen>
  );
};
const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 232px;
  width: 70%;
  p:first-child {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 500;
  }
  p:nth-child(2) {
    margin-top: 4px;
    color: ${prop => prop.theme.fontColor2};
    font-size: 14px;
  }
`;
const Line = styled.div`
  margin: 0 -28px;
  height: 1px;
  border-bottom: 1px solid rgb(245, 245, 245);
`;
const Content = styled.div`
  position: relative;
  margin-bottom: 16px;
  div:last-child {
    position: absolute;
    width: 62px;
    height: 30px;
    border: 1px solid pink;
    top: 17px;
    right: 0;
  }
`;

export default UserMyPageSet;
