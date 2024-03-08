import React from 'react';
import * as S from './style';

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
}

const Modal = ({ children, open }: ModalProps) => {
  return (
    <dialog open={open}>
      <S.Wrapper>
        <div>{children}</div>
      </S.Wrapper>
    </dialog>
  );
};
export default Modal;
