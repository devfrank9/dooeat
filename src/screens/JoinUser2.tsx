import BaseScreen from './BaseScreen';
import NavProgress from '../components/NavProgress';
import {TextAlign} from './JoinUser1';
import {CheckNone} from '../components/InputStyled';
import {Btn2} from '../components/BtnStyled';
import {LinkStyle} from './JoinUser1';
import styled from 'styled-components';

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
      <Btn2>
        <LinkStyle to="/join-user3">다음</LinkStyle>
      </Btn2>
    </BaseScreen>
  );
};
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
