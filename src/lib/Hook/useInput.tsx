import {useState} from 'react';

interface IInputProp {
  initialValue?: string | number;
  validator: boolean;
}

const useInput = ({initialValue, validator}: IInputProp) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: {target: HTMLInputElement}) => {
    const {
      target: {value},
    } = event;

    let willUpdate = true;
    if (typeof validator === 'function') willUpdate = validator(value);
    if (willUpdate) setValue(value);
  };
  return {value, onChange};
};
