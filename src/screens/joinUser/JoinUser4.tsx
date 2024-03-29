// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import Footer from '../../components/Footer';
// Styles
import DropDown from '../../components/JoinSelect';
import * as Styled from '../../styles/joinUser/styled';
import {useState} from 'react';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';
import {selectLocation, userFormState} from '../../lib/atom';
import {useRecoilState, useRecoilValue} from 'recoil';

const JoinUser4 = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [userData, setUserData] = useRecoilState(userFormState);
  const location = useRecoilValue(selectLocation);

  const processSignup = () => {
    setSignup({...signup, mb_addr1: location});
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-user/5');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={4} />
        <Styled.TextAlign>
          <p>회원님의</p>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: '500'}}>사는 곳</p>은 어디인가요?
          </div>
        </Styled.TextAlign>
        <Styled.SelectAlign>
          <DropDown location={location} />
        </Styled.SelectAlign>
        <div style={{flex: 1}} />
        <Styled.AbsoluteUnColBtn onClick={() => navigate('/join-user/5')}>
          건너뛰기
        </Styled.AbsoluteUnColBtn>
        <div style={{height: '12px'}} />
        <Styled.AbsoluteColBtn2 onClick={processSignup}>
          다음
        </Styled.AbsoluteColBtn2>
        <Styled.FooterAlign2>
          <Footer />
        </Styled.FooterAlign2>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser4;
