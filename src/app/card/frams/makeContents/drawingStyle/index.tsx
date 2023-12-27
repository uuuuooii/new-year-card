import React from "react";
import artistData from "./data";
import { PromtProps } from "../type";
import ContentSelectButton from "@components/components/button/contentSelect";
import * as S from "./style";

interface DrawingStyleProps extends PromtProps {
  drawingStyle: string;
}

const DrawingStyle = ({ drawingStyle, setPromt }: DrawingStyleProps) => {
  const onClickArtist = (artist: string) => {
    setPromt((prev) => ({
      color: "",
      drawingStyle: artist,
      keyword: prev.keyword,
      letter: prev.letter,
    }));
  };

  return (
    <div>
      <S.List>
        {artistData.map((item) => (
          <li key={item.id} onClick={() => onClickArtist(item.artist)}>
            <ContentSelectButton isClick={drawingStyle === item.artist}>
              {item.artist}
            </ContentSelectButton>
          </li>
        ))}
      </S.List>
    </div>
  );
};

export default DrawingStyle;
