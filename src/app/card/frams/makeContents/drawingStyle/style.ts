import styled from '@emotion/styled';
import mediaQuery from '@components/lib/styles/theme/mediaQuery';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 35px 0;

  ${mediaQuery.tablet} {
    padding: 24px 0;
  }
`;

export const Item = styled.li<{ isArtist: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: #f8f8f8;
  border: ${({ isArtist }) => isArtist && '1px solid #4d100f'};
  border-radius: 10px;
  cursor: pointer;
`;
