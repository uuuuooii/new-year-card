import React, { PropsWithChildren } from 'react';
import Wrap from './style';

const Inner = ({ children }: PropsWithChildren) => {
  return (
    <Wrap>{children}</Wrap>
  );
};

export default Inner;