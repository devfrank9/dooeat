import styled from 'styled-components';
import ExerKindRegiDetail from './ExerKindRegiDetail';
import {useState} from 'react';

interface Prop {
  renderList: React.ReactNode[];
}

const ExerKindRegi = ({renderList}: Prop) => {
  const [renderActive, setRenderActive] = useState(false);

  return (
    <>
      {renderList.map((item, index) => (
        <div key={index}>
          <div style={{height: '30px'}} />
          <Subject>{item} 운동</Subject>
          <ExcerAlign>
            <ExcerKindBtn onClick={() => setRenderActive(prev => !prev)}>
              운동 종류 등록
            </ExcerKindBtn>
            <ExcerKindBtn>이전 기록 불러오기</ExcerKindBtn>
          </ExcerAlign>
          {renderActive === true ? <ExerKindRegiDetail /> : <></>}
        </div>
      ))}
    </>
  );
};

const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
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

export default ExerKindRegi;
