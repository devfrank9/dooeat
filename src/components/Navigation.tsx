import styled from 'styled-components';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useRoutes} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {__me} from '../lib/atom';

export const Navigation = () => {
  const getUserLevel = useRecoilValue(__me);
  const match1 = useRoutes([{path: '/profile'}]);
  const match2 = useRoutes([{path: '/manage'}]);
  const match3 = useRoutes([{path: '/community/favor'}]);
  const match4 = useRoutes([{path: '/shop'}]);
  const match5 = useRoutes([{path: '/meal'}]);
  const match6 = useRoutes([{path: '/health'}]);
  const match7 = useRoutes([{path: '/pro'}]);
  const match8 = useRoutes([{path: '/community/favor'}]);
  const match9 = useRoutes([{path: '/shop'}]);
  const {path} = useParams();
  const navigate = useNavigate();

  return (
    <>
      {getUserLevel?.mb_level === 2 ? (
        <NavContainer>
          <button onClick={() => navigate('/meal')}>
            <Img1
              src={
                match5 !== undefined ? '/image/nav3.png' : '/image/nav3_un.png'
              }
              alt=""
            />
          </button>
          <button onClick={() => navigate('/health')}>
            <Img1
              src={match6 !== null ? '/image/nav4.png' : '/image/nav4_un.png'}
              alt=""
            />
          </button>
          <button onClick={() => navigate('/pro')}>
            <Img1
              src={match7 !== null ? '/image/nav5.png' : '/image/nav5_un.png'}
              alt=""
            />
          </button>
          <button onClick={() => navigate('/community/favor')}>
            <Img1
              src={match8 !== null ? '/image/nav6.png' : '/image/nav6_un.png'}
              alt=""
            />
          </button>
          <button onClick={() => navigate('/shop')}>
            <Img1
              src={match9 !== null ? '/image/nav7.png' : '/image/nav7_un.png'}
              alt=""
            />
          </button>
        </NavContainer>
      ) : (
        <NavContainer>
          <button style={{width: '94px'}} onClick={() => navigate('/profile')}>
            <Img1
              src={match1 !== null ? '/image/nav2.png' : '/image/nav2_un.png'}
              alt=""
            />
          </button>
          <button style={{width: '94px'}} onClick={() => navigate('/manage')}>
            <Img1
              src={match2 !== null ? '/image/nav1.png' : '/image/nav1_un.png'}
              alt=""
            />
          </button>
          <button
            style={{width: '94px'}}
            onClick={() => navigate('/community/favor')}
          >
            <Img1
              src={match3 !== null ? '/image/nav6.png' : '/image/nav6_un.png'}
              alt=""
            />
          </button>
          <button style={{width: '94px'}} onClick={() => navigate('/shop')}>
            <Img1
              src={match4 !== null ? '/image/nav7.png' : '/image/nav7_un.png'}
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
