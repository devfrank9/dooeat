import React from 'react';
import styled, {css} from 'styled-components';
import Portal from './Portal';

interface CustomModalProps {
  children: React.ReactNode;
  toggleModal: () => void;
  className?: string;
  width?: string;
  height?: string;
  fullWidth?: boolean;
  compact?: boolean;
  onClick?: () => void;
  headerText: string;
}
interface IModalWrapperProps {
  width?: string;
  height?: string;
  fullWidth?: boolean;
  compact?: boolean;
}

const ModalLayout = ({
  children,
  toggleModal,
  className,
  width,
  height,
  fullWidth,
  compact,
  onClick,
  headerText,
}: CustomModalProps) => {
  return (
    <Portal>
      <ModalOverlay className={className} onClick={onClick}>
        <ModalWrapper
          width={width}
          height={height}
          fullWidth={fullWidth}
          compact={compact}
          onClick={e => e.stopPropagation()}
        >
          <ModalInner>
            <ModalCloseButton onClick={toggleModal}>
              <CloseBtn src="/image/Icon ionic-ios-close.png" alt="" />
            </ModalCloseButton>
            <Header>{headerText}</Header>
            {children}
          </ModalInner>
        </ModalWrapper>
      </ModalOverlay>
    </Portal>
  );
};

const Header = styled.div`
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${prop => prop.theme.mainColor};
  font-size: 18px;
  font-weight: 500;
  border-bottom: 2px solid rgb(245, 245, 245);
`;
const CloseBtn = styled.img`
  width: 14px;
  height: 14px;
`;
const ModalOverlay = styled.div`
  display: flex;
  background-color: rgba(1, 1, 1, 0.55);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;
const ModalInner = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  gap: 2rem;
  flex-direction: column;
  height: 50%;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const ModalWrapper = styled.div<IModalWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 12px;
  padding-bottom: 30px;
  background-color: #fff;
  width: 85%;
  height: ${props => props.height};
  max-height: 96%;
  background-color: 'gray';
  max-width: 480px;
  padding: 0 28px;
  ${({compact, theme}) =>
    compact
      ? css`
          padding: 0;
          width: auto;
          height: auto;
          min-height: auto;
          border-radius: 1rem;
          ${ModalInner} {
            gap: 0;
            svg {
              display: none;
            }
          }
        `
      : theme.mediaScreen.tablet`
        width: 85%;
      `}
  //@ts-ignore
    ${({fullWidth}) =>
    fullWidth
      ? css`
          padding: 0;
          img {
            border-radius: 3rem;
          }
          ${ModalCloseButton} {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            top: 3rem;
            right: 3rem;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 3.5rem;
            background-color: #3a3a3a;
            svg {
              stroke: #fff;
            }
          }
        `
      : css``};
`;

const ModalCloseButton = styled.button`
  border: none;
  background-color: inherit;
  position: absolute;
  top: 25.6px;
  right: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

export default ModalLayout;
