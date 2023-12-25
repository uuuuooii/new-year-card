"use client";

import React, { useEffect, useState } from 'react';
import { HexColorPicker } from "react-colorful";
import * as S from './style';

interface ColorPickerProps {
  color: string;
  setPromt: React.Dispatch<React.SetStateAction<{
    color: string;
    drawingStyle: string;
    keyword: string;
  }>>;
}

const ColorPicker = ({ setPromt }: ColorPickerProps) => {
  const [colorPicker, setColorPicker] = useState('#000000');

  const onClickColor = (color: string) => {
    setPromt((prev) => ({ color: color, drawingStyle: prev.drawingStyle, keyword: prev.keyword }));
  };
  return (
    <S.Wrap>
      <HexColorPicker onChange={setColorPicker} />
      <S.ColorContent>
        <p>선택한 컬러</p>
        <S.Content onClick={() => onClickColor(colorPicker)}>
          <S.ColorPreview color={colorPicker} />
          <p>{colorPicker}</p>
        </S.Content>
        <S.Content>없음</S.Content>
      </S.ColorContent>
    </S.Wrap>
  );
};

export default ColorPicker;