import BaseScreen, {AlignBase} from '../BaseScreen';
import NavProgress from '../../components/NavProgress';
import * as Styled from '../../styles/joinUser/styled';
import {useNavigate} from 'react-router-dom';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {userFormState} from '../../lib/atom';
import {useQueryForCheckDuplicate} from '../../lib/GQL/CommunicationMap';
import CheckInput from '../../components/CheckInput';

const JoinUser2 = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [userData, setUserData] = useRecoilState(userFormState);
  const [commDuplicate, commDuplicateResult] = useQueryForCheckDuplicate();
  const [nickOK, setNickOK] = useState(false);
  const [checkNick, setCheckNick] = useState(false);
  const [errorLabel, setErrorLabel] = useState('');
  const [fileUrl, setFileUrl] = useState(null);

  function processImage(e: any) {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    // @ts-ignore
    setFileUrl(imageUrl);
  }

  const signImg = (e: any) => {
    let FR = new FileReader();
    FR.addEventListener('load', () => {
      // @ts-ignore
      setSignup({
        ...signup,
        mb_img: FR.result as string,
      });
    });
    // @ts-ignore
    FR.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (commDuplicateResult.data?.checkDuplicate) {
      setNickOK(true);
      setErrorLabel('');
    } else if (commDuplicateResult.error) {
      setNickOK(false);
      setErrorLabel('이미 존재하는 닉네임 입니다.');
    }
  }, [commDuplicateResult.data, commDuplicateResult.error]);

  const processSignup = () => {
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-user/3');
  };
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
            <input
              type="file"
              id="fileinput"
              onChange={e => {
                signImg(e);
                processImage(e);
              }}
              accept="image/*"
            />
            {fileUrl !== null ? (
              <img
                src={fileUrl ?? userData.mb_img}
                alt=""
                style={{
                  display: 'inline-block',
                  width: '120px',
                  height: '120px',
                  borderRadius: '60px',
                }}
              />
            ) : (
              <label htmlFor="fileinput" />
            )}
          </Styled.PicAlign>
        </div>
        <div style={{height: '24px'}} />
        <CheckInput
          placeholder="닉네임을 입력해주세요."
          required
          defaultValue={signup.mb_nick ?? ''}
          onChange={e => {
            setSignup({...signup, mb_nick: e.target.value});
            setCheckNick(false);
          }}
          onBlur={() => commDuplicate({variables: {mb_nick: signup.mb_nick}})}
          status={
            errorLabel.length === 0
              ? 'none'
              : errorLabel.length !== 0
              ? 'err'
              : 'succ'
          }
        />
        {errorLabel}
        <Styled.AbsoluteColBtn
          onClick={() => {
            if (errorLabel.length > 0 || !nickOK) return;
            else {
              processSignup();
            }
          }}
        >
          다음
        </Styled.AbsoluteColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser2;
