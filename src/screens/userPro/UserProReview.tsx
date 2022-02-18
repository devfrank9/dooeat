import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import {ColoredBtn} from '../../styles/BtnStyled';
import {FileInput, FileRectengle} from '../../styles/FileInputStyled';
import {TextArea} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';

const UserProReview = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="리뷰 작성" />
        <TextAlign>
          <p>해당 전문가에 대한</p>
          <p>고객님의 솔직한 평가를 남겨주세요.</p>
        </TextAlign>
        <TextAreaReview placeholder="내용을 입력해주세요." />
        <FileAlign>
          <FileRectengle>
            <FileInput />
          </FileRectengle>
          <img src="/image/follows me.png" alt="" />
        </FileAlign>
        <BtnFix2>
          <LinkStyle to="/user/pro/profile">리뷰작성 완료</LinkStyle>
        </BtnFix2>
      </AlignBase>
    </BaseScreen>
  );
};
const BtnFix2 = styled(ColoredBtn)`
  max-width: 480px;
  margin-top: 88px;
  margin-bottom: 28px;
`;
const FileAlign = styled.div`
  display: flex;
  margin-top: 20px;
  img {
    width: 152px;
    height: 152px;
    margin-left: 16px;
  }
`;
const TextAreaReview = styled(TextArea)`
  height: 288px;
`;
const TextAlign = styled.div`
  margin-top: 110px;
  font-size: 18px;
  margin-bottom: 20px;
`;

export default UserProReview;
