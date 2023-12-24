"use client";

import React, { ChangeEvent, useState } from 'react';
import ColorPicker from './colorPicker';
import KeyWord from './keyword';
import DrawingStyle from './drawingStyle';
import * as S from './style';

interface MakeSideProps {
  prompt: string;
  setPromt: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setIsSend: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingStep: React.Dispatch<React.SetStateAction<number>>;
}

const MakeSide = ({ prompt, setPromt, image, setImage, setIsSend, setLoadingStep }: MakeSideProps) => {
  const Num = [1, 2, 3, 4];
  const [pageNumber, setPageNumber] = useState(1);
  console.log(pageNumber);

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

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPromt(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      setLoadingStep(1);
      setIsSend(true);
      const res = await fetch("api/generate", {
        method: "POST",
        body: JSON.stringify({ content: prompt }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      setLoadingStep(2);

      if (res.ok) {

        const data = await res.json();
        const imageUrl = data.data[0].url;

        setImage(imageUrl);
        setTimeout(() => {
          setIsSend(false);
        }, 2500);
      } else {
        alert("Error sending message");
        return;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const selectSection: { [key: number]: React.JSX.Element; } = {
    1: <DrawingStyle />,
    2: <KeyWord prompt={prompt} handleSubmit={handleSubmit} onChangeInput={onChangeInput} />,
    3: <ColorPicker />,
    4: <ColorPicker />,
  };

  const sectionTitle: { [key: number]: string; } = {
    1: '이미지의 그림체를 선택해주세요',
    2: '신년카드에 들어가는 이미지의 그림체를 선택해주세요',
    3: '신년카드에 들어가는 이미지의 그림체를 선택해주세요',
    4: '신년카드에 들어가는 이미지의 그림체를 선택해주세요',
  };

  return (
    <S.Section>
      <S.NumberList >
        {Num.map((item) => (
          <S.NumberItem isPageNumber={pageNumber === item} key={item}>{item}</S.NumberItem>
        ))}
      </S.NumberList>
      <S.Title>{sectionTitle[pageNumber]}</S.Title>

      {selectSection[pageNumber]}

      <button onClick={onClickPrev}>Back</button>
      <button onClick={onClickNext}>Next</button>
    </S.Section>
  );
};

export default MakeSide;