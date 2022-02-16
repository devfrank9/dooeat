import styled from 'styled-components';
import BaseScreen, {AlignBase} from '../BaseScreen';
import {ColoredBtn} from '../../styles/BtnStyled';
import {LinkStyle} from '../../styles/LinkStyled';
import {Subject, TextAlign} from './SearchMento2';
import DropDown from '../../styles/SelectStyled';

const SearchMento3 = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <div style={{flex: 0.8}} />
        <TextAlign>
          <p>회원님의</p>
          <p>운동습관을 알려주세요!</p>
        </TextAlign>
        <Subject>
          <p>1. 1주일 동안 격렬한 활동한 날은 며칠인가요?</p>
          <p>(예: 달리기,자전거,에어로빅 등)</p>
        </Subject>
        <DropDown />
        <div style={{height: '30px'}} />
        <Subject>
          2. 1주일 동안 평소보다 숨이 조금 더 차게 만드는 정도의 활동을 시행한
          날은 며칠인가요?
        </Subject>
        <DropDown />
        <div style={{height: '30px'}} />
        <Subject>
          3. 1주일 동안 하루 총 30분 이상 걸은 날은 며칠인가요? (출퇴근 시간
          포함)
        </Subject>
        <DropDown />
        <div style={{flex: 1.4}} />
        <ColoredBtn>
          <LinkStyle to="/search-mento/4">다음</LinkStyle>
        </ColoredBtn>
        <div style={{flex: 0.3}} />
      </AlignBase>
    </BaseScreen>
  );
};

export default SearchMento3;
