import React from 'react';
import Preview from './frams/preview';
import MakeSide from './frams/makeSide';
import * as S from './style';

const Card = () => {
  return (
    <S.Container>
      <S.Wrap>
        <Preview />
        <MakeSide />
      </S.Wrap>
    </S.Container>
  );
};

export default Card;