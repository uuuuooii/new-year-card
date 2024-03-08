"use client";

import React, { useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { PromtProps } from "../type";
import ContentSelectButton from "@components/components/design/button/contentSelect";
import * as S from "./style";

// _ 스네이크
// - 케밥

interface ColorPickerProps extends PromtProps {
  color: string;
  colorPicker: string;
  setColorPicker: React.Dispatch<React.SetStateAction<string>>;
}
// TODO(은혜): 네이밍 개선 (colorPicker,color)
const ColorPicker = ({
  color,
  setPromt,
  colorPicker,
  setColorPicker,
}: ColorPickerProps) => {

  const onClickColor = (item: string) => {
    setPromt((prev) => ({
      color: item,
      drawingStyle: prev.drawingStyle,
      keyword: prev.keyword,
      letter: prev.letter,
    }));
  };

  const 색상 = '';

  useEffect(() => {
    setPromt((prev) => ({
      color: colorPicker,
      drawingStyle: prev.drawingStyle,
      keyword: prev.keyword,
      letter: prev.letter,
    }));
  }, [colorPicker]);


  return (
    <S.Wrap>
      <S.ColorPickerWrap>
        <HexColorPicker onChange={setColorPicker} />
      </S.ColorPickerWrap>
      <S.ColorContent>
        <div onClick={() => onClickColor(colorPicker)}>
          <ContentSelectButton isClick={color === colorPicker}>
            <S.ColorPreview colorPicker={colorPicker} />
            <p>{colorPicker}</p>
          </ContentSelectButton>
        </div>
        <div onClick={() => onClickColor("없음")}>
          {/* 어떤 color 인지?, 무조건 컬러 값으로 */}
          <ContentSelectButton isClick={color === "없음"}>
            없음
          </ContentSelectButton>
        </div>
      </S.ColorContent>
    </S.Wrap>
  );
};

export default ColorPicker;
