import React, { useRef, useEffect, ChangeEvent } from 'react';
import * as S from './style';

interface TextareaProps {
  value: string;
  onChangeInput: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength: number;
  placeholder: string;
}

const Textarea = ({ value, onChangeInput, maxLength, placeholder }: TextareaProps) => {

  return (
    <div>
      <S.Textarea value={value} onChange={onChangeInput} maxLength={maxLength} placeholder={placeholder} />
      <div>{value.length}/{maxLength}</div>
    </div>
  );
};

export default Textarea;