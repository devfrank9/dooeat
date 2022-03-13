import styled from 'styled-components';
import {ColoredBtn} from '../styles/BtnStyled';

interface Prop extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: 'err' | undefined;
}

export default (props: Prop) => {
  const style = props.status === 'err' ? `rgb(245,245,245)` : `#EF90A7`;
  const valid = props.status === 'err' ? false : true;
  const textColor = props.status === 'err' ? 'black' : 'white';

  return (
    <AbsoluteColBtn
      {...props}
      disabled={valid}
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
