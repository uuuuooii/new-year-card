import styled from '@emotion/styled';
import mediaQuery from '@components/lib/styles/theme/mediaQuery';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 85px 0 109px;

  ${mediaQuery.tablet} {
    padding: 31px 0 56px;
  }
`;

export const ColorPickerWrap = styled.div`
  div {
    &.react-colorful {
      height: 124px;
      width: 142px;
    }
  }
`;

export const ColorContent = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
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

export const ColorPreview = styled.div<{ colorPicker: string }>`
  width: 25px;
  height: 25px;
  background: ${({ colorPicker }) => colorPicker && colorPicker};
  border-radius: 50%;
`;
