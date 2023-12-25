import React, { ChangeEvent } from 'react';

interface KeyWordProps {
  keyword: string;
  handleSubmit: (e: any) => Promise<void>;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const KeyWord = ({ keyword, handleSubmit, onChangeInput }: KeyWordProps) => {
  console.log(keyword);
  return (
    <section>
      <div>
        키워드 입력
        <form onSubmit={handleSubmit}>
          <input value={keyword} onChange={onChangeInput} />
        </form>
      </div>
    </section>
  );
};

export default KeyWord;