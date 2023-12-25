import React from 'react';
import artistData from './data';
import * as S from './style';

interface DrawingStyleProps {
  drawingStyle: string;
  setPromt: React.Dispatch<React.SetStateAction<{
    color: string;
    drawingStyle: string;
    keyword: string;
  }>>;
}

const DrawingStyle = ({ drawingStyle, setPromt }: DrawingStyleProps) => {

  const onClickArtist = (artist: string) => {
    setPromt((prev) => ({ color: '', drawingStyle: artist, keyword: prev.keyword }));
  };

  return (
    <div>
      <S.List>
        {artistData.map((item) => (
          <S.Item key={item.id} onClick={() => onClickArtist(item.artist)} isArtist={drawingStyle === item.artist}>{item.artist}</S.Item>
        ))}
      </S.List>
    </div>
  );
};

export default DrawingStyle;