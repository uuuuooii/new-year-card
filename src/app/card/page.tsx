"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Preview from "./frams/preview";
import MakeSide from "./frams/makeContents";
import Inner from "@components/components/inner";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import CongratsLottie from "@components/lib/lottie/congrats";
import Button from "@components/components/button";
import * as S from "./style";
import downloadjs from "downloadjs";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
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

  const shareData = {
    title: "신년카드 만들기",
    text: "신년카드",
    url: "https://new-year-card-g1patgw11-uuuuooii.vercel.app/"
  };


  const testRef = useRef<HTMLDivElement>(null);
  console.log(testRef);
  const onClickDownload = useCallback(async () => {
    if (testRef.current) {
      const imageData = await toJpeg(testRef.current);

      downloadjs(await toJpeg(testRef.current), "test.jpg");

    }
  }, []);


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
              testRef={testRef}
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
                onClick={() => onClickDownload()}
                size="medium"
                state="normal"
                colorType="white"
              >
                다운로드 하기
              </Button>
              <Share shareData={shareData}>
                {/* 카톡 공유로 변경 */}
                <Button
                  // onClick={onClickCreateShareImage}
                  size="medium"
                  state="normal"
                  colorType="black"
                >
                  공유하기
                </Button>

              </Share>
            </S.ButtonWrap>
          )}

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
