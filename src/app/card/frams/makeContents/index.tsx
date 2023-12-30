"use client";

import React, { useState } from "react";
import ColorPicker from "./colorPicker";
import KeyWord from "./keyword";
import DrawingStyle from "./drawingStyle";
import Letter from "./letter";
import Button from "@components/components/button";
import * as S from "./style";

interface MakeSideProps {
  prompt: {
    color: string;
    drawingStyle: string;
    keyword: string;
    letter: string;
  };
  setPromt: React.Dispatch<
    React.SetStateAction<{
      color: string;
      drawingStyle: string;
      keyword: string;
      letter: string;
    }>
  >;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setIsSend: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingStep: React.Dispatch<React.SetStateAction<number>>;
  colorPicker: string;
  setColorPicker: React.Dispatch<React.SetStateAction<string>>;
  setIsEnd: React.Dispatch<React.SetStateAction<boolean>>;
  isEnd: boolean;
}

const MakeSide = ({
  prompt,
  setPromt,
  setImage,
  setIsSend,
  setLoadingStep,
  colorPicker,
  setColorPicker,
  setIsEnd,
  isEnd,
}: MakeSideProps) => {
  const Num = [1, 2, 3, 4];
  const [pageNumber, setPageNumber] = useState(1);

  const onClickNext = () => {
    if (pageNumber < 4) {
      setPageNumber((prev) => prev + 1);
    }
  };

  const onClickPrev = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      setIsEnd(true);
      setLoadingStep(1);
      setIsSend(true);
      const res = await fetch("api/generate", {
        method: "POST",
        body: JSON.stringify({ content: prompt }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoadingStep(2);

      if (res.ok) {
        const data = await res.json();
        const imageUrl = data.data[0].url;

        setImage(imageUrl);
        setTimeout(() => {
          setIsSend(false);
          setLoadingStep(3);
        }, 2500);
      } else {
        alert("Error sending message");
        return;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const { color, drawingStyle, keyword, letter } = prompt;

  const selectSection: { [key: number]: React.JSX.Element; } = {
    1: <DrawingStyle drawingStyle={drawingStyle} setPromt={setPromt} />,
    2: (
      <ColorPicker
        color={color}
        setPromt={setPromt}
        colorPicker={colorPicker}
        setColorPicker={setColorPicker}
      />
    ),
    3: <KeyWord keyword={keyword} setPromt={setPromt} />,
    4: <Letter letter={letter} setPromt={setPromt} />,
  };

  const sectionTitle: { [key: number]: string; } = {
    1: "이미지의 그림체를 선택해주세요",
    2: "이미지의 메인 컬러를 선택해주세요",
    3: "원하는 이미지의 키워드를 작성해주세요",
    4: "편지 내용을 작성해주세요",
  };

  return (
    <S.Section isEnd={isEnd} id='downloadImg'>
      <S.NumberList>
        {Num.map((item) => (
          <S.NumberItem isPageNumber={pageNumber === item} key={item}>
            {item}
          </S.NumberItem>
        ))}
      </S.NumberList>
      <S.Title>{sectionTitle[pageNumber]}</S.Title>

      {selectSection[pageNumber]}

      <S.ButtonWrap pageNumber={pageNumber === 1}>
        {pageNumber > 1 && (
          <Button
            onClick={onClickPrev}
            size="small"
            state="normal"
            colorType="white"
          >
            뒤로
          </Button>
        )}
        {pageNumber < 4 && (
          <Button
            onClick={onClickNext}
            size="small"
            state="normal"
            colorType="black"
          >
            다음
          </Button>
        )}

        {pageNumber === 4 && (
          <form onSubmit={handleSubmit}>
            <Button size="small" state="normal" colorType="brown">
              완료
            </Button>
          </form>
        )}
      </S.ButtonWrap>
    </S.Section>
  );
};

export default MakeSide;
