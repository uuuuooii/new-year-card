import React, { ChangeEvent } from "react";
import { PromtProps } from "../type";
import Textarea from "@components/components/textarea";
import { WrapLetter } from "./style";

interface LetterProps extends PromtProps {
  letter: string;
}

const Letter = ({ letter, setPromt }: LetterProps) => {
  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPromt((prev) => ({
      color: prev.color,
      drawingStyle: prev.drawingStyle,
      keyword: prev.keyword,
      letter: e.target.value,
    }));
  };
  return (
    <WrapLetter>
      <Textarea
        value={letter}
        onChangeInput={onChangeInput}
        maxLength={44}
        heigthValue={107}
        placeholder="내용을 작성해주세요"
      />
    </WrapLetter>
  );
};

export default Letter;
