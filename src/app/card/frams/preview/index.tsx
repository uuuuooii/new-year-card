import React from 'react';
import Image from 'next/image';
import ImageLoading from './imageLoading';
import * as S from './style';

interface PreviewProps {
  image: string;
  isSend: boolean;
  loadingStep: number;
  letter: string;
}

const Preview = ({ image, isSend, loadingStep, letter }: PreviewProps) => {
  return (
    <S.Section>
      <S.PreviewInfo>미리보기</S.PreviewInfo>
      <S.Year>2024</S.Year>
      <S.ImageWrap>
        {isSend &&
          <ImageLoading loadingStep={loadingStep} />
        }
        <Image src={image ? image : '/previewImage.svg'} alt='previewImage' width={250} height={300}></Image>
      </S.ImageWrap>

      <S.Desc>
        {/* {letter ? (<S.Text>{letter}</S.Text>) :
          (
            <>
              
            </>
          )
        } */}

        <S.Line />
        <S.Line />
        <S.Line />
        <S.TextWrap>
          {/* <S.Text>2024년도 같이</S.Text>
          <S.Text> 재밌게 지내자</S.Text>
          <S.Text> 젲젷젶줓젴줗</S.Text> */}
          <S.Text>{letter}</S.Text>
        </S.TextWrap>
      </S.Desc>

    </S.Section>
  );
};

export default Preview;