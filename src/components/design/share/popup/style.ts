import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 273px;
  height: 158px;
  background-color: white;
  border-radius: 5px;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CopyWrap = styled.div`
  display: grid;
  gap: 10px;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 200px;
  height: 29px;
  background-color: ${({ theme }) => theme.color.brown};
  color: ${({ theme }) => theme.color.white};
  border-radius: 3px;
`;
