import React, { ChangeEvent } from 'react';
import { PromtProps } from '../type';
import * as S from './style';
import Textarea from '@components/components/textarea';

interface LetterProps extends PromtProps {
  letter: string;
}

const Letter = ({ letter, setPromt }: LetterProps) => {

  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPromt((prev) => ({ color: prev.color, drawingStyle: prev.drawingStyle, keyword: prev.keyword, letter: e.target.value }));
  };
  return (
    <div>
      <Textarea
        value={letter}
        onChangeInput={onChangeInput}
        maxLength={44}
        placeholder='내용을 작성해주세요'
      />
    </div>
  );
};

export default Letter;