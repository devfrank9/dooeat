import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useRoutes} from 'react-router-dom';

export const Navigation2 = () => {
  const match1 = useRoutes([{path: '/pro/profile'}]);
  const match2 = useRoutes([{path: '/pro/manage'}]);
  const match3 = useRoutes([{path: '/community/favor'}]);
  const match4 = useRoutes([{path: '/shop'}]);

  return (
    <NavContainer>
      <Link to="/pro/profile">
        <button style={{width: '94px'}}>
          <Img1
            src={match1 !== null ? '/image/nav2.png' : '/image/nav2_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/pro/manage ">
        <button style={{width: '94px'}}>
          <Img1
            src={match2 !== null ? '/image/nav1.png' : '/image/nav1_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/community/favor">
        <button style={{width: '94px'}}>
          <Img1
            src={match3 !== null ? '/image/nav6.png' : '/image/nav6_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/shop">
        <button style={{width: '94px'}}>
          <Img1
            src={match4 !== null ? '/image/nav7.png' : '/image/nav7_un.png'}
            alt=""
          />
        </button>
      </Link>
    </NavContainer>
  );
};

export const Navigation = () => {
  const match1 = useRoutes([{path: '/user/meal'}]);
  const match2 = useRoutes([{path: '/user/health'}]);
  const match3 = useRoutes([{path: '/user/pro'}]);
  const match4 = useRoutes([{path: '/community/favor'}]);
  const match5 = useRoutes([{path: '/shop'}]);

  return (
    <NavContainer>
      <Link to="/user/meal">
        <button>
          <Img1
            src={match1 !== null ? '/image/nav3.png' : '/image/nav3_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/user/health ">
        <button>
          <Img1
            src={match2 !== null ? '/image/nav4.png' : '/image/nav4_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/user/pro">
        <button>
          <Img1
            src={match3 !== null ? '/image/nav5.png' : '/image/nav5_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/community/favor">
        <button>
          <Img1
            src={match4 !== null ? '/image/nav6.png' : '/image/nav6_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/shop">
        <button>
          <Img1
            src={match5 !== null ? '/image/nav7.png' : '/image/nav7_un.png'}
            alt=""
          />
        </button>
      </Link>
    </NavContainer>
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
