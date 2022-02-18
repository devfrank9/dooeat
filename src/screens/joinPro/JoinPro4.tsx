// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import ImgUpload, {FileLabel, FileInput} from '../../styles/FileInputStyled';
import {TextArea} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {AbsoluteColBtn} from './JoinPro1';

const JoinPro4 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={4} />
        <TextAlign>
          <p>전문가님의</p>
          <p>인증 수단을 입력해주세요.</p>
        </TextAlign>
        <LabelAlign>
          <FileLabel htmlFor="file1">전문 자격증</FileLabel>
          <FileInput type="file" id="file1" />
          <FileLabel htmlFor="file1">사업자등록증</FileLabel>
          <FileInput type="file" id="file1" />
          <FileLabel htmlFor="file1">기타(별도 입력)</FileLabel>
          <FileInput type="file" id="file1" />
          <ImgUpload />
        </LabelAlign>
        <TextArea placeholder="내용을 입력해주세요." />
        <AbsoluteColBtn>
          <LinkStyle to="/join-pro/5">다음</LinkStyle>
        </AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};
const LabelAlign = styled.div`
  Label {
    margin-bottom: 16px;
  }
`;
const TextAlign = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export default JoinPro4;
