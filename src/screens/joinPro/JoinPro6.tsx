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
import {useState} from 'react';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';
import {useRecoilState} from 'recoil';
import {userFormState} from '../../lib/atom';

const JoinPro6 = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [userData, setUserData] = useRecoilState(userFormState);
  const [data, setData] = useState('');

  const [inputUrl, setInputUrl] = useState('');
  const [inputUrl2, setInputUrl2] = useState('');
  const [disable, setDisable] = useState(false);
  const [disable2, setDisable2] = useState(false);

  const onClick = (e: any) => setDisable(prev => !prev);
  const onClick2 = () => setDisable2(prev => !prev);

  const processSignup = () => {
    // @ts-ignore
    signup.mb_6.push(data);
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-pro/7');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={6} />
        <Styled.TextAlign2>
          <p>전문가님의</p>
          <p>운영하는 사이트를 입력해주세요.</p>
        </Styled.TextAlign2>
        <Styled.InputAlign2>
          {disable === false ? (
            <div style={{position: 'relative'}}>
              <UrlInputAdd
                placeholder="사이트 링크를 입력해주세요."
                onChange={e => {
                  setInputUrl(e.target.value);
                  setSignup({
                    ...signup,
                    mb_6: [e.target.value],
                  });
                }}
              />
              <PlusBtn disabled={disable} onClick={onClick} />
            </div>
          ) : (
            <div style={{position: 'relative'}}>
              <UrlInputDel value={inputUrl} readOnly />
              <RemBtn disabled={!disable} onClick={onClick} />
            </div>
          )}
          {disable2 === false ? (
            <div style={{position: 'relative'}}>
              <UrlInputAdd
                placeholder="사이트 링크를 입력해주세요."
                onChange={e => {
                  setInputUrl2(e.target.value);
                  setData(e.target.value);
                }}
              />
              <PlusBtn disabled={disable2} onClick={onClick2} />
            </div>
          ) : (
            <div style={{position: 'relative'}}>
              <UrlInputDel value={inputUrl2} readOnly />
              <RemBtn disabled={!disable2} onClick={onClick2} />
            </div>
          )}
        </Styled.InputAlign2>
        <Styled.AbsoluteColBtn onClick={processSignup}>
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

const PlusBtn = styled.button`
  background: url('/image/Icon feather-plus-circle.png') no-repeat 50% 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 16px;
  right: 21px;
  border: none;
`;
const RemBtn = styled.button`
  background: url('/image/Icon ionic-ios-close-circle-outline.png') no-repeat
    50% 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 16px;
  right: 21px;
  border: none;
`;

export default JoinPro6;
