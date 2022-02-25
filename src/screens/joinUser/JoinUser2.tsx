import BaseScreen, {AlignBase} from '../BaseScreen';
import NavProgress from '../../components/NavProgress';
import * as Styled from '../../styles/joinUser/styled';
import {useNavigate} from 'react-router-dom';

const JoinUser2 = () => {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={2} />
        <Styled.TextAlign>
          <p>회원님의</p>
          <p>활동 정보를 입력해주세요.</p>
        </Styled.TextAlign>
        <div style={{height: '68px'}} />
        <div style={{width: '100%'}}>
          <Styled.PicAlign>
            <input type="file" id="fileinput" />
            <label htmlFor="fileinput" />
          </Styled.PicAlign>
        </div>
        <div style={{height: '24px'}} />
        <Styled.CheckNone placeholder="닉네임을 입력해주세요." />
        <Styled.AbsoluteColBtn onClick={() => navigate('/join-user/3')}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser2;
