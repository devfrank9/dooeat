import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HealthMain2 = () => {
  return (
    <>
      <TextAlign>
        <p>오늘 운동 기록이 없습니다.</p>
        <p>우측 하단 연필 버튼을 터치해서</p>
        <p>오늘의 운동일자를 기록해주세요.</p>
      </TextAlign>
      <BtnAlign>
        <Link to={'/user/health/edit'}>
          <EditBtn />
        </Link>
      </BtnAlign>
    </>
  );
};
const BtnAlign = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 90px;
  width: 100%;
  max-width: 480px;
`;
const EditBtn = styled.button`
  width: 48px;
  height: 48px;
  background: url('/image/edit 189.png') no-repeat 50% 50%;
  border: none;
  border-radius: 24px;
  position: absolute;
  right: 29px;
  bottom: 0;
`;
const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 238px;
  font-size: 14px;
  font-weight: 300;
  color: ${prop => prop.theme.fontColor2};
  line-height: 25px;
`;
export default HealthMain2;
