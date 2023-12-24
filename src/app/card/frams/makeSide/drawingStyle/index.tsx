import React from 'react';
import artistData from './data';
import * as S from './style';

interface DrawingStyleProps {
  prompt: string;
  setPromt: React.Dispatch<React.SetStateAction<string>>;
}

const DrawingStyle = ({ prompt, setPromt }: DrawingStyleProps) => {

  const onClickArtist = (artist: string) => {
    setPromt(artist);
  };

  return (
    <div>
      <S.List>
        {artistData.map((item) => (
          <S.Item key={item.id} onClick={() => onClickArtist(item.artist)} isArtist={prompt === item.artist}>{item.artist}</S.Item>
        ))}
      </S.List>
    </div>
  );
};

export default DrawingStyle;