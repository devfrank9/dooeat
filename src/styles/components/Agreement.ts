import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyle = styled(Link)`
  font-size: 14px;
  color: rgb(151, 151, 151);
`;
export const AgreementAlign = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CheckInput = styled.div`
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
