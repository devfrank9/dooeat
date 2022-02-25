// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import * as Styled from '../../styles/joinUser/styled';

const JoinUser5 = () => {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={5} />
        <Styled.TextAlign>
          <p>회원님의</p>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: '500'}}>현재 체중과 키</p>는 얼마인가요?
          </div>
        </Styled.TextAlign>
        <div style={{height: '70px'}} />
        <Styled.Subject>체중</Styled.Subject>
        <div style={{height: '10px'}} />
        <div style={{position: 'relative'}}>
          <Styled.Label>kg</Styled.Label>
          <Styled.Input placeholder="kg단위로 입력해주세요." />
        </div>
        <div style={{height: '30px'}} />
        <Styled.Subject>키</Styled.Subject>
        <div style={{height: '10px'}} />
        <div style={{position: 'relative'}}>
          <Styled.Label>cm</Styled.Label>
          <Styled.Input placeholder="cm단위로 입력해주세요." />
        </div>
        <div style={{flex: 1.7}} />
        <Styled.AbsoluteColBtn2 onClick={() => navigate('/join-user/6')}>
          다음
        </Styled.AbsoluteColBtn2>
        <div style={{height: 113}} />
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser5;
