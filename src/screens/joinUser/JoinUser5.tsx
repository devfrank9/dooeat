// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {Common} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {TextAlign} from './JoinUser1';
import {AbsoluteColBtn2, Subject} from './JoinUser3';

const JoinUser5 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={5} />
        <TextAlign>
          <p>회원님의</p>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: '500'}}>현재 체중과 키</p>는 얼마인가요?
          </div>
        </TextAlign>
        <div style={{height: '70px'}} />
        <Subject>체중</Subject>
        <div style={{height: '10px'}} />
        <div style={{position: 'relative'}}>
          <Label>kg</Label>
          <Input placeholder="kg단위로 입력해주세요." />
        </div>
        <div style={{height: '30px'}} />
        <Subject>키</Subject>
        <div style={{height: '10px'}} />
        <div style={{position: 'relative'}}>
          <Label>cm</Label>
          <Input placeholder="cm단위로 입력해주세요." />
        </div>
        <div style={{flex: 1.7}} />
        <AbsoluteColBtn2>
          <LinkStyle to="/join-user/6">다음</LinkStyle>
        </AbsoluteColBtn2>
        <div style={{height: 113}} />
      </AlignBase>
    </BaseScreen>
  );
};
const Label = styled.label`
  position: absolute;
  top: 15px;
  right: 31px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
`;
const Input = styled(Common)`
  padding-left: 30px;
`;

export default JoinUser5;
