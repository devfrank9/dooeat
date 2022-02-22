import React from 'react';
import styled from 'styled-components';

const Switch = (props: any) => {
  const {isChecked, handleToggle} = props;

  return (
    <div style={{width: '100px', height: '100px'}}>
      <SwitchCheckBox
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        id={`switch-input`}
      />
      <SwitchLabel htmlFor={`switch-input`}>
        <Ball />
      </SwitchLabel>
    </div>
  );
};

const SwitchCheckBox = styled.input`
  display: none;
  &:checked + .switch-label-theme .ball {
    transform: translateX(24px);
  }
`;
const SwitchLabel = styled.label`
  position: relative;
  height: 26px;
  width: 50px;
  border-radius: 50px;
  background-color: var(--switch-bg-color);
`;
const Ball = styled.div`
  position: absolute;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: transform 0.2s linear;
  background-color: var(--ball-color);
`;

export default Switch;
