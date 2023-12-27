"use client";

import mediaQuery from "@components/lib/styles/theme/mediaQuery";
import styled from "@emotion/styled";

export const Section = styled.section<{ isEnd: boolean }>`
  position: relative;
  width: 350px;
  height: 547px;
  padding: 40px;
  display: ${({ isEnd }) => isEnd && "none"};

  ${mediaQuery.tablet} {
    width: 100%;
    height: auto;
  }
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
  color: ${({ isPageNumber }) => (isPageNumber ? "#fff" : "#4d100f")};
  background: ${({ isPageNumber }) => (isPageNumber ? "#4d100f" : "#f8f8f8")};
  border: 1px solid #4d100f;
  border-radius: 50%;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.size.title.t01}
`;

export const ButtonWrap = styled.div<{ pageNumber: boolean }>`
  display: flex;
  justify-content: space-between;
  justify-content: ${({ pageNumber }) => pageNumber && "end"};
`;

export const Button = styled.button<{
  isNext?: boolean;
  isBack?: boolean;
  isEnd?: boolean;
}>`
  width: 50px;
  height: 30px;
  background: ${({ isNext }) => (isNext ? "#000" : "#fff")};
  color: ${({ isNext }) => (isNext ? "#fff" : "#000")};
  border: ${({ isBack }) => isBack && "1px solid #7a7979"};
  border-radius: 5px;

  &:hover {
    background: ${({ isNext }) => (isNext ? "#535050" : "#f8f8f8")};
  }
`;
