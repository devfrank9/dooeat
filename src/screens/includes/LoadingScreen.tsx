import styled from 'styled-components';

const LoadingScreen = () => {
  return (
    <Loading
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <span>Loading...</span>
    </Loading>
  );
};

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000080;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: white;
    font-size: 2rem;
  }
`;

export default LoadingScreen;
