"use client";

import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful";
import * as S from './style';

const ColorPicker = () => {
  const [color, setColor] = useState('#000000');
  console.log(color);
  return (
    <S.Wrap>
      <HexColorPicker onChange={setColor} />
      <S.ColorContent>
        <p>선택한 컬러</p>
        <S.Content >
          <S.ColorPreview color={color} />
          <p>{color}</p>
        </S.Content>
        <S.Content>없음</S.Content>
      </S.ColorContent>
    </S.Wrap>
  );
};

export default ColorPicker;