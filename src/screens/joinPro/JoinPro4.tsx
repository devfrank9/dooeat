// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {FileLabel, FileInput} from '../../styles/FileInputStyled';
import {TextArea} from '../../styles/InputStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinPro4 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={4} />
      <TextAlign>
        <p>전문가님의</p>
        <p>인증 수단을 입력해주세요.</p>
      </TextAlign>
      <InputAlgin>
        <FileLabel htmlFor="file1">전문 자격증</FileLabel>
        <FileInput type="file" id="file1" />
        <FileLabel htmlFor="file1">사업자등록증</FileLabel>
        <FileInput type="file" id="file1" />
        <FileLabel htmlFor="file1">기타(별도 입력)</FileLabel>
        <FileInput type="file" id="file1" />
      </InputAlgin>
      <TextArea placeholder="내용을 입력해주세요." />
      <BtnAlign>
        <ColoredBtn>
          <LinkStyle to="/join-pro/5">다음</LinkStyle>
        </ColoredBtn>
      </BtnAlign>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  margin-top: 13rem;
`;
const InputAlgin = styled.div`
  label {
    margin-bottom: 1.3333rem;
  }
`;
const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  margin-top: 3.4167rem;
  margin-bottom: 2.5rem;
  p {
    font-size: 1.8333rem;
    margin: 0;
  }
`;

export default JoinPro4;
