import styled from '@emotion/styled';

export const ButtonStyle = styled.button<{ isClick: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: #f8f8f8;
  border: ${({ isClick }) => isClick && '1px solid #4d100f'};
  border-radius: 10px;
`;