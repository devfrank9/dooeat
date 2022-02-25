// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {UrlInputAdd, UrlInputDel} from '../../styles/InputStyled';
import * as Styled from '../../styles/joinPro/styled';
import {useNavigate} from 'react-router-dom';

const JoinPro6 = () => {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={6} />
        <Styled.TextAlign2>
          <p>전문가님의</p>
          <p>운영하는 사이트를 입력해주세요.</p>
        </Styled.TextAlign2>
        <Styled.InputAlign2>
          <UrlInputAdd placeholder="사이트 링크를 입력해주세요." />
          <UrlInputDel value="https://naver.com" />
        </Styled.InputAlign2>
        <Styled.AbsoluteColBtn onClick={() => navigate('/join-pro/7')}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro6;
