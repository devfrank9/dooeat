import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useState} from 'react';

export const Navigation2 = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <NavContainer>
      <Link to="/pro/profile" onClick={() => setIsActive(1)}>
        <button style={{width: '94px'}}>
          <Img1
            src={isActive === 1 ? '/image/nav2.png' : '/image/nav2_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/pro/manage " onClick={() => setIsActive(2)}>
        <button style={{width: '94px'}}>
          <Img1
            src={isActive === 2 ? '/image/nav1.png' : '/image/nav1_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/community/favor" onClick={() => setIsActive(3)}>
        <button style={{width: '94px'}}>
          <Img1
            src={isActive === 3 ? '/image/nav6.png' : '/image/nav6_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/shop" onClick={() => setIsActive(4)}>
        <button style={{width: '94px'}}>
          <Img1
            src={isActive === 4 ? '/image/nav7.png' : '/image/nav7_un.png'}
            alt=""
          />
        </button>
      </Link>
    </NavContainer>
  );
};

export const Navigation = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <NavContainer>
      <Link to="/user/meal" onClick={() => setIsActive(1)}>
        <button>
          <Img1
            src={isActive === 1 ? '/image/nav3.png' : '/image/nav3_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/user/health " onClick={() => setIsActive(2)}>
        <button>
          <Img1
            src={isActive === 2 ? '/image/nav4.png' : '/image/nav4_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/user/pro" onClick={() => setIsActive(3)}>
        <button>
          <Img1
            src={isActive === 3 ? '/image/nav5.png' : '/image/nav5_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/community/favor" onClick={() => setIsActive(4)}>
        <button>
          <Img1
            src={isActive === 4 ? '/image/nav6.png' : '/image/nav6_un.png'}
            alt=""
          />
        </button>
      </Link>
      <Link to="/shop" onClick={() => setIsActive(5)}>
        <button>
          <Img1
            src={isActive === 5 ? '/image/nav7.png' : '/image/nav7_un.png'}
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
