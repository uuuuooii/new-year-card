import React from 'react';
import Preview from './frams/preview';
import MakeSide from './frams/makeSide';
import Inner from '@components/components/inner';
import * as S from './style';

const Card = () => {

  return (
    <S.Container>
      <Inner>
        <S.Wrap>
          <Preview />
          <MakeSide />
        </S.Wrap>
      </Inner>
    </S.Container>
  );
};

export default Card;