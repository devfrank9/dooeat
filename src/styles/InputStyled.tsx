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
  width: 100%;
  height: 52px;
  padding-left: 20px;
  border: 0.1rem solid rgb(223, 223, 223);
  font-size: 15px;
  border-radius: 0.5rem;
  display: block;
  box-sizing: border-box;
  &::-webkit-input-placeholder {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    opacity: 0.8;
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
export const TextArea = styled.textarea`
  height: 80px;
  padding-left: 18px;
  padding-top: 16px;
  border-radius: 8px;
  font-size: 15px;
  border: 1px solid rgb(223, 223, 223);
  box-sizing: border-box;
  &::-webkit-input-placeholder {
    font-size: 14px;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
export const UrlInputAdd = styled.input`
  display: flex;
  width: 88.6vw;
  height: 6.4vh;
  align-items: center;
  padding-left: 1rem;
  border: 0.1rem solid rgb(223, 223, 223);
  border-radius: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('/image/Icon feather-plus-circle.png') no-repeat 95% 50%;
  box-sizing: border-box;
  background-color: white;
  color: black;
  font-size: 1.25rem;
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
export const UrlInputDel = styled.input`
  display: flex;
  width: 88.6vw;
  height: 6.4vh;
  align-items: center;
  padding-left: 1rem;
  border: 0.1rem solid ${props => props.theme.mainColor};
  border-radius: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('/image/Icon ionic-ios-close-circle-outline.png') no-repeat
    95% 50%;
  box-sizing: border-box;
  background-color: rgb(255, 249, 249);
  color: ${props => props.theme.mainColor};
  font-size: 1.25rem;
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
