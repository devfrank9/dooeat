import BaseScreen, {AlignBase} from '../BaseScreen';
import {LinkStyle} from '../../styles/LinkStyled';
import {Subject, TextAlign} from './SearchMento2';
import {BtnFix} from './SearchMento1';
import SelectDrop from '../../components/SelectDrop';
import {useState} from 'react';

const SearchMento3 = () => {
  const [item, setItem] = useState('');

  return (
    <BaseScreen>
      <AlignBase>
        <TextAlign onClick={() => console.log(item)}>
          <p>회원님의</p>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: '500'}}>운동습관</p>을 알려주세요!
          </div>
        </TextAlign>
        <Subject>
          <p>1. 1주일 동안 격렬한 활동한 날은 며칠인가요?</p>
          <p>(예: 달리기,자전거,에어로빅 등)</p>
        </Subject>
        <SelectDrop item={item} />
        <div style={{height: '30px'}} />
        <Subject>
          2. 1주일 동안 평소보다 숨이 조금 더 차게 만드는 정도의 활동을 시행한
          날은 며칠인가요?
        </Subject>
        <SelectDrop />
        <div style={{height: '30px'}} />
        <Subject>
          3. 1주일 동안 하루 총 30분 이상 걸은 날은 며칠인가요? (출퇴근 시간
          포함)
        </Subject>
        <SelectDrop />
        <BtnFix>
          <LinkStyle to="/search-mento/4">다음</LinkStyle>
        </BtnFix>
      </AlignBase>
    </BaseScreen>
  );
};

export default SearchMento3;
