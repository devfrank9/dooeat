import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;
export const LinkStyle2 = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mainColor};
  font-weight: bold;
`;
