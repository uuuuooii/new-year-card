import React from 'react';
import Image from 'next/image';
import ImageLoading from './imageLoading';
import * as S from './style';

interface PreviewProps {
  image: string;
  isSend: boolean;
  loadingStep: number;
}

const Preview = ({ image, isSend, loadingStep }: PreviewProps) => {
  return (
    <S.Section>
      <S.Year>2024</S.Year>
      <S.ImageWrap>
        {isSend &&
          <ImageLoading loadingStep={loadingStep} />
        }
        <Image src={image ? image : '/previewImage.svg'} alt='previewImage' width={250} height={300}></Image>
      </S.ImageWrap>

      <S.Desc>
        <S.Text>2024년도 같이</S.Text>
        <S.Text> 재밌게 지내자</S.Text>
        <S.Text> 젲젷젶줓젴줗</S.Text>
      </S.Desc>
    </S.Section>
  );
};

export default Preview;