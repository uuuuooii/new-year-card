'use client';

import React, { useState } from 'react';
import Preview from './frams/preview';
import MakeSide from './frams/makeSide';
import Inner from '@components/components/inner';
import * as S from './style';

const Card = () => {
  const [prompt, setPromt] = useState('');
  const [image, setImage] = useState('');
  const [loadingStep, setLoadingStep] = useState(0);
  console.log(loadingStep);

  const [isSend, setIsSend] = useState(false);
  // console.log(isSend);
  return (
    <S.Container>
      <Inner>
        <S.Wrap>
          <Preview isSend={isSend} image={image} loadingStep={loadingStep} />
          <MakeSide
            prompt={prompt}
            setPromt={setPromt}
            image={image} setImage={setImage}
            setIsSend={setIsSend}
            setLoadingStep={setLoadingStep}
          />
        </S.Wrap>
      </Inner>
    </S.Container>
  );
};

export default Card;