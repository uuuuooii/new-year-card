import React, { ChangeEvent } from "react";
import { PromtProps } from "../type";
import Textarea from "@components/components/textarea";
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
        placeholder={"키워드를 입력해주세요 ex)크리스마스"}
      />
    </Wrap>
  );
};

export default KeyWord;
