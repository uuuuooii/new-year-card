'use client';

import styled from '@emotion/styled';

export const Section = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: #f8f8f8;
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
  display: grid;
  text-align: center;
  padding: 24px 0;
`;

export const Text = styled.p`
  font-family: 'EF_jejudoldam';
  border-bottom: 1px solid #4d100f;
`;
