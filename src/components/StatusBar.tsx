import {Link, Navigate} from 'react-router-dom';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

interface Prop {
  Subject?: string;
  Img?: string;
  LinkTo?: string;
}
export const StatusBar3 = ({Subject = '오늘'}: Prop) => {
  let navigate = useNavigate();
  return (
    <Container>
      <ArrowContainer>
        <BackArrow
          onClick={() => {
            console.log(1);
            navigate(-1);
          }}
        />
      </ArrowContainer>
      <StatusText>{Subject}</StatusText>
    </Container>
  );
};

export const StatusBar2 = ({
  Subject = '오늘',
  Img = '/image/Icon ionic-ios-close.png',
}: Prop) => {
  let navigate = useNavigate();
  return (
    <Container>
      <StatusText>{Subject}</StatusText>
      <StatusMyInfo2>
        <button
          onClick={() => {
            console.log(1);
            navigate(-1);
          }}
        >
          <img src={Img} alt="." />
        </button>
      </StatusMyInfo2>
    </Container>
  );
};

export const StatusBar = ({Subject = '오늘', Img = '', LinkTo = ''}: Prop) => {
  return (
    <Container>
      <StatusText>{Subject}</StatusText>
      <StatusMyInfo>
        <Link to={LinkTo}>
          <button>
            <img src={Img} alt="." />
          </button>
        </Link>
      </StatusMyInfo>
    </Container>
  );
};
const BackArrow = styled.div`
  border: none;
  background-color: inherit;
  background: url('/image/Icon ionic-ios-arrow-round-back.png') no-repeat 50%
    50%;
  width: 24px;
  height: 16px;
  z-index: 9;
`;
const ArrowContainer = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  left: 10%;
  top: 32px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0rem 0.1rem 0.5rem 0rem rgb(223, 223, 223, 0.8);
  margin: 0 -28px;
  height: 80px;
  background-color: white;
  z-index: 6;
  position: fixed;
  width: 100vw;
  max-width: 480px;
`;
export const StatusText = styled.div`
  margin: 0 auto;
  font-size: 20px;
  font-weight: 700;
  color: ${prop => prop.theme.fontColor1};
`;
const StatusMyInfo = styled.div`
  position: absolute;
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
  position: absolute;
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
