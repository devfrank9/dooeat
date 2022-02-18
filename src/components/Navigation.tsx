import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Navigation = () => {
  return (
    <NavContainer>
      <Link to="/user/meal">
        <button>
          <img src="/image/Icon awesome-apple-alt.png" alt="" />
          <p>식단</p>
        </button>
      </Link>
      <Link to="/user/health">
        <button>
          <img src="/image/exercise.png" alt="" />
          <p>운동</p>
        </button>
      </Link>
      <Link to="/user/pro">
        <button>
          <img src="/image/Icon material-person-pin.png" alt="" />
          <p>전문가</p>
        </button>
      </Link>
      <Link to="/">
        <button>
          <img src="/image/Icon ionic-ios-chatboxes.png" alt="" />
          <p>커뮤니티</p>
        </button>
      </Link>
      <Link to="/">
        <button>
          <img src="/image/Icon metro-shopping-basket.png" alt="" />
          <p>쇼핑몰</p>
        </button>
      </Link>
    </NavContainer>
  );
};
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
    bottom: 40.2px;
  }
  p {
    position: fixed;
    bottom: 15.8px;
    font-size: 12px;
    color: ${prop => prop.theme.fontColor2};
  }
`;
