import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import {ColoredBtn, LongBtn} from '../../styles/BtnStyled';
import {TextArea} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';

const ProManageComm = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="코멘트 기록하기" />
        <div style={{height: '80px'}} />
        <div style={{height: '30px'}} />
        <Subject>코멘트</Subject>
        <TextArea
          style={{height: '144px'}}
          placeholder="회원 식단, 운동을 확인 후 코멘트를 입력해주세요."
        />
        <div style={{height: '30px'}} />
        <Subject>점수 매기기</Subject>
        <div style={{height: '12px'}} />
        <Subject2>식단</Subject2>
        <BtnAlign>
          <LongBtn style={{fontFamily: 'Noto Sans KR'}}>좋아요</LongBtn>
          <LongBtn style={{fontFamily: 'Noto Sans KR'}}>별로에요</LongBtn>
        </BtnAlign>
        <div style={{height: '20px'}} />
        <Subject2>운동</Subject2>
        <BtnAlign>
          <LongBtn style={{fontFamily: 'Noto Sans KR'}}>좋아요</LongBtn>
          <LongBtn style={{fontFamily: 'Noto Sans KR'}}>별로에요</LongBtn>
        </BtnAlign>
        <AbsoluteColBtn>
          <LinkStyle to="/pro/manage/lecture">기록하기</LinkStyle>
        </AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};
const AbsoluteColBtn = styled(ColoredBtn)`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  width: 85%;
  max-width: 480px;
`;
const Subject2 = styled.div`
  font-size: 18px;
`;
const BtnAlign = styled.div`
  display: flex;
  margin: 0 1px;
  button {
    margin-top: 10px;
    margin-right: 12px;
  }
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
`;

export default ProManageComm;
