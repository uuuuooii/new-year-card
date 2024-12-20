import styled from '@emotion/styled';
import mediaQuery from '@components/lib/styles/theme/mediaQuery';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Wrap = styled.div`
  display: grid;
  gap: 20px;
  border-radius: 10px;
  padding: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: ${({ theme }) => theme.color.white};

  ${mediaQuery.tablet} {
    padding: 30px;
    box-shadow: none;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.size.title.t01}
`;

export const SubTitle = styled.p`
  color: 2px #1a1d25;
  ${({ theme }) => theme.typography.size.subtitle.s01}
`;

export const ImageWrap = styled.picture`
  position: relative;
  display: block;

  img {
    max-width: 570px;
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: 30px;
  ${({ theme }) => theme.typography.size.subtitle.s01}
  color: white;
  font-weight: 600;
  border-radius: 8px;
  background: #a61212;

  &:hover {
    background: #882727;
  }
`;
