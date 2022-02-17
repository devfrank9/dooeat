import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.fontColor3};
  font-weight: 500;
  font-size: 16px;
  display:flex;
  flex-direction:column;
`;
export const LinkStyle2 = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mainColor};
  font-weight: 500;
  font-size: 16px;
  display:flex;
  flex-direction:column;
`;
