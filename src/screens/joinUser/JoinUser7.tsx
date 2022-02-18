// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {TextAlign} from './JoinUser1';

const JoinUser7 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <div
          style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
        >
          <NavProgress pageNumber={7} />
          <TextAlign>
            <p>회원님의</p>
            <div style={{display: 'flex'}}>
              <p style={{fontWeight: 500}}>목표 체중</p>
              <p>은 얼마인가요?</p>
            </div>
          </TextAlign>
          <div style={{flex: 0.9}} />
          <Scale />
          <div style={{height: '36.9px'}} />
          <LastText>
            <p style={{fontSize: '20px', fontWeight: 400}}>나의 목표 체중은</p>
            <div style={{marginBottom: '14px'}} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{position: 'relative'}}>
                <Label>kg</Label>
                <KgInput placeholder="입력해주세요." type="text" />
              </div>
              <p style={{fontSize: '20px', fontWeight: 300}}> 입니다.</p>
            </div>
          </LastText>
          <div style={{flex: 0.5}} />
          <ColoredBtn>
            <LinkStyle to="/join-user/8">완료</LinkStyle>
          </ColoredBtn>
          <div style={{height: 113}} />
        </div>
      </AlignBase>
    </BaseScreen>
  );
};
const Label = styled.label`
  position: absolute;
  right: 11.4px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
`;
const KgInput = styled.input`
  width: 153.6px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid rgb(239, 239, 239);
  padding-bottom: 5px;
  &::-webkit-input-placeholder {
    font-size: 16px;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
const LastText = styled.div`
  text-align: center;
  p {
  }
`;
const Scale = styled.div`
  background-color: ${props => props.theme.pointColor2};
  background-image: url('/image/group 3.png');
  background-repeat: no-repeat;
  background-position: center;
  width: 208px;
  height: 208px;
  border-radius: 104px;
  margin: 0 auto;
`;

export default JoinUser7;
