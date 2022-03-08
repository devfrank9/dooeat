import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const MerchantList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;
export const Align = styled(Link)`
  display: flex;
  flex-direction: column;
  min-width: 152px;
  flex-wrap: wrap;
  width: 47.65%;
  margin-bottom: 20px;
  text-decoration: none;
  &:link {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: black;
    text-decoration: none;
  }
  p:nth-child(2) {
    color: ${prop => prop.theme.fontColor2};
    font-size: 12px;
    font-weight: 500;
  }
  p:nth-child(3) {
    font-size: 14px;
  }
  p:nth-child(4) {
    font-size: 14px;
    font-family: ${prop => prop.theme.roboto};
    font-weight: 700;
  }
`;
export const Merchant = styled.img`
  display: block;
  min-width: 152px;
  width: 100%;
`;
