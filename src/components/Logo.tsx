import styled from 'styled-components';

export const Logo = () => {
  return (
    <LogoAlign>
      <LogoImg />
    </LogoAlign>
  );
};

const LogoAlign = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const LogoImg = styled.div`
  background: url('/image/logo.jpg') no-repeat 50% 50%;
  width: 31.25rem;
  height: 24.75vh;
  object-fit: cover;
  margin: 0 -28px;
`;
