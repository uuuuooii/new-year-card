import React, { PropsWithChildren } from 'react';
import { ButtonStyle } from './style';

interface BunttonProps {
  children: React.ReactNode;
  isClick: boolean;
}

const Button = ({ children, isClick }: BunttonProps) => {
  return (
    <ButtonStyle type='button' isClick={isClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;