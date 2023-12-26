'use client';

import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  padding: 35px;
  background-color: #f8f8f8;
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
  text-align: center;
  gap: 25px;
  padding: 38px 0 0;
`;

export const Line = styled.div`
  display: grid;
  width: 250px;
  border-bottom: 1px solid #4d100f;
`;

export const TextWrap = styled.div`
  position: absolute;
  top: 13px;
  left: 60px;
`;

export const Text = styled.p`
  /* width: 250px; */

  font-family: 'EF_jejudoldam';
  text-align: center;

  /* &:nth-child(3) {
    border-bottom: 1px solid #4d100f;
  } */

  /* text-underline-position: under;
  text-decoration: underline;
  text-decoration-color: #4d100f;
   */
  /* white-space: pre-wrap;
  &:nth-child(1) {
    background: linear-gradient(
      to top,
      #4d100f,
      transparent 1px,
      transparent 3px
    );
  }
  &:nth-child(2) {
    background: linear-gradient(
      to bottom,
      #4d100f,
      transparent 1px,
      transparent 3px
    );
  }

  background-size: 100% 1.8em; */
`;
