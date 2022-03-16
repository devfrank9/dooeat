import {useEffect, useState} from 'react';
import {useQueryForContent} from '../lib/GQL/CommunicationMap';
import * as Styled from '../styles/components/Agreement';

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
    <Styled.AgreementAlign>
      <Styled.CheckInput>
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
      </Styled.CheckInput>
      <Styled.CheckInput>
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
        <Styled.LinkStyle to="/agree1" style={{width: 35}}>
          보기
        </Styled.LinkStyle>
      </Styled.CheckInput>
      <Styled.CheckInput>
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
        <Styled.LinkStyle to="/agree1" style={{width: 35}}>
          보기
        </Styled.LinkStyle>
      </Styled.CheckInput>
    </Styled.AgreementAlign>
  );
};

export default Agreement;
