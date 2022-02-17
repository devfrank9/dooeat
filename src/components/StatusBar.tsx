import {Link} from 'react-router-dom';
import styled from 'styled-components';

interface Prop {
  Subject?: string;
  Img?: string;
}
export const StatusBar2 = ({
  Subject = '오늘',
  Img = '/image/Icon ionic-ios-close.png',
}: Prop) => {
  return (
    <Container>
      <StatusText>{Subject}</StatusText>
      <StatusMyInfo2>
        <Link to="/meal">
          <button>
            <img src={Img} alt="." />
          </button>
        </Link>
      </StatusMyInfo2>
    </Container>
  );
};

export const StatusBar = ({Subject = '오늘', Img = ''}: Prop) => {
  return (
    <Container>
      <StatusText>{Subject}</StatusText>
      <StatusMyInfo>
        <button>
          <img src={Img} alt="." />
        </button>
      </StatusMyInfo>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0rem 0.1rem 0.5rem 0rem rgb(223, 223, 223, 0.8);
  margin: 0 -28px;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: white;
`;
export const StatusText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${prop => prop.theme.fontColor1};
`;
const StatusMyInfo = styled.div`
  position: fixed;
  right: 28px;
  button {
    width: 27px;
    height: 27px;
    border: none;
    background-color: inherit;
    img {
      width: 27px;
      height: 27px;
    }
  }
`;
const StatusMyInfo2 = styled.div`
  position: fixed;
  right: 28px;
  button {
    width: 15px;
    height: 15px;
    border: none;
    background-color: inherit;
    img {
      width: 15px;
      height: 15px;
    }
  }
`;
