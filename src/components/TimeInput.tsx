import styled from 'styled-components';

const TimeInput = () => {};

export const TimeInputStyle = styled.input`
  width: 100%;
  height: 52px;
  border: 0.1rem solid rgb(239, 144, 167);
  font-size: 15px;
  border-radius: 0.5rem;
  display: block;
  box-sizing: border-box;
  background-color: rgb(255, 249, 249);
  background-image: url('/image/Icon feather-clock.png') no-repeat 26px 50%;
  &::-webkit-datetime-edit-fields-wrapper {
    display: flex;
  }
  &::-webkit-datetime-edit-text {
    padding: 19px 4px;
  }
  &::-webkit-datetime-edit-hour-field {
    background-color: rgb(255, 249, 249);
    border-radius: 15%;
    padding: 19px 13px;
    color: rgb(239, 144, 167);
    font-family: roboto;
    font-size: 16px;
  }
  &::-webkit-datetime-edit-minute-field {
    background-color: rgb(255, 249, 249);
    border-radius: 15%;
    padding: 19px 13px;
    color: rgb(239, 144, 167);
    font-family: roboto;
    font-size: 16px;
  }
  &::-webkit-datetime-edit-ampm-field {
    display: none;
  }
  &::-webkit-clear-button {
    display: none;
  }
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export default TimeInput;
