'use client';

import React, { useState } from 'react';
import Preview from './frams/preview';
import MakeSide from './frams/makeContents';
import Inner from '@components/components/inner';
import * as S from './style';

const Card = () => {
  const [prompt, setPromt] = useState({ color: '', drawingStyle: '반 고흐', keyword: '', letter: '' });
  const { letter } = prompt;
  const [image, setImage] = useState('');
  const [colorPicker, setColorPicker] = useState('#000000');
  const [loadingStep, setLoadingStep] = useState(0);
  const [isSend, setIsSend] = useState(false);
  const [isEnd, setIsEnd] = useState(false);


  return (
    <main>
      <S.Container>
        <Inner>
          <S.Wrap>
            <Preview
              isSend={isSend}
              image={image}
              loadingStep={loadingStep}
              letter={letter}
              isEnd={isEnd} />
            <MakeSide
              prompt={prompt}
              setPromt={setPromt}
              image={image} setImage={setImage}
              setIsSend={setIsSend}
              setLoadingStep={setLoadingStep}
              colorPicker={colorPicker}
              setColorPicker={setColorPicker}
              setIsEnd={setIsEnd}
              isEnd={isEnd} />
          </S.Wrap>
          {loadingStep === 2 &&
            <div>
              <p>이미지 다운로드 하기</p>
              <p>공유하기</p>
            </div>}

        </Inner>
      </S.Container>
    </main>
  );
};

export default Card;