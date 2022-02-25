// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import ImgUpload, {FileLabel, FileInput} from '../../styles/FileInputStyled';
import {TextArea} from '../../styles/InputStyled';
import * as Styled from '../../styles/joinPro/styled';
import {useNavigate} from 'react-router-dom';

const JoinPro4 = () => {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={4} />
        <Styled.TextAlign2>
          <p>전문가님의</p>
          <p>인증 수단을 입력해주세요.</p>
        </Styled.TextAlign2>
        <Styled.LabelAlign>
          <FileLabel htmlFor="file1">전문 자격증</FileLabel>
          <FileInput type="file" id="file1" />
          <FileLabel htmlFor="file1">사업자등록증</FileLabel>
          <FileInput type="file" id="file1" />
          <FileLabel htmlFor="file1">기타(별도 입력)</FileLabel>
          <FileInput type="file" id="file1" />
          <ImgUpload />
        </Styled.LabelAlign>
        <TextArea placeholder="내용을 입력해주세요." />
        <Styled.AbsoluteColBtn onClick={() => navigate('/join-pro/5')}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro4;
