import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const FileAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    margin-bottom: 12px;
  }
`;
export const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 32px;
  margin-bottom: 12px;
`;
export const Preview = styled(Link)`
  position: relative;
  display: block;
  min-width: 150px;
  width: 47.022%;
  padding-bottom: 47.022%;
  border: 1px solid ${props => props.theme.btnColor2};
  border-radius: 10px;
  background: url('/image/321.png') no-repeat 50% 50%;
  background-size: cover;
  div {
    position: absolute;
    width: 68px;
    height: 32px;
    border-radius: 16px;
    background-color: rgb(51, 51, 51, 0.6);
    left: 12px;
    top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${prop => prop.theme.fontColor3};
    font-size: 15px;
    font-weight: 300;
  }
  img {
    position: absolute;
    width: 32px;
    height: 32px;
    right: 8px;
    bottom: 8px;
  }
`;
export const RectengleAlign = styled.div`
  display: block;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 30%;
`;
