import React from "react";
import Image from "next/image";
import ImageLoading from "./imageLoading";
import * as S from "./style";

interface PreviewProps {
  image: string;
  isSend: boolean;
  loadingStep: number;
  letter: string;
  isEnd: boolean;
  testRef: React.RefObject<HTMLDivElement>;
}

const Preview = ({
  image,
  isSend,
  loadingStep,
  letter,
  isEnd,
  testRef
}: PreviewProps) => {

  return (
    <S.Section id="downloadImg" ref={testRef} >
      {!isEnd && <S.PreviewInfo>Preview</S.PreviewInfo>}
      <S.Year>2025</S.Year>

      {isSend &&
        <ImageLoading loadingStep={loadingStep} />
      }

      <S.ImageWrap>
        <Image
          src={image ? image : "/previewImage.svg"}
          alt="previewImage"
          width={340}
          height={547}
        ></Image>
      </S.ImageWrap>

      <S.Desc>
        <S.TextWrap letter={letter}>
          {letter ? (
            <S.Text>{letter}</S.Text>
          ) : (
            <>
              <S.Text>Let&apos;s have fun</S.Text>
              <S.Text>together in 2025!</S.Text>
            </>
          )}
        </S.TextWrap>
        <S.Line />
        <S.Line />

      </S.Desc>
      <S.Gradient />
    </S.Section>
  );
};

export default Preview;
