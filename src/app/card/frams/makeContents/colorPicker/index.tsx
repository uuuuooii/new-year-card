"use client";

import React, { useEffect, useState } from 'react';
import { HexColorPicker } from "react-colorful";
import Button from '@components/components/button';
import * as S from './style';
import { PromtProps } from '../type';

interface ColorPickerProps extends PromtProps {
  color: string;
  colorPicker: string;
  setColorPicker: React.Dispatch<React.SetStateAction<string>>;
}

const ColorPicker = ({ color, setPromt, colorPicker, setColorPicker }: ColorPickerProps) => {


  const onClickColor = (item: string) => {
    setPromt((prev) => ({ color: item, drawingStyle: prev.drawingStyle, keyword: prev.keyword, letter: prev.letter }));
  };

  useEffect(() => {
    setPromt((prev) => ({ color: colorPicker, drawingStyle: prev.drawingStyle, keyword: prev.keyword, letter: prev.letter }));
  }, [colorPicker]);

  console.log(color);
  return (
    <S.Wrap>
      <HexColorPicker onChange={setColorPicker} />
      <S.ColorContent>
        <p>선택한 컬러</p>
        <div onClick={() => onClickColor(colorPicker)}>
          <Button isClick={color === colorPicker}>
            <S.ColorPreview colorPicker={colorPicker} />
            <p>{colorPicker}</p>
          </Button>
        </div>
        <div onClick={() => onClickColor('없음')}>
          <Button isClick={color === '없음'}>없음</Button>
        </div>
      </S.ColorContent>
    </S.Wrap>
  );
};

export default ColorPicker;