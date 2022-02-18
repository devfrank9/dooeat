import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FooterStyle} from '../../components/Footer';
import {StatusBar2} from '../../components/StatusBar';
import {ColoredBtn, UnColoredBtn} from '../../styles/BtnStyled';
import {TextArea} from '../../styles/InputStyled';
import {LinkStyle, LinkStyle2} from '../../styles/LinkStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';

const UserProApply = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="코칭 신청하기" />
      </AlignBase>
      <div style={{height: '110px'}} />
      <RecommendPro>
        <Link to="/user-pro/profile">
          <img src="/image/people.png" alt="" />
        </Link>
        <p>#헬스 # 크로스핏</p>
        <p>홍길동 전문가</p>
        <p>건강한 바디프로필 문화를 선도하는</p>
        <p>경력 10년의 배테랑 전문가 입니다.</p>
      </RecommendPro>
      <div style={{margin: '0 28px'}}>
        <TextAlign>
          <p>전문가님과</p>
          <p>아직 상의를 하지 않았다면?</p>
        </TextAlign>
        <BtnFix>
          <LinkStyle2 to="/user/pro/consult">1:1 상담하러 가기</LinkStyle2>
        </BtnFix>
        <p style={{fontSize: '18px', fontWeight: '500', marginTop: '28px'}}>
          기타 내용
        </p>
        <AreaText placeholder="내용을 입력해주세요." />
        <FooterStyle>* 충분한 상담 진행 후 신청 해주세요.</FooterStyle>
        <BtnFix2>
          <LinkStyle to="/user/pro">다음</LinkStyle>
        </BtnFix2>
      </div>
    </BaseScreen>
  );
};
const BtnFix2 = styled(ColoredBtn)`
  width: 100%;
  max-width: 480px;
  margin-top: 19px;
  margin-bottom: 30px;
`;
const AreaText = styled(TextArea)`
  width: 100%;
  margin-top: 12px;
`;
const BtnFix = styled(UnColoredBtn)`
  width: 100%;
  max-width: 480px;
`;
const TextAlign = styled.div`
  font-size: 22px;
  margin-top: 31px;
  margin-bottom: 20px;
`;
const RecommendPro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  height: 260px;
  box-shadow: 0px 3px 10px 0px rgb(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 0 auto;
  img {
    width: 80px;
    height: 80px;
    margin-top: 35px;
  }
  p:nth-child(2) {
    color: ${prop => prop.theme.mainColor};
    font-size: 14px;
    font-weight: 300;
    margin-top: 12px;
  }
  p:nth-child(3) {
    color: ${prop => prop.theme.fontColor1};
    font-weight: 600;
  }
  p:nth-child(4) {
    color: ${prop => prop.theme.fontColor1};
    font-size: 15px;
    margin-top: 11px;
  }
  p:nth-child(5) {
    color: ${prop => prop.theme.fontColor1};
    font-size: 15px;
  }
`;

export default UserProApply;
