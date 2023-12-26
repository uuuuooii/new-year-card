import React, { ChangeEvent } from 'react';
import { PromtProps } from '../type';

interface LetterProps extends PromtProps {
  letter: string;
}

const Letter = ({ letter, setPromt }: LetterProps) => {

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPromt((prev) => ({ color: prev.color, drawingStyle: prev.drawingStyle, keyword: prev.keyword, letter: e.target.value }));
  };
  return (
    <div><textarea value={letter} onChange={onChangeInput} /></div>
  );
};

export default Letter;