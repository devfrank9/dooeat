import styled from 'styled-components';
import {StatusBar2} from '../../components/StatusBar';
import {ColoredBtn} from '../../styles/BtnStyled';
import {Common, TextArea} from '../../styles/InputStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {Select} from '../../styles/SelectStyled';
import BaseScreen, {AlignBase} from '../BaseScreen';

const ProManageGramEdit = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar2 Subject="몸 정보 입력" />
        <div style={{height: '80px'}} />
        <ContentBox>
          <Align>
            <Subject>일정</Subject>
            <Subject2Align>
              <Subject2>운동 일자</Subject2>
              <Subject2>회차</Subject2>
            </Subject2Align>
            <InputAlign>
              <Time
                placeholder="시간을 입력해주세요."
                type="date"
                value="2021-12-30"
              />
              <div style={{width: '12px'}} />
              <div style={{position: 'relative', width: '100%'}}>
                <Label>회</Label>
                <Input value="1" />
              </div>
            </InputAlign>
          </Align>
        </ContentBox>
        <ContentBox style={{height: '647px'}}>
          <Align>
            <Subject>근육</Subject>
            <SelectAlign>
              <Subject2>왼팔</Subject2>
              <Select style={{marginTop: '12px', marginBottom: '30px'}} />
              <Subject2>오른팔</Subject2>
              <Select style={{marginTop: '12px', marginBottom: '30px'}} />
              <Subject2>몸통</Subject2>
              <Select style={{marginTop: '12px', marginBottom: '30px'}} />
              <Subject2>왼다리</Subject2>
              <Select style={{marginTop: '12px', marginBottom: '30px'}} />
              <Subject2>오른다리</Subject2>
              <Select style={{marginTop: '12px', marginBottom: '30px'}} />
            </SelectAlign>
          </Align>
        </ContentBox>
        <ContentBox style={{height: '647px'}}>
          <Align>
            <Subject>체지방</Subject>
            <SelectAlign>
              <Subject2>왼팔</Subject2>
              <Select style={{marginTop: '12px', marginBottom: '30px'}} />
              <Subject2>오른팔</Subject2>
              <Select style={{marginTop: '12px', marginBottom: '30px'}} />
              <Subject2>몸통</Subject2>
              <Select style={{marginTop: '12px', marginBottom: '30px'}} />
              <Subject2>왼다리</Subject2>
              <Select style={{marginTop: '12px', marginBottom: '30px'}} />
              <Subject2>오른다리</Subject2>
              <Select style={{marginTop: '12px', marginBottom: '30px'}} />
            </SelectAlign>
          </Align>
        </ContentBox>
        <ContentBox style={{height: '236px'}}>
          <Align>
            <Subject>근육</Subject>
            <SelectAlign>
              <TextArea
                style={{
                  width: '100%',
                  height: '144px',
                  border: '1px solid rgb(252,216,224)',
                  fontSize: '15px',
                  paddingRight: '18px',
                }}
                value="예시 : 목표까지 체지방 5kg 감량, 근육 2kg 증가 필요"
              />
            </SelectAlign>
          </Align>
        </ContentBox>
        <div style={{height: '30px'}} />
        <ColoredBtn>
          <LinkStyle to="">기록하기</LinkStyle>
        </ColoredBtn>
        <div style={{height: '69px'}} />
      </AlignBase>
    </BaseScreen>
  );
};
const SelectAlign = styled.div`
  margin-top: 20px;
`;
const Time = styled.input`
  width: 100%;
  height: 52px;
  border: 0.1rem solid ${props => props.theme.pointColor1};
  font-size: 15px;
  border-radius: 0.5rem;
  display: block;
  box-sizing: border-box;
  background: ${prop => prop.theme.pointColor3};
  text-align: center;
  color: ${prop => prop.theme.mainColor};
  input + span {
    padding-right: 20px;
  }
`;
const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 98px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
`;
const Input = styled(Common)`
  width: 90px;
  text-align: center;
`;
const InputAlign = styled.div`
  display: flex;
  margin-top: 12px;
`;
const Subject2Align = styled.div`
  display: flex;
  margin-top: 30px;
`;
const Subject2 = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
`;
const Subject = styled.div`
  font-size: 16px;
  color: ${prop => prop.theme.mainColor};
  font-weight: 700;
  height: 57px;
  border-bottom: 1px solid rgb(223, 223, 223);
  display: flex;
  align-items: center;
`;
const Align = styled.div`
  margin: 0 16px;
`;
const ContentBox = styled.div`
  height: 191px;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 12px;
  margin-top: 30px;
`;

export default ProManageGramEdit;
