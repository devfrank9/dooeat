import styled from 'styled-components';
import {useLocation, useNavigate} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {__me} from '../lib/atom';

export const Navigation = () => {
  const getUserLevel = useRecoilValue(__me);
  const navigate = useNavigate();
  const {pathname} = useLocation();

  return (
    <>
      {getUserLevel?.mb_level === 2 ? (
        <NavContainer>
          <button onClick={() => navigate('/meal')}>
            <Img1
              src={
                pathname === '/meal' ? '/image/nav3.png' : '/image/nav3_un.png'
              }
              alt=""
            />
          </button>
          <button onClick={() => navigate('/health')}>
            <Img1
              src={
                pathname === '/health'
                  ? '/image/nav4.png'
                  : '/image/nav4_un.png'
              }
              alt=""
            />
          </button>
          <button onClick={() => navigate('/pro')}>
            <Img1
              src={
                pathname === '/pro' ? '/image/nav5.png' : '/image/nav5_un.png'
              }
              alt=""
            />
          </button>
          <button onClick={() => navigate('/community/favor')}>
            <Img1
              src={
                pathname === '/community/favor'
                  ? '/image/nav6.png'
                  : '/image/nav6_un.png'
              }
              alt=""
            />
          </button>
          <button onClick={() => navigate('/shop')}>
            <Img1
              src={
                pathname === '/shop' ? '/image/nav7.png' : '/image/nav7_un.png'
              }
              alt=""
            />
          </button>
        </NavContainer>
      ) : (
        <NavContainer>
          <button style={{width: '94px'}} onClick={() => navigate('/profile')}>
            <Img1
              src={
                pathname === '/profile'
                  ? '/image/nav2.png'
                  : '/image/nav2_un.png'
              }
              alt=""
            />
          </button>
          <button style={{width: '94px'}} onClick={() => navigate('/manage')}>
            <Img1
              src={
                pathname === '/manage'
                  ? '/image/nav1.png'
                  : '/image/nav1_un.png'
              }
              alt=""
            />
          </button>
          <button
            style={{width: '94px'}}
            onClick={() => navigate('/community/favor')}
          >
            <Img1
              src={
                pathname === '/community/favor'
                  ? '/image/nav6.png'
                  : '/image/nav6_un.png'
              }
              alt=""
            />
          </button>
          <button style={{width: '94px'}} onClick={() => navigate('/shop')}>
            <Img1
              src={
                pathname === '/shop' ? '/image/nav7.png' : '/image/nav7_un.png'
              }
              alt=""
            />
          </button>
        </NavContainer>
      )}
    </>
  );
};

const Img1 = styled.img`
  position: fixed;
  bottom: 0;
`;
const NavContainer = styled.div`
  position: fixed;
  width: 100vw;
  max-width: 480px;
  height: 69.7px;
  bottom: 0%;
  display: flex;
  justify-content: space-between;
  margin: 0 -28px;
  border-top: 1px solid rgb(233, 233, 233);
  background-color: white;
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75px;
    flex: 1;
    border: none;
    background-color: inherit;
  }
  img {
    position: fixed;
    bottom: 0;
  }
  p {
    position: fixed;
    bottom: 15.8px;
    font-size: 12px;
    color: ${prop => prop.theme.fontColor2};
  }
`;
