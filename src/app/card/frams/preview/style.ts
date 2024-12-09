'use client';

import mediaQuery from '@components/lib/styles/theme/mediaQuery';
import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 368px;
  height: 547px;
  padding: 45px;
  overflow: hidden;
  background-color: #eaeaea;

  ${mediaQuery.tablet} {
    width: 100%;
  }
`;

export const PreviewInfo = styled.div`
  position: absolute;
  top: 17px;
  left: 17px;
  width: 50px;
  padding: 3px;
  font-size: 10px;
  text-align: center;
  border-radius: 10px;
  background: #f1cccc;
  color: #551a1a;
  z-index: 1;
`;

export const Year = styled.p`
  font-family: 'KOTRA_BOLD-Bold';
  font-size: 4.375rem;
  font-weight: 900;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  -webkit-text-stroke: 1px ${({ theme }) => theme.color.brown};
  z-index: 1;
`;

export const ImageWrap = styled.picture`
  position: absolute;
  display: block;
  text-align: center;

  img {
    width: 100%;
    height: 547px;
    object-fit: cover;
  }
`;

export const Desc = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 35px;
  padding: 38px 0 0;
  margin-top: 10px;
`;

export const Line = styled.div`
  display: grid;
  width: 250px;
  border-bottom: 1px solid ${({ theme }) => theme.color.white};
  z-index: 1;
`;

export const TextWrap = styled.div<{ letter: string }>`
  position: absolute;
  top: 6px;
  left: 50%;
  width: 240px;
  transform: translate(-50%);
  line-height: 1.7;
  word-wrap: break-word;
  z-index: 1;
`;

export const Text = styled.p`
  white-space: pre-wrap;
  font-family: 'KOTRA_BOLD-Bold';
  text-align: center;
  font-size: 21px;
  color: ${({ theme }) => theme.color.white};
  -webkit-text-stroke: 1px ${({ theme }) => theme.color.brown};
`;

export const Gradient = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.9)
  );
  position: absolute;
  top: 0;
  left: 0;
  height: 770.59px;
  width: 100%;
`;
