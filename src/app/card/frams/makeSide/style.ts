'use client';

import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 50px;
`;

export const NumberList = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 30px;
`;

export const NumberItem = styled.div<{ isPageNumber: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${({ isPageNumber }) => isPageNumber && '#fff'};
  background: ${({ isPageNumber }) => (isPageNumber ? '#4d100f' : '#f8f8f8')};
  border: 1px solid #4d100f;
  border-radius: 50%;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.size.title.t01}
`;
