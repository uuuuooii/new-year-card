import React, { ChangeEvent } from 'react';
import { PromtProps } from '../type';
import Textarea from '@components/components/textarea';

interface KeyWordProps extends PromtProps {
  keyword: string;

}

const KeyWord = ({ keyword, setPromt }: KeyWordProps) => {
  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPromt((prev) => ({ color: prev.color, drawingStyle: prev.drawingStyle, keyword: e.target.value, letter: prev.letter }));
  };
  return (
    <section>
      <div>
        <Textarea
          value={keyword}
          onChangeInput={onChangeInput}
          maxLength={30}
          placeholder={'키워드를 입력해주세요 ex)크리스마스'}
        />
      </div>
    </section>
  );
};

export default KeyWord;