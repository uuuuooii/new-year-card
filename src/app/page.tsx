"use client";

import Inner from "@components/components/inner";
import Image from "next/image";
import Link from "next/link";
import * as S from './style';

export default function Home() {
  return (
    <main>
      <S.Container>
        <Inner>
          <S.Wrap>
            <S.Title>AI 신년카드 만들기</S.Title>
            <S.SubTitle>신년카드에 들어가는 이미지는 AI가 내가 원하는 대로 만들어줘요.<br /> 나만의 특별한 신년카드를 친구나 연인에게 선물해보세요.</S.SubTitle>
            <S.ImageWrap>
              <Image src='/main.png' alt="image" width={657} height={343} />
            </S.ImageWrap>

            <Link href='/card'>
              <S.Text>
                신년카드 만들기
              </S.Text>
            </Link>
          </S.Wrap>

        </Inner>
      </S.Container>
    </main>
  );
}
