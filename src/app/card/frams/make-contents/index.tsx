"use client";

import React, { useState } from "react";
import ColorPicker from "./colorPicker";
import KeyWord from "./keyword";
import DrawingStyle from "./drawingStyle";
import Letter from "./letter";
import Button from "@components/components/design/button";
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

const nums = [1, 2, 3, 4];

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
        }, 3000);
      } else {
        alert("Error sending message");
        return;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const { color, drawingStyle, keyword, letter } = prompt;

  // selectSection & sectionTitle 같이 연동
  // 호출을 lazy하게 지금은 미리 호출됨 
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
    1: "Please select the art style for the image",
    2: "Please select the main color for the image",
    3: "Please write the keywords for the desired image",
    4: "Please write the content of the letter",
  };

  return (
    <S.Section isEnd={isEnd} id='downloadImg'>
      <S.NumberList>
        {nums.map((item) => (
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
            Back
          </Button>
        )}
        {pageNumber < 4 && (
          <Button
            onClick={onClickNext}
            size="small"
            state="normal"
            colorType="black"
          >
            Next
          </Button>
        )}

        {pageNumber === 4 && (
          <form onSubmit={handleSubmit}>
            <Button size="small" state="normal" colorType="brown">
              Done
            </Button>
          </form>
        )}
      </S.ButtonWrap>
    </S.Section>
  );
};

export default MakeSide;
