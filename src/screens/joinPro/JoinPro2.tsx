// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {CheckNone} from '../../styles/InputStyled';
import Agreement from '../../components/Agreement';
import * as Styled from '../../styles/joinPro/styled';
import {useState} from 'react';

const JoinPro2 = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={2} />
        <Styled.TextAlign>
          <p>전문가님의</p>
          <p>아이디 정보를 입력해주세요.</p>
        </Styled.TextAlign>
        <Styled.InputAlign>
          <CheckNone placeholder="이메일을 입력해주세요" />
          <CheckNone placeholder="비밀번호를 입력해주세요." />
          <CheckNone placeholder="비밀번호를 다시 한번 입력해주세요." />
        </Styled.InputAlign>
        <Styled.AgreementAlign>
          <Agreement checked={handleOnChange} />
        </Styled.AgreementAlign>
        <Styled.AbsoluteColBtn onClick={() => navigate('/join-pro/3')}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro2;
