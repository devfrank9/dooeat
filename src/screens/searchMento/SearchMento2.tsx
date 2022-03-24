import BaseScreen, {AlignBase} from '../BaseScreen';
import styled from 'styled-components';
import {ShortBtn, MiddleBtn, LongBtn} from '../../styles/BtnStyled';
import {TextArea} from '../../styles/InputStyled';
import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ValidBtn from '../../components/ValidBtn';
import {useRecoilState, useRecoilValue} from 'recoil';
import {userFormState, __me} from '../../lib/atom';

interface Iselect {
  [x: string]: any;
  key: number;
  list: string[];
}

const SearchMento2 = () => {
  const navigate = useNavigate();
  const arr = [
    {key: 1, list: ['1끼', '2끼', '3끼', '4끼 이상']},
    {key: 2, list: ['아침', '점심', '저녁', '간식', '야식']},
    {key: 3, list: ['반그릇', '한그릇', '두그릇 이상']},
  ];
  const [pick, setPick] = useState<Iselect[]>(arr);
  const [select, setSelect] = useState<string[]>([]);
  const [select2, setSelect2] = useState<string[]>([]);
  const [select3, setSelect3] = useState<string[]>([]);

  const [userData, setUserData] = useRecoilState(userFormState);
  const [signup, setSignup] = useState({});
  const getMe = useRecoilValue(__me);

  useEffect(() => {
    setUserData({...userData, subject: getMe?.mb_nick});
  }, []);

  const btnRender = (n: number) => {
    const list: string[] = pick[n].list;
    if (n === 0) {
      return list.map((item, index) => (
        <MiddleBtn
          key={index}
          onClick={() => toggleResult(item)}
          isActive={select.includes(item) ? true : false}
        >
          {item}
        </MiddleBtn>
      ));
    }
    if (n === 1) {
      return list.map((item, index) => (
        <ShortBtn
          key={index}
          onClick={() => toggleResult2(item)}
          isActive={select2.includes(item) ? true : false}
        >
          {item}
        </ShortBtn>
      ));
    }
    if (n === 2) {
      return list.map((item, index) => (
        <LongBtn
          key={index}
          onClick={() => toggleResult3(item)}
          isActive={select3.includes(item) ? true : false}
        >
          {item}
        </LongBtn>
      ));
    }
  };
  const toggleResult = useCallback(
    (item: string) => {
      !select.includes(item)
        ? setSelect(select => [item])
        : setSelect(select.filter(button => button !== item));
      setSignup({wr_2: item});
    },
    [select],
  );
  const toggleResult2 = useCallback(
    (item: string) => {
      !select2.includes(item)
        ? setSelect2(select2 => [item])
        : setSelect2(select2.filter(button => button !== item));
      setSignup({wr_3: item});
    },
    [select2],
  );
  const toggleResult3 = useCallback(
    (item: string) => {
      !select3.includes(item)
        ? setSelect3(select3 => [item])
        : setSelect3(select3.filter(button => button !== item));
      setSignup({wr_4: item});
    },
    [select3],
  );

  const processSignup = () => {
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/search-mento/3');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <div
          style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
        >
          <TextAlign>
            <p>회원님의</p>
            <div style={{display: 'flex'}}>
              <p style={{fontWeight: '500'}}>식습관</p>을 알려주세요!
            </div>
          </TextAlign>
          <Subject>1. 하루 몇 끼를 드시나요?</Subject>
          <BtnAlign>{btnRender(0)}</BtnAlign>
          <Subject>2. 평소에 어떤 맛을 선호 하시나요?</Subject>
          <BtnAlign>{btnRender(1)}</BtnAlign>
          <Subject>3. 한 끼 식사량이 얼마나 되시나요?</Subject>
          <BtnAlign>{btnRender(2)}</BtnAlign>
          <Subject>4. 특이사항이 있다면 알려주세요!</Subject>
          <TextArea
            placeholder="내용을 입력해주세요"
            onChange={e => setSignup({wr_5: e.target.value})}
          />
          <ValidBtn
            onClick={() => processSignup()}
            status={
              (select.length,
              select2.length,
              select3.length >= 1 ? 'succ' : 'err')
            }
            disabled={
              (select.length,
              select2.length,
              select3.length >= 1 ? false : true)
            }
          >
            다음
          </ValidBtn>
        </div>
      </AlignBase>
    </BaseScreen>
  );
};

const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
  button {
  }
`;
export const Subject = styled.p`
  margin: 0 1px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 13px;
`;
export const TextAlign = styled.div`
  font-size: 22px;
  margin: 0 10px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-bottom: 40px;
  margin-top: 80px;
`;

export default SearchMento2;
