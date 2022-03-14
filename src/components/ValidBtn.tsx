import styled from 'styled-components';
import {ColoredBtn} from '../styles/BtnStyled';

interface Prop extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: 'err' | 'succ';
}

export default (props: Prop) => {
  const style =
    props.status === 'err' ? `rgb(245,245,245)` : 'succ' ? `#EF90A7` : '';
  const textColor = props.status === 'err' ? 'black' : 'succ' ? 'white' : '';

  return (
    <AbsoluteColBtn
      {...props}
      style={{color: `${textColor}`, background: `${style}`}}
    />
  );
};
const AbsoluteColBtn = styled(ColoredBtn)`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  width: 85%;
  max-width: 480px;
`;
