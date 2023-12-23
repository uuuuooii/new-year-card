'use client';

import mediaQuery from '@components/lib/styles/theme/mediaQuery';
import styled from '@emotion/styled';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 100px 0;

  @media screen and (max-width: 767px) {
    height: 100%;
  }
`;

export const Wrap = styled.div`
  display: flex;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;

  // TODO: 이거 왜 적용 안 됨?
  ${mediaQuery.tablet} {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
