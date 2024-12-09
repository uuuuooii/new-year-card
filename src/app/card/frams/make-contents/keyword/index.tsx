import React, { ChangeEvent } from "react";
import { PromtProps } from "../type";
import Textarea from "@components/components/design/textarea";
import { Wrap } from "./style";

interface KeyWordProps extends PromtProps {
  keyword: string;
}

const KeyWord = ({ keyword, setPromt }: KeyWordProps) => {
  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPromt((prev) => ({
      color: prev.color,
      drawingStyle: prev.drawingStyle,
      keyword: e.target.value,
      letter: prev.letter,
    }));
  };
  return (
    <Wrap>
      <Textarea
        value={keyword}
        onChangeInput={onChangeInput}
        maxLength={20}
        heigthValue={95}
        placeholder={"Please enter keywords, e.g., Christmas."}
      />
    </Wrap>
  );
};

export default KeyWord;
