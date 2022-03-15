import React, {useEffect} from 'react';
import styled from 'styled-components';
import useToggle from '../hooks/useToggle';

const Switch = ({label}: any) => {
  const {isEnabled, toggleCallback} = useToggle();
  return (
    <Container>
      {label}{' '}
      <ToggleSwitch>
        <CheckBox
          type="checkbox"
          name={label}
          id={label}
          isChecked={isEnabled === false ? false : true}
          onChange={e => toggleCallback()}
        />
        <Label htmlFor={label} isChecked={isEnabled === false ? false : true}>
          <Inner isChecked={isEnabled === false ? false : true} />
          <SwitchSpan isChecked={isEnabled === false ? false : true} />
        </Label>
      </ToggleSwitch>
    </Container>
  );
};

const ToggleSwitch = styled.div`
  position: relative;
  width: 62px;
  display: inline-block;
  text-align: left;
  margin-left: 8px;
`;
const CheckBox = styled.input<{isChecked: boolean}>`
  display: none;
  margin-left: ${prop => (prop.isChecked === false ? `none` : 0)};
  right: ${prop => (prop.isChecked === false ? `none` : 0)};
`;
const Label = styled.label<{isChecked: boolean}>`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #bbb;
  border-radius: 15px;
  margin-left: ${prop => (prop.isChecked === false ? `none` : 0)};
  right: ${prop => (prop.isChecked === false ? 'none' : 0)};
`;
const Inner = styled.span<{isChecked: boolean}>`
  display: block;
  width: 200%;
  margin-left: ${prop => (prop.isChecked === false ? `-100%` : 0)};
  transition: margin 0.3s ease-in 0s;
  &::before,
  &::after {
    float: left;
    width: 50%;
    height: 30px;
    padding: 0;
    line-height: 32px;
    color: #fff;
    font-family: roboto;
    box-sizing: border-box;
    font-size: 13px;
  }
  &::before {
    content: 'ON';
    padding-left: 10px;
    background-color: ${prop => prop.theme.mainColor};
    color: white;
  }
  &::after {
    content: 'OFF';
    padding-right: 10px;
    background-color: rgb(245, 245, 245);
    color: white;
    text-align: right;
  }
`;
const SwitchSpan = styled.span<{isChecked: boolean}>`
  display: block;
  width: 22px;
  margin: 5px;
  background: white;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${prop => (prop.isChecked === false ? '30px' : 0)};
  border: 0 solid #bbb;
  border-radius: 11px;
  transition: all 0.3s ease-in 0s;
`;
const Container = styled.div`
  display: flex;
  text-align: center;
  font-size: 14px;
`;

export default React.memo(Switch);
