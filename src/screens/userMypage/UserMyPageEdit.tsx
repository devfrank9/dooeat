import {Link, Navigate, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import {ColoredBtn} from '../../styles/BtnStyled';
import {Common} from '../../styles/InputStyled';
import {Select} from '../../components/JoinSelect';
import BaseScreen, {AlignBase} from '../BaseScreen';
import {useRecoilValue} from 'recoil';
import {__me, __session} from '../../lib/atom';
import {
  useLQueryForGetMe,
  useMutationForSetMember,
} from '../../lib/GQL/CommunicationMap';
import {useEffect, useState} from 'react';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';
import useGetMe from '../../lib/Hook/useGetMe';

const UserMyPageEdit = () => {
  const navigate = useNavigate();
  const session = useRecoilValue(__session);
  const me = useRecoilValue(__me);
  const [query, queryResult] = useLQueryForGetMe();
  const [signup, setSignup] = useState<RequestSetMember>({});
  const refreshMe = useGetMe();
  const [commSetMember] = useMutationForSetMember();
  const [passwordConfirm, setPasswordConfirm] = useState('');

  useEffect(() => {
    setSignup({
      session: session,
      mb_name: me?.mb_nick,
      mb_nick: me?.mb_nick,
      mb_id: me?.mb_id,
      mb_email: me?.mb_email,
      mb_password: '',
      mb_1: me?.mb_1,
      mb_2: me?.mb_2,
      mb_3: me?.mb_3,
      mb_4: me?.mb_4,
      mb_img: me?.mb_img,
    });
  }, [me, session]);

  const process = () => {
    commSetMember({variables: signup}).then(data => {
      if (data.data?.setMember) {
        alert('수정완료되었습니다');
        refreshMe();
        navigate(-1);
      }
    });
  };

  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="내 정보 수정" />
        <div style={{height: '110px'}} />
        <SubjectAlign>
          <Subject>이메일</Subject>
          <p>{signup.mb_email}</p>
        </SubjectAlign>
        <PasswordAlign>
          <form>
            <Subject style={{marginBottom: '8px'}}>비밀번호</Subject>
            <Common
              placeholder="6자리 이상 입력해주세요."
              type="password"
              value={signup.mb_password ?? ''}
              onChange={e => setSignup({...signup, mb_name: e.target.value})}
            />
            <div style={{height: '20px'}} />
            <Subject style={{marginBottom: '8px'}}>비밀번호 확인</Subject>
            <Common
              placeholder="다시 한번 입력해주세요."
              type="password"
              value={passwordConfirm}
              onChange={e => {
                setPasswordConfirm(e.target.value);
              }}
            />
          </form>
        </PasswordAlign>
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>프로필</Subject>
        <PicAlign>
          <input type="file" id="pic" />
          {signup.mb_img !== undefined ? (
            <img src={signup.mb_img} alt="" />
          ) : (
            <>
              <label htmlFor="pic" />
              <img src={signup.mb_img} alt="" />
            </>
          )}
        </PicAlign>
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>닉네임</Subject>
        <Common
          value={signup.mb_nick}
          onChange={e => setSignup({...signup, mb_nick: e.target.value})}
        />
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>나이</Subject>
        <Common
          value={signup.mb_1}
          onChange={e => setSignup({...signup, mb_1: e.target.value})}
        />
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>사는곳</Subject>
        <SelcetAlgin>
          <Select />
          <div style={{width: '9px'}} />
          <Select />
        </SelcetAlgin>
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>현재 체중</Subject>
        <div style={{position: 'relative'}}>
          <Label>kg</Label>
          <Input
            value={signup.mb_2}
            onChange={e => setSignup({...signup, mb_2: e.target.value})}
          />
        </div>
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>키</Subject>
        <div style={{position: 'relative'}}>
          <Label>cm</Label>
          <Input
            value={signup.mb_3}
            onChange={e => setSignup({...signup, mb_3: e.target.value})}
          />
        </div>
        <div style={{height: '20px'}} />
        <Subject style={{marginBottom: '8px'}}>목표 체중</Subject>
        <div style={{position: 'relative'}}>
          <Label>kg</Label>
          <Input
            value={signup.mb_4}
            onChange={e => setSignup({...signup, mb_4: e.target.value})}
          />
        </div>
        <div style={{height: '40px'}} />
        <ColoredBtn onClick={process}>수정 완료</ColoredBtn>
        <div style={{height: '30px'}} />
      </AlignBase>
    </BaseScreen>
  );
};
const Label = styled.label`
  position: absolute;
  top: 15px;
  right: 31px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
`;
const Input = styled(Common)`
  padding-left: 30px;
`;
const SelcetAlgin = styled.div`
  display: flex;
`;
const PicAlign = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: ${props => props.theme.btnColor1};
  img {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 73px;
    bottom: 0;
  }
  input {
    display: none;
  }
  input + label {
    display: inline-block;
    width: 90px;
    height: 900px;
    border-radius: 45px;
    background: url('/image/profileedit.png') no-repeat 50% 50%;
  }
`;
const PasswordAlign = styled.div``;
const SubjectAlign = styled.div`
  p {
    font-size: 14px;
    font-family: ${prop => prop.theme.roboto};
    color: ${prop => prop.theme.fontColor2};
    margin-top: 8px;
  }
  margin-bottom: 20px;
`;
const Subject = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export default UserMyPageEdit;
