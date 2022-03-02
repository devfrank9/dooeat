import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useQueryForContent} from '../lib/GQL/CommunicationMap';

interface Prop {
  checked: () => void;
}

const Agreement = ({checked}: Prop) => {
  const [privacy, setPrivacy] = useState('');
  const [provision, setProvision] = useState('');

  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [provisionCheck, setProvisionCheck] = useState(false);

  const contentQuery1 = useQueryForContent({co_id: 'privacy'});
  const contentQuery2 = useQueryForContent({co_id: 'provision'});

  useEffect(() => {
    if (contentQuery1.data && contentQuery1.data.getContent) {
      setPrivacy(contentQuery1.data.getContent);
    }
  }, [contentQuery1]);
  useEffect(() => {
    if (contentQuery2.data && contentQuery2.data.getContent) {
      setProvision(contentQuery2.data.getContent);
    }
  }, [contentQuery2]);

  return (
    <AgreementAlign>
      <CheckInput>
        <input
          type="checkbox"
          id="check1"
          checked={privacyCheck && provisionCheck}
          onChange={e => {
            if (privacyCheck && provisionCheck) {
              setPrivacyCheck(false);
              setProvisionCheck(false);
            } else {
              setPrivacyCheck(true);
              setProvisionCheck(true);
            }
          }}
        />
        <label htmlFor="check1" />
        <p>회원가입 약관에 모두 동의합니다.</p>
      </CheckInput>
      <CheckInput>
        <input
          type="checkbox"
          id="check2"
          value={privacy}
          checked={privacyCheck}
          onChange={e => setPrivacyCheck(e.target.checked)}
        />
        <label htmlFor="check2" />
        <p>개인정보처리방침</p>
        <div style={{flex: 1}} />
        <LinkStyle to="/agree1" style={{width: 35}}>
          보기
        </LinkStyle>
      </CheckInput>
      <CheckInput>
        <input
          type="checkbox"
          id="check3"
          value={provision}
          checked={provisionCheck}
          onChange={e => setProvisionCheck(e.target.checked)}
        />
        <label htmlFor="check3" />
        <p>서비스이용약관</p>
        <div style={{flex: 1}} />
        <LinkStyle to="/agree1" style={{width: 35}}>
          보기
        </LinkStyle>
      </CheckInput>
    </AgreementAlign>
  );
};

const LinkStyle = styled(Link)`
  font-size: 14px;
  color: rgb(151, 151, 151);
`;
const AgreementAlign = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckInput = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 16px;
  }
  &:last-child {
    margin-top: 16px;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
  }
  input {
    display: none;
  }
  input + label {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 1px solid rgb(223, 223, 223);
    position: relative;
    margin-right: 16px;
  }
  input:checked + label::after {
    content: '✔';
    font-size: 15px;
    width: 24px;
    height: 24px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export default Agreement;
