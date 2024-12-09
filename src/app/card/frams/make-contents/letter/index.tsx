import React, { ChangeEvent } from "react";
import { PromtProps } from "../type";
import Textarea from "@components/components/design/textarea";
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
        maxLength={32}
        heigthValue={107}
        placeholder="Please write the content"
      />
    </WrapLetter>
  );
};

export default Letter;
