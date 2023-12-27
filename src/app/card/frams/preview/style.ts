'use client';

import mediaQuery from '@components/lib/styles/theme/mediaQuery';
import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 365px;
  min-width: 365px;
  padding: 35px;
  background-color: #f8f8f8;

  ${mediaQuery.desktop} {
    max-width: unset;
    min-width: unset;
    display: unset;
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
`;

export const Year = styled.p`
  color: #4d100f;
  font-family: 'KOTRA_BOLD-Bold';
  font-size: 4.375rem;
  font-weight: 900;
  text-align: center;
`;

export const ImageWrap = styled.picture`
  position: relative;
  display: block;
  text-align: center;
  img {
    height: auto;
  }
`;

export const Desc = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 25px;
  padding: 38px 0 0;
`;

export const Line = styled.div`
  display: grid;
  width: 250px;
  border-bottom: 1px solid #4d100f;
`;

export const TextWrap = styled.div<{ letter: string }>`
  position: absolute;
  top: 13px;
  left: 56px;
  width: 240px;
  word-wrap: break-word;
`;

export const Text = styled.p`
  white-space: pre-wrap;
  font-family: 'EF_jejudoldam';
  text-align: center;
`;
