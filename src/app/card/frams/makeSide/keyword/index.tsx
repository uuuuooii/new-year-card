import React, { ChangeEvent } from 'react';

interface KeyWordProps {
  prompt: string;
  handleSubmit: (e: any) => Promise<void>;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const KeyWord = ({ prompt, handleSubmit, onChangeInput }: KeyWordProps) => {
  return (
    <section>
      <div>
        키워드 입력
        <form onSubmit={handleSubmit}>
          <input value={prompt} onChange={onChangeInput} />
        </form>
      </div>
    </section>
  );
};

export default KeyWord;