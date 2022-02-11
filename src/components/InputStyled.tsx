import styled from 'styled-components';

export const InputCommon = () => <Common />;
export const InputCommonShort = () => <CommonShort />;
export const InputCheckNone = () => <CheckNone />;
export const InputCheckOk = () => <CheckOk />;
export const InputCheckErr = () => <CheckErr />;
export const InputContent = () => <Content />;

export const Common = styled.input`
  width: 19.9375rem;
  height: 3.25rem;
  padding-left: 1rem;
  border: 0.1rem solid rgb(223, 223, 223);
  font-size: 1.25rem;
  border-radius: 1rem;
  display: block;
  box-sizing: border-box;
  &::-webkit-input-placeholder {
    font-size: 0.875rem;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
export const CommonShort = styled.input`
  width: 6.25rem;
  height: 3.25rem;
  padding-left: 1.6667rem;
  border: 0.1rem solid rgb(223, 223, 223);
  font-size: 1.25rem;
  border-radius: 0.5rem;
  display: block;
  box-sizing: border-box;
  &::-webkit-input-placeholder {
    font-size: 1.1667em;
  }
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
export const CheckNone = styled(Common)`
  background-image: url('/image/Icon feather-check.png');
  background-repeat: no-repeat;
  background-position: 17.1875rem center;
  box-sizing: border-box;
`;
export const CheckOk = styled(CheckNone)`
  background-image: url('/image/gIcon feather-check.png');
`;
export const CheckErr = styled(CheckNone)`
  background-image: url('/image/rIcon feather-check.png');
`;
export const Content = styled(Common)`
  p {
    position: absolute;
    z-index: 999px;
  }
`;
