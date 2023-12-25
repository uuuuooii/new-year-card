"use client";

import React, { ChangeEvent, useState } from 'react';
import ColorPicker from './colorPicker';
import KeyWord from './keyword';
import DrawingStyle from './drawingStyle';
import * as S from './style';

interface MakeSideProps {
  prompt: {
    color: string;
    drawingStyle: string;
    keyword: string;
  };
  setPromt: React.Dispatch<React.SetStateAction<{
    color: string;
    drawingStyle: string;
    keyword: string;
  }>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setIsSend: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingStep: React.Dispatch<React.SetStateAction<number>>;
}

const MakeSide = ({ prompt, setPromt, image, setImage, setIsSend, setLoadingStep }: MakeSideProps) => {
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

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPromt({ color: '', drawingStyle: '', keyword: e.target.value });
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

  const { color, drawingStyle, keyword } = prompt;
  console.log(drawingStyle);
  console.log(keyword);
  const selectSection: { [key: number]: React.JSX.Element; } = {
    1: <DrawingStyle drawingStyle={drawingStyle} setPromt={setPromt} />,
    2: <ColorPicker />,
    3: < KeyWord keyword={keyword} handleSubmit={handleSubmit} onChangeInput={onChangeInput} />,
    4: <ColorPicker />,
  };

  const sectionTitle: { [key: number]: string; } = {
    1: '이미지의 그림체를 선택해주세요',
    2: '이미지의 메인 컬러를 선택해주세요',
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

      <S.ButtonWrap>
        <S.Button onClick={onClickPrev} isBack>Back</S.Button>
        <S.Button onClick={onClickNext} isNext>Next</S.Button>
      </S.ButtonWrap>
    </S.Section>
  );
};

export default MakeSide;