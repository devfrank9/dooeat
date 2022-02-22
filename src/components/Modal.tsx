import React from 'react';
import styled from 'styled-components';
import close from '/image/Icon ionic-ios-close.png';

export interface Prop {
  handleModal: () => void;
  children: any;
}

const ModalFrame = ({handleModal, children, ...rest}: Prop) => {
  return (
    <Container>
      <Background onClick={handleModal} />
      <ModalBlock {...rest}>
        <Close onClick={handleModal} />
        <Contents>{children}</Contents>
      </ModalBlock>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const ModalBlock = styled.div`
  position: absolute;
  top: 155px;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  width: 319px;
  @media (max-width: 1120px) {
    width: 50rem;
  }
  @media (max-width: 50rem) {
    width: 80%;
  }
  min-height: 358px;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;
const Close = styled.img.attrs({
  src: close,
})`
  position: absolute;
  right: 25.6px;
  top: 25.6px;
  cursor: pointer;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ModalFrame;
