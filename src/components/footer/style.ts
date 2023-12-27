'use client';

import styled from '@emotion/styled';
import mediaQuery from '@components/lib/styles/theme/mediaQuery';

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5e5e5f;
  font-size: 0.75rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  ${mediaQuery.tablet} {
    padding-top: 2.5rem;
  }
`;
