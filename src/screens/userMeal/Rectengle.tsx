import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Rectengle = () => {
  return <RectLink to="/user/meal/edit"></RectLink>;
};

const RectLink = styled(Link)`
  display: block;
  min-width: 150px;
  width: 47.022%;
  padding-bottom: 47.022%;
  border: 1px solid ${props => props.theme.btnColor2};
  border-radius: 10px;
  background: url('/image/IIcon feather-plus-circle.png') no-repeat 50% 50%;
`;

export default Rectengle;
