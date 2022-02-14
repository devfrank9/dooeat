import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Agreement = () => {
  return (
    <AgreementAlign>
      <CheckInput>
        <input type="checkbox" id="check1" />
        <label htmlFor="check1" />
        <p>회원가입 약관에 모두 동의합니다.</p>
      </CheckInput>
      <CheckInput>
        <input type="checkbox" id="check2" />
        <label htmlFor="check2" />
        <p>개인정보처리방침</p>
        <LinkStyle to="/agree1">보기</LinkStyle>
      </CheckInput>
      <CheckInput>
        <input type="checkbox" id="check3" />
        <label htmlFor="check3" />
        <p>서비스이용약관</p>
        <LinkStyle to="/agree1">보기</LinkStyle>
      </CheckInput>
    </AgreementAlign>
  );
};

const LinkStyle = styled(Link)`
  color: rgb(151, 151, 151);
`;
const AgreementAlign = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`;
const CheckInput = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  p {
    margin: 1.3333rem;
    font-size: 1.25rem;
  }
  input {
    display: none;
  }
  input + label {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 0.0833rem solid rgb(223, 223, 223);
    position: relative;
  }
  input:checked + label::after {
    content: '✔';
    font-size: 25px;
    width: 30px;
    height: 30px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export default Agreement;
