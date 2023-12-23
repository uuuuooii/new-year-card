import React from 'react';
import * as S from './style';
import ColorPicker from './colorPicker';

const MakeSide = () => {
  const Num = [1, 2, 3, 4];
  return (
    <S.Section>
      <S.NumberList>
        {Num.map((item) => (
          <S.NumberItem key={item}>{item}</S.NumberItem>
        ))}
      </S.NumberList>
      <S.Title>신년카드에 들어가는 이미지를 AI에게 알려주세요</S.Title>
      <div>
        메인 컬러 선택
        <ColorPicker />
      </div>

      <button>Next</button>
    </S.Section>
  );
};

export default MakeSide;