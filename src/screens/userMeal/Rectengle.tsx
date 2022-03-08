import {Link} from 'react-router-dom';
import styled from 'styled-components';

interface Prop {
  img: any;
  emoji?: string;
  text: string;
  link?: any;
}

export const RectPrev = ({img, emoji, text, link}: Prop) => {
  return (
    <Preview to={link}>
      <div>{text}</div>
      <img src={emoji} alt="" />
    </Preview>
  );
};

export const RectInput = () => {
  return <RectLink to="/user/meal/edit" />;
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
const Preview = styled(Link)`
  position: relative;
  display: block;
  min-width: 150px;
  width: 47.022%;
  padding-bottom: 47.022%;
  border: 1px solid ${props => props.theme.btnColor2};
  border-radius: 10px;
  background: url('/image/IIcon feather-plus-circle.png') no-repeat 50% 50%;
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
