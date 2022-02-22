import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import {ColoredBtn, LongBtn} from '../../styles/BtnStyled';
import {FileInput, FileLabel} from '../../styles/FileInputStyled';
import {
  Common,
  TextArea,
  UrlInputAdd,
  UrlInputDel,
} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {Select} from '../../styles/SelectStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';

const ProProfileEdit = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="전문가 정보" />
        <BackImg>
          <p>플러스 버튼을 눌러</p>
          <p>사진을 추가해주세요.</p>
        </BackImg>
        <ProfileImg>
          <img src="/image/plus.png" alt="" />
        </ProfileImg>
        <ContentAlgin>
          <TextAlign>
            <p>#헬스 #크로스핏</p>
            <p>홍길동 전문가</p>
            <button />
            <TextArea
              style={{width: '85%', marginTop: '26px'}}
              placeholder="한줄 소개를 입력해주세요."
            />
          </TextAlign>
        </ContentAlgin>
        <Subject>경력 사항</Subject>
        <DateLabel htmlFor="date">
          경력 사항 추가하기
          <DateInput type="date" id="date" />
        </DateLabel>
        <Common placeholder="내용을 입력해주세요." />
        <Subject>자격 사항</Subject>
        <DateLabel htmlFor="date">
          경력 사항 추가하기
          <DateInput type="date" id="date" />
        </DateLabel>
        <Common placeholder="내용을 입력해주세요." />
        <Subject>직업</Subject>
        <Select />
        <Subject>카카오톡 비즈니스 채널 (채팅 URL)</Subject>
        <Common placeholder="예 ) http://pf.kakao.com/0000/chat" />
        <Subject>인증 정보</Subject>
        <LabelAlign>
          <FileLabel htmlFor="file1">전문 자격증</FileLabel>
          <FileInput type="file" id="file1" />
          <FileLabel htmlFor="file1">사업자등록증</FileLabel>
          <FileInput type="file" id="file1" />
          <FileLabel htmlFor="file1">기타(별도 입력)</FileLabel>
          <FileInput type="file" id="file1" />
          <Common placeholder="기타 내용을 입력해 주세요." />
        </LabelAlign>
        <Subject>활동 지역</Subject>
        <Select />
        <div style={{height: '12px'}} />
        <Select />
        <Subject>운영 사이트</Subject>
        <UrlInputAdd placeholder="사이트 링크를 입력해주세요." />
        <div style={{height: '12px'}} />
        <UrlInputDel value="https://naver.com" />
        <Subject>자신있는 코칭 분야</Subject>
        <div style={{height: '30px'}} />
        <BtnAlign>
          <LongBtn>헬스</LongBtn>
          <LongBtn>요가</LongBtn>
          <LongBtn>필라테스</LongBtn>
          <LongBtn>크로스핏</LongBtn>
          <LongBtn>복싱</LongBtn>
          <LongBtn>주짓수</LongBtn>
          <LongBtn>수영</LongBtn>
          <LongBtn>기타</LongBtn>
          <DisplayNone />
          <Common placeholder="기타 내용을 입력해 주세요." />
        </BtnAlign>
        <div style={{height: '60px'}} />
        <ColoredBtn>
          <LinkStyle to="/pro/profile">수정 완료</LinkStyle>
        </ColoredBtn>
        <div style={{height: '30px'}} />
      </AlignBase>
    </BaseScreen>
  );
};
const DisplayNone = styled(LongBtn)`
  background-color: inherit;
`;
const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  button {
    margin-bottom: 8px;
  }
`;
const LabelAlign = styled.div`
  Label {
    margin-bottom: 16px;
  }
`;
const DateInput = styled.input`
  display: none;
`;
const DateLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border: 1px solid ${props => props.theme.pointColor2};
  border-radius: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  background-color: ${props => props.theme.pointColor3};
  color: ${props => props.theme.mainColor};
  font-size: 15px;
  margin-bottom: 12px;
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 12px;
`;
const TextAlign = styled.div`
  text-align: center;
  p:first-child {
    color: ${prop => prop.theme.mainColor};
    font-size: 14px;
    font-weight: 300;
    margin-top: 86px;
  }
  p:nth-child(2) {
    font-size: 18px;
    font-weight: 500;
    margin-top: 8px;
  }
  button {
    width: 20px;
    height: 20px;
    background: url('/image/Icon material-edit.png') no-repeat 50% 50%;
    border: none;
    position: absolute;
    top: 117px;
    left: 67%;
  }
`;
const ContentAlgin = styled.div`
  position: relative;
  bottom: 44px;
  z-index: 3;
  background-color: white;
  margin: 0 -28px;
  border-radius: 34px 34px 0 0;
`;
const ProfileImg = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 55px;
  top: 342px;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background-color: ${prop => prop.theme.pointColor2};
  img {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 50%;
    transform: translateX(-50%);
    top: 45px;
  }
`;
const BackImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 -28px;
  height: 440px;
  z-index: -6;
  background-size: cover;
  background: url('/image/Icon feather-plus.png') no-repeat 50% 50%;
  background-color: rgb(245, 245, 245);
  p {
    position: absolute;
    font-size: 14px;
    font-weight: 300;
    color: ${prop => prop.theme.fontColor2};
    line-height: 25px;
    &:first-child {
      top: 255px;
    }
    &:last-child {
      top: 280px;
    }
  }
`;

export default ProProfileEdit;
