"use client";

import React, { useState, useEffect } from "react";
import Preview from "./frams/preview";
import MakeSide from "./frams/makeContents";
import Inner from "@components/components/inner";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { toJpeg } from "html-to-image";
import CongratsLottie from "@components/lib/lottie/congrats";
import Button from "@components/components/button";
import * as S from "./style";
import Share from "@components/components/share";

const Card = () => {
  const [prompt, setPromt] = useState({
    color: "",
    drawingStyle: "반 고흐",
    keyword: "",
    letter: "",
  });
  const { letter } = prompt;
  const [image, setImage] = useState("");
  const [colorPicker, setColorPicker] = useState("#000000");
  const [loadingStep, setLoadingStep] = useState(0);
  const [isSend, setIsSend] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isShowLottie, setIsShowLottie] = useState(false);
  const [isShare, setIsShare] = useState(false);
  console.log(isShowLottie);
  console.log(loadingStep);



  // 컴포넌트 다운로드 함수
  const onClickDownload = () => {
    const downloadImgElement = document.querySelector("#downloadImg");

    if (!downloadImgElement) {
      console.error("Element with ID 'downloadImg' not found");
      return;
    }

    domtoimage.toBlob(downloadImgElement).then((blob: Blob) => {
      const saveConfirm = window.confirm("이미지를 저장하시겠습니까?");
      if (saveConfirm === true) {
        saveAs(blob, "new_year_card.png");
      }
    });
  };



  // 이미지 공유하기
  const dataURLtoFile = (dataurl: string, filename: string) => {
    let arr = dataurl.split(",");
    let match = arr[0].match(/:(.*?);/);
    let mimeType = match ? match[1] : null;
    let decodedData = atob(arr[1]);
    let lengthOfDecodedData = decodedData.length;
    let u8array = new Uint8Array(lengthOfDecodedData);

    while (lengthOfDecodedData--) {
      u8array[lengthOfDecodedData] =
        decodedData.charCodeAt(lengthOfDecodedData);
    }
    mimeType = mimeType || "application/octet-stream";
    return new File([u8array], filename, { type: mimeType });
  };

  const shareFile = (file: File, title: string, text: string) => {
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator
        .share({
          files: [file],
          title,
          text,
        })
        .then(() => console.log("Share was successful."))
        .catch((error) => console.log("Sharing failed", error));
    } else {
      setIsShare(true);
      console.log(`Your system doesn't support sharing files.`);

    }
  };

  const onClickCreateShareImage = () => {
    const downloadImgElement = document.querySelector("#downloadImg");
    if (!downloadImgElement) {
      console.error("Element with ID 'downloadImg' not found");
      return;
    }

    toJpeg(downloadImgElement as HTMLElement, { quality: 0.95 }).then((dataUrl) => {
      const file = dataURLtoFile(dataUrl, "new_year_card.png");
      shareFile(file, "Title", "https://co-aid.in");
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (loadingStep === 3) {
        setIsShowLottie(true);
      }
    }, 1000);

    // 컴포넌트가 언마운트되면 타이머를 해제하여 메모리 누수를 방지;
    return () => clearTimeout(timeoutId);
  }, [loadingStep]);

  // 새로고침 막기 변수
  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = ""; // chrome에서는 설정이 필요해서 넣은 코드
  };

  // 브라우저에 렌더링 시 한 번만 실행하는 코드
  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  return (
    <main>
      <S.Container isEnd={isEnd}>
        <Inner>
          <S.Wrap isEnd={isEnd}>
            <Preview
              isSend={isSend}
              image={image}
              loadingStep={loadingStep}
              letter={letter}
              isEnd={isEnd}
            />
            <MakeSide
              prompt={prompt}
              setPromt={setPromt}
              image={image}
              setImage={setImage}
              setIsSend={setIsSend}
              setLoadingStep={setLoadingStep}
              colorPicker={colorPicker}
              setColorPicker={setColorPicker}
              setIsEnd={setIsEnd}
              isEnd={isEnd}
            />
          </S.Wrap>

          {loadingStep === 3 && (
            <S.ButtonWrap>
              <Button
                onClick={onClickDownload}
                size="medium"
                state="normal"
                colorType="white"
              >
                다운로드 하기
              </Button>
              <Button
                onClick={onClickCreateShareImage}
                size="medium"
                state="normal"
                colorType="black"
              >
                공유하기
              </Button>
            </S.ButtonWrap>
          )}
          {isShare && <Share />}
        </Inner>
      </S.Container>
      {isShowLottie && (
        <S.LottieWrap>
          <CongratsLottie />
        </S.LottieWrap>
      )}
    </main>
  );
};

export default Card;
