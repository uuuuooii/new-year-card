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

export const NumberItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: #ebeff0;
  border-radius: 50%;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.size.title.t01}
`;
