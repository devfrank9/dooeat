// Packages
import styled from 'styled-components';
// Screens
import BaseScreen from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {ColoredBtn} from '../../styles/BtnStyled';
import {CheckNone} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const JoinUser2 = () => {
  return (
    <BaseScreen>
      <NavProgress pageNumber={2} />
      <TextAlign>
        <p>회원님의</p>
        <p>활동 정보를 입력해주세요.</p>
      </TextAlign>
      <PicAlign>
        <input type="file" id="fileinput" />
        <label htmlFor="fileinput" />
      </PicAlign>
      <InputAlign>
        <CheckNone placeholder="닉네임을 입력해주세요." />
      </InputAlign>
      <ColoredBtn>
        <LinkStyle to="/join-user3">다음</LinkStyle>
      </ColoredBtn>
    </BaseScreen>
  );
};

const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  margin-top: 3.4167rem;
  p {
    font-size: 1.8333rem;
    margin: 0;
  }
`;
const PicAlign = styled.div`
  margin-top: 5.6667rem;
  margin-bottom: 2rem;
  input {
    display: none;
  }
  input + label {
    display: inline-block;
    width: 10rem;
    height: 10rem;
    border-radius: 5rem;
    background-color: #f5f5f5;
  }
`;
const InputAlign = styled.div`
  margin-bottom: 15rem;
`;

export default JoinUser2;
