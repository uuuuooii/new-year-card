import React, { ChangeEvent } from "react";
import * as S from "./style";

interface TextareaProps {
  value: string;
  onChangeInput: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength: number;
  placeholder: string;
  heigthValue: number;
}

const Textarea = ({
  value,
  onChangeInput,
  maxLength,
  placeholder,
  heigthValue,
}: TextareaProps) => {
  return (
    <S.Wrap>
      <S.Textarea
        required
        value={value}
        onChange={onChangeInput}
        maxLength={maxLength}
        placeholder={placeholder}
        heigthValue={heigthValue}
      />
      <S.Length>
        {value.length}/{maxLength}
      </S.Length>
    </S.Wrap>
  );
};

export default Textarea;
