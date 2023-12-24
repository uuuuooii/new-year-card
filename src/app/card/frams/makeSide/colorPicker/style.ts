import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  gap: 35px;
  padding-bottom: 45px;
`;

export const ColorContent = styled.div`
  gap: 10px;
  display: grid;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 50px;
  padding: 5px;
  background: #f8f8f8;
  border-radius: 5px;
`;

export const ColorPreview = styled.div<{ color: string }>`
  width: 25px;
  height: 25px;
  background: ${({ color }) => color && color};
  border-radius: 50%;
`;
