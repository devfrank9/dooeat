import react from 'react';

interface Prop {
  onChangeText: (e: string) => void;
  inputStatus?: boolean;
  compType: 'short' | 'content' | 'normal';
}
export default ({onChangeText, inputStatus, compType = 'normal'}: Prop) => {};
