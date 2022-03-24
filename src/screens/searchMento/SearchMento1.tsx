import styled from 'styled-components';
import BaseScreen, {AlignBase} from '../BaseScreen';
import {LongBtn} from '../../styles/BtnStyled';
import {Common} from '../../styles/InputStyled';
import {ColoredBtn} from '../../styles/BtnStyled';
import {useState, useCallback, useEffect} from 'react';
import ValidBtn from '../../components/ValidBtn';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {userFormState} from '../../lib/atom';
import {RequestMutationSetBoardWrite} from '../../lib/GQL/GQLInterfaces';

const SearchMento1 = () => {
  const navigate = useNavigate();
  const arr: string[] = [
    '헬스',
    '요가',
    '필라테스',
    '크로스핏',
    '복싱',
    '주짓수',
    '수영',
    '기타',
  ];
  const [select, setSelect] = useState<string[]>([]);
  const [userData, setUserData] = useRecoilState(userFormState);
  const [signup, setSignup] = useState({});

  useEffect(() => {
    setUserData({...userData, bo_table: 'searchExpert'});
  }, []);

  const toggleResult = useCallback(
    (item: string) => {
      !select.includes(item)
        ? setSelect(select => [item])
        : setSelect(select.filter(button => button !== item));
      setSignup({wr_1: item});
    },
    [select],
  );

  const btnRender = () => {
    return arr.map((item, index) => (
      <LongBtn
        key={index}
        onClick={() => toggleResult(item)}
        isActive={select.includes(item) ? true : false}
      >
        {item}
      </LongBtn>
    ));
  };

  const processSignup = () => {
    setUserData(signup);
    navigate('/search-mento/2');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <div
          style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
        >
          <TextAlign>
            <p>관심있는</p>
            <div style={{display: 'flex'}}>
              <p style={{fontWeight: '500'}}>운동분야</p>를 선택해주세요.
            </div>
          </TextAlign>
          <BtnAlign>
            {btnRender()}
            <DisplayNone />
          </BtnAlign>
          <InputAlign>
            <Common
              placeholder="기타 (별도 입력 해주세요.)"
              //@ts-ignore
              disabled={select.includes('기타') === true ? false : true}
              onChange={e => setSignup({wr_1: e.target.value})}
            />
          </InputAlign>
          <ValidBtn
            onClick={() => processSignup()}
            status={select.length >= 1 ? undefined : 'err'}
            disabled={select.length !== 1 ? true : false}
          >
            다음
          </ValidBtn>
        </div>
      </AlignBase>
    </BaseScreen>
  );
};
export const BtnFix = styled(ColoredBtn)`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  width: 85%;
  max-width: 480px;
`;
const TextAlign = styled.div`
  font-size: 22px;
  margin: 0 10px;
  font-weight: 400;
  line-height: 33px;
  margin-left: 10px;
  margin-top: 151px;
`;
const BtnAlign = styled.div`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
  height: auto;
  button {
    margin-bottom: 8px;
  }
`;
const DisplayNone = styled(LongBtn)`
  background-color: inherit;
`;
const InputAlign = styled.div`
  margin-top: 13px;
`;

export default SearchMento1;
