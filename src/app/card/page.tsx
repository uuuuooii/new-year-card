'use client';

import React, { useState } from 'react';
import Preview from './frams/preview';
import MakeSide from './frams/makeContents';
import Inner from '@components/components/inner';
import * as S from './style';

const Card = () => {
  const [prompt, setPromt] = useState({ color: '', drawingStyle: '', keyword: '', letter: '' });
  const { letter } = prompt;
  const [image, setImage] = useState('');
  const [colorPicker, setColorPicker] = useState('#000000');
  const [loadingStep, setLoadingStep] = useState(0);
  const [isSend, setIsSend] = useState(false);

  console.log(prompt);

  return (
    <S.Container>
      <Inner>
        <S.Wrap>
          <Preview isSend={isSend} image={image} loadingStep={loadingStep} letter={letter} />
          <MakeSide
            prompt={prompt}
            setPromt={setPromt}
            image={image} setImage={setImage}
            setIsSend={setIsSend}
            setLoadingStep={setLoadingStep}
            colorPicker={colorPicker}
            setColorPicker={setColorPicker}
          />
        </S.Wrap>
      </Inner>
    </S.Container>
  );
};

export default Card;