"use client";

import React, { ChangeEvent, useState } from 'react';
import * as S from './style';
import ColorPicker from './colorPicker';
import KeyWord from './keyword';

const MakeSide = () => {
  const Num = [1, 2, 3, 4];
  const [prompt, setPromt] = useState('');
  const [image, setImage] = useState();
  console.log(image);
  console.log(prompt);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('submit', prompt);
    const res = await fetch("api/generate", {

      method: "POST",
      body: JSON.stringify({ content: prompt }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    setImage(data.data);
    if (!res.ok) {
      alert("Error sending message");
      return;
    }

  };


  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPromt(e.target.value);
  };

  return (
    <S.Section>
      <S.NumberList>
        {Num.map((item) => (
          <S.NumberItem key={item}>{item}</S.NumberItem>
        ))}
      </S.NumberList>
      <S.Title>신년카드에 들어가는 이미지를 AI에게 알려주세요</S.Title>
      <div>
        키워드 입력
        <form onSubmit={handleSubmit}>
          <input value={prompt} onChange={onChangeInput} />
        </form>
        {/* <KeyWord handleSubmit={handleSubmit} /> */}
        {/* 메인 컬러 선택
        <ColorPicker /> */}
      </div>

      <button>Next</button>
    </S.Section>
  );
};

export default MakeSide;