// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {CheckNone} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {AbsoluteColBtn, TextAlign} from './JoinUser1';

const JoinUser2 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={2} />
        <TextAlign>
          <p>회원님의</p>
          <p>활동 정보를 입력해주세요.</p>
        </TextAlign>
        <div style={{height: '68px'}} />
        <div style={{width: '100%'}}>
          <PicAlign>
            <input type="file" id="fileinput" />
            <label htmlFor="fileinput" />
          </PicAlign>
        </div>
        <div style={{height: '24px'}} />
        <CheckNone placeholder="닉네임을 입력해주세요." />
        <LinkStyle to="/join-user/3">
          <AbsoluteColBtn>다음</AbsoluteColBtn>
        </LinkStyle>
      </AlignBase>
    </BaseScreen>
  );
};
const PicAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: ${props => props.theme.btnColor1};
  input {
    display: none;
  }
  input + label {
    display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background: url('/image/Icon feather-plus.png') no-repeat 50% 50%;
  }
`;

export default JoinUser2;
