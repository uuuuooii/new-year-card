'use client';

import mediaQuery from '@components/lib/styles/theme/mediaQuery';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div<{ isEnd: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 100px 0;

  ${mediaQuery.tablet} {
    ${({ isEnd }) =>
      !isEnd &&
      css`
        display: block;
        height: 100%;
        padding: 0;
      `}
  }
`;

export const Wrap = styled.div<{ isEnd: boolean }>`
  display: flex;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;

  ${mediaQuery.tablet} {
    ${({ isEnd }) =>
      !isEnd &&
      css`
        display: grid;
        flex-wrap: wrap;
        box-shadow: unset;
      `}
  }
`;

export const LottieWrap = styled.div`
  position: absolute;
  width: 578px;
  height: 200px;
  top: 42px;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  ${mediaQuery.tablet} {
    width: 351px;
    top: 19px;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const ButtonWrap = styled.div`
  padding-top: 45px;
  display: flex;
  justify-content: center;
`;
