import React from 'react';
import * as S from './style';

interface ImageLoadingProps {
  loadingStep: number;
}

const ImageLoading = ({ loadingStep }: ImageLoadingProps) => {
  return (
    <S.Loading>
      {loadingStep === 1 &&
        <S.LoadingText>I&apos;m creating a beautiful illustration...</S.LoadingText>
      }
      {loadingStep === 2 &&
        <S.LoadingText>The artwork is almost finished!</S.LoadingText>
      }
    </S.Loading >
  );
};

export default ImageLoading;