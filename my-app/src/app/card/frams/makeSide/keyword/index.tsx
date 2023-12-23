import React from 'react';

interface KeyWordProps {
  handleSubmit: (e: any) => Promise<void>;
}

const KeyWord = ({ handleSubmit }: KeyWordProps) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" />
      </form>

    </section>
  );
};

export default KeyWord;