import styled from 'styled-components';
import {HealthSubject, HealthIndex} from '../../../styles/BtnStyled';
import ProjectModal from '../../../components/ModalTest';
import {Common} from '../../../styles/InputStyled';

interface Prop {
  handleModal: () => void;
}

const LastExcer = ({handleModal}: Prop) => {
  return (
    <>
      <ProjectModal handleModal={handleModal} />
      <Subject>운동 종류</Subject>
      <BtnAlign>
        <HealthSubject>헬스</HealthSubject>
        <HealthSubject>홈트</HealthSubject>
        <HealthSubject>기타</HealthSubject>
      </BtnAlign>
      <div style={{height: '30px'}} />
      <Subject>운동 부위</Subject>
      <BtnAlign>
        <HealthIndex>가슴</HealthIndex>
        <HealthIndex>어깨</HealthIndex>
        <HealthIndex>팔</HealthIndex>
        <HealthIndex>등</HealthIndex>
        <HealthIndex>하체</HealthIndex>
        <HealthIndex>전신</HealthIndex>
        <HealthIndex>유산소</HealthIndex>
        <HealthIndex>스트레칭</HealthIndex>
      </BtnAlign>
      <div style={{height: '30px'}} />
      <Subject>하체 운동</Subject>
      <ExcerAlign>
        <ExcerKindBtn>운동 종류 등록</ExcerKindBtn>
        <ExcerKindBtn>이전 기록 불러오기</ExcerKindBtn>
      </ExcerAlign>
      <Subject>하체 운동</Subject>
      <ExcerAlign>
        <ExcerKindBtn onClick={handleModal}>운동 종류 등록</ExcerKindBtn>
        <ExcerKindBtn>이전 기록 불러오기</ExcerKindBtn>
      </ExcerAlign>
      <div style={{position: 'relative'}}>
        <Label>kg</Label>
        <Input placeholder="kg단위로 입력해주세요." />
      </div>
    </>
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
const ExcerAlign = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const ExcerKindBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${prop => prop.theme.pointColor3};
  min-width: 156px;
  width: 48.902%;
  min-height: 48px;
  font-size: 15px;
  color: ${prop => prop.theme.mainColor};
  border-radius: 8px;
  border: 0.1px solid ${prop => prop.theme.pointColor1};
  font-weight: 500;
`;
const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  button {
    margin-bottom: 8px;
  }
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export default LastExcer;
