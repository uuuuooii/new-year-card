import styled from '@emotion/styled';

export const ButtonStyle = styled.button<{ isClick: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-width: 130px;
  height: 50px;
  padding: 0 20px;
  font-size: 0.9rem;
  background: #f8f8f8;
  border: ${({ isClick }) => isClick && '1px solid #4d100f'};
  border-radius: 10px;
`;
