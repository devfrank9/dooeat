import styled from 'styled-components';

export const StatusBar = () => {
  return (
    <Container>
      <Contents>
        <StatusText>오늘</StatusText>
        <StatusMyInfo>
          <button>
            <img src="/image/myInfo.png" alt="" />
          </button>
        </StatusMyInfo>
      </Contents>
    </Container>
  );
};
const Contents = styled.div`
  display: flex;
  height: 6.6667rem;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  font-size: 1.6667rem;
  box-shadow: 0rem 0.1rem 0.5rem 0rem rgb(223, 223, 223, 0.8);
  padding: 0 2.3rem;
  display: block;
  position: relative;
  width: 100%;
  height: 6.6667rem;
`;
const StatusText = styled.div`
  position: absolute;
`;
const StatusMyInfo = styled.div`
  position: absolute;
  right: 10%;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    background-color: inherit;
    img {
      width: 2.25rem;
      height: 2.25rem;
    }
  }
`;
