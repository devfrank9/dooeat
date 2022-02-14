import styled from 'styled-components';
/* 
export const InputCommon = () => <Common />;
export const InputCommonShort = () => <CommonShort />;
export const InputCheckNone = () => <CheckNone />;
export const InputCheckOk = () => <CheckOk />;
export const InputCheckErr = () => <CheckErr />;
export const InputContent = () => <Content />;
 */
export const Common = styled.input`
  width: 100vw;
  height: 4.3333rem;
  padding-left: 1.6667rem;
  border: 0.1rem solid rgb(223, 223, 223);
  font-size: 1.25rem;
  border-radius: 0.5rem;
  display: block;
  box-sizing: border-box;
  &::-webkit-input-placeholder {
    font-size: 1.1667rem;
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
  width: 8.3333rem;
  height: 4.3333rem;
  padding-left: 1.6667rem;
  border: 0.1rem solid rgb(223, 223, 223);
  font-size: 1.25rem;
  border-radius: 0.5rem;
  display: block;
  box-sizing: border-box;
  &::-webkit-input-placeholder {
    font-size: 1.1667rem;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
export const CheckNone = styled(Common)`
  background: url('/image/Icon feather-check.png') no-repeat 95% 50%;
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
export const TextArea = styled.input`
  width: 26.5833rem;
  height: 6.6667rem;
  padding-left: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  border: 0.1rem solid rgb(223, 223, 223);
  display: block;
  box-sizing: border-box;
  padding-bottom: 3rem;
  &::-webkit-input-placeholder {
    font-size: 1.1667rem;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
