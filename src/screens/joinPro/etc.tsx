// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import * as Styled from '../../styles/joinPro/styled';
import {LongLine} from '../../styles/BtnStyled';
import {TextArea} from '../../styles/InputStyled';
import {useRecoilState} from 'recoil';
import {userFormState} from '../../lib/atom';
import {useState} from 'react';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';

const JoinPro3 = () => {
  const [userData, setUserData] = useRecoilState(userFormState);
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [isActive, setIsActive] = useState(false);
  const [disable, setDisable] = useState(false);

  const onActiveToggle = () => setIsActive(prev => !prev);
  const onDisableToggle = () => setDisable(prev => !prev);
  const navigate = useNavigate();
  const processSignup = () => {
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-pro/4');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={3} />
        <Styled.TextAlign2>
          <p>전문가님의</p>
          <p>직업을 선택해주세요.</p>
        </Styled.TextAlign2>
        <Styled.JobAlign>
          <LongLine
            onClick={e => {
              setSignup({...signup, mb_5: '헬스트레이너'});
              onActiveToggle();
            }}
          >
            헬스 트레이너
          </LongLine>
          <LongLine
            onClick={e => {
              setSignup({...signup, mb_5: '요가강사'});
              onActiveToggle();
            }}
          >
            요가 강사
          </LongLine>
          <LongLine
            onClick={e => {
              setSignup({...signup, mb_5: '필라테스강사'});
              onDisableToggle();
            }}
          >
            필라테스 강사
          </LongLine>
          <LongLine>기타(별도입력)</LongLine>
        </Styled.JobAlign>
        <TextArea
          placeholder="내용을 입력해주세요."
          onChange={e => {
            setSignup({...signup, mb_5: e.target.value});
          }}
          disabled={false}
        />
        <Styled.AbsoluteColBtn onClick={processSignup}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinPro3;
