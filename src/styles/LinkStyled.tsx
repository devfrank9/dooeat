import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.fontColor3};
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
`;
export const LinkStyle2 = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mainColor};
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
`;
