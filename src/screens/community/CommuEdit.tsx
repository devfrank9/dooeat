import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import {ColoredBtn} from '../../styles/BtnStyled';
import {FileRectengle} from '../../styles/FileInputStyled';
import {Common, TextArea} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';

const CommuEdit = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="글쓰기" />
        <div style={{height: '80px'}} />
        <Subject>제목</Subject>
        <Common placeholder="제목을 입력해주세요." />
        <Subject>내용</Subject>
        <TextArea
          style={{height: '144px'}}
          placeholder="내용을 입력해주세요."
        />
        <Subject>태그</Subject>
        <Common placeholder="태그를 입력해주세요. (ex: #헬스 #요가)" />
        <Subject>사진 업로드</Subject>
        <FileRectengle />
        <LinkStyle to="/community/favor">
          <Btn>등록</Btn>
        </LinkStyle>
      </AlignBase>
    </BaseScreen>
  );
};
const Btn = styled(ColoredBtn)`
  margin: 30px 0;
`;
const Subject = styled.div`
  width: 97px;
  height: 27px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 12px;
`;

export default CommuEdit;
