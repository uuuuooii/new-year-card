import React, { ChangeEvent } from 'react';
import { PromtProps } from '../type';

interface KeyWordProps extends PromtProps {
  keyword: string;

}

const KeyWord = ({ keyword, setPromt }: KeyWordProps) => {
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPromt((prev) => ({ color: prev.color, drawingStyle: prev.drawingStyle, keyword: e.target.value, letter: prev.letter }));
  };
  return (
    <section>
      <div>
        키워드 입력
        <input value={keyword} onChange={onChangeInput} />
      </div>
    </section>
  );
};

export default KeyWord;