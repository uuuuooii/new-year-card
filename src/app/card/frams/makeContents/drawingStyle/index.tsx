import React from 'react';
import artistData from './data';
import Button from '@components/components/button';
import { PromtProps } from '../type';
import * as S from './style';

interface DrawingStyleProps extends PromtProps {
  drawingStyle: string;

}

const DrawingStyle = ({ drawingStyle, setPromt }: DrawingStyleProps) => {

  const onClickArtist = (artist: string) => {
    setPromt((prev) => ({
      color: '', drawingStyle: artist, keyword: prev.keyword, letter: prev.letter
    }));
  };

  return (
    <div>
      <S.List>
        {artistData.map((item) => (
          <li key={item.id} onClick={() => onClickArtist(item.artist)}>
            <Button isClick={drawingStyle === item.artist}>
              {item.artist}
            </Button>
          </li>
        ))}
      </S.List>
    </div>
  );
};

export default DrawingStyle;