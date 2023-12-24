import React from 'react';
import * as S from './style';

interface ImageLoadingProps {
  loadingStep: number;
}

const ImageLoading = ({ loadingStep }: ImageLoadingProps) => {
  return (
    <S.Loading>
      {loadingStep === 1 &&
        < S.LoadingText > 예쁜 그림을 만들고 있어요...</ S.LoadingText>
      }
      {loadingStep === 2 && < S.LoadingText > 그림이 거의 완성 됐어요!</  S.LoadingText >}
    </S.Loading >
  );
};

export default ImageLoading;