import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import {FileInput, FileRectengle} from '../../styles/FileInputStyled';
import {ShortBtn, MiddleBtn, LongBtn} from '../../styles/BtnStyled';
import {Common, TextArea} from '../../styles/InputStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';

const MealEdit = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="식단입력" />
        <div style={{height: '110px'}} />
        <Subject>식사 시간</Subject>
        <Common placeholder="시간을 입력해주세요." />
        <div style={{height: '30px'}} />
        <Subject>식단 사진</Subject>
        <FileAlign>
          <FileRectengle>
            <FileInput />
          </FileRectengle>
          <Preview>
            <div>점심</div>
            <img src="/image/exe.png" alt="" />
          </Preview>
        </FileAlign>
        <div style={{height: '30px'}} />
        <Subject>타입</Subject>
        <BtnAlign>
          <ShortBtn>아침</ShortBtn>
          <ShortBtn>점심</ShortBtn>
          <ShortBtn>저녁</ShortBtn>
          <ShortBtn>간식</ShortBtn>
          <ShortBtn>야식</ShortBtn>
        </BtnAlign>
        <Subject>먹은 양</Subject>
        <BtnAlign>
          <MiddleBtn>가벼워요</MiddleBtn>
          <MiddleBtn>적당해요</MiddleBtn>
          <MiddleBtn>배불러요</MiddleBtn>
          <MiddleBtn>과했어요</MiddleBtn>
        </BtnAlign>
        <Subject>식단 종류</Subject>
        <BtnAlign>
          <LongBtn>치팅</LongBtn>
          <LongBtn>일반식</LongBtn>
          <LongBtn>다이어트식</LongBtn>
        </BtnAlign>
        <Subject>식단 일기</Subject>
        <TextInput placeholder="오늘의 식단에 대해 자유롭게 적어보세요." />
        <div style={{height: '30px'}} />
        <CheckInput>
          <input type="checkbox" id="check2" />
          <label htmlFor="check2" />
          <p>식사 기록을 내 전문가와 공유</p>
          <div style={{flex: 1}} />
        </CheckInput>
        <LinkStyle to="/meal">
          <Btn>기록하기</Btn>
        </LinkStyle>
      </AlignBase>
    </BaseScreen>
  );
};
const CheckInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  p {
    font-size: 16px;
    font-weight: 400;
  }
  input {
    display: none;
  }
  input + label {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 1px solid ${prop => prop.theme.btnColor2};
    border-radius: 4px;
    position: relative;
    margin-right: 11.8px;
  }
  input:checked + label::after {
    content: url('/image/Icon feather-check_pink.png');
    font-size: 15px;
    width: 23px;
    height: 16px;
    text-align: center;
    position: absolute;
    left: 7px;
    bottom: 10px;
  }
`;
const Btn = styled(ColoredBtn)`
  margin: 30px 0;
`;
const TextInput = styled(TextArea)`
  height: 144px;
`;
const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  margin-bottom: 30px;
`;
const FileAlign = styled.div`
  display: flex;
  label {
    margin-right: 12px;
  }
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;
const Preview = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 150px;
  height: 150px;
  border: 1px solid ${props => props.theme.btnColor2};
  border-radius: 10px;
  background: url('/image/321.png') no-repeat 50% 50%;
  div {
    position: absolute;
    width: 68px;
    height: 32px;
    border-radius: 16px;
    background-color: rgb(51, 51, 51, 0.6);
    left: 12px;
    top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${prop => prop.theme.fontColor3};
    font-size: 15px;
    font-weight: 300;
  }
  img {
    position: absolute;
    width: 18px;
    height: 18px;
    right: -4px;
    top: -4px;
  }
`;

export default MealEdit;
