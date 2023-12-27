import styled from '@emotion/styled';

export const Wrap = styled.div`
  position: relative;
`;

export const Textarea = styled.textarea<{ heigthValue: number }>`
  width: 100%;
  height: ${({ heigthValue }) => heigthValue && heigthValue + 'px'};
  border: 1px solid;
  border-radius: 3px;
  font-size: 1rem;
  background-attachment: local;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(
      white,
      white 29px,
      #ccc 30px,
      #ccc 31px,
      white 31px
    );
  line-height: 28px;
  padding: 8px 10px;
`;

export const Length = styled.div`
  position: absolute;
  bottom: 6px;
  right: 7px;
`;
