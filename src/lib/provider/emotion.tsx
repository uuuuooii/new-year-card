'use client';

import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import globals from '../styles/globals';

const EmotionProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />
      {children}
    </ThemeProvider>
  );
};

export default EmotionProvider;