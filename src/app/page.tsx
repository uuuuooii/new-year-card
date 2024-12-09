"use client";

import Inner from "@components/components/design/inner";
import Image from "next/image";
import Link from "next/link";
import * as S from './style';

export default function Home() {
  return (
    <main>
      <S.Container>
        <Inner>
          <S.Wrap>
            <S.Title>AI New Year Card</S.Title>
            <S.SubTitle>AI creates the images for your New Year&apos;s card exactly the way you want. <br />
              Gift a unique and special New Year&apos;s card to your friends or loved ones!
            </S.SubTitle>
            <S.ImageWrap>
              <Image src='/main.png' alt="image" width={657} height={343} />
            </S.ImageWrap>

            <Link href='/card'>
              <S.Text>
                Create a New Year&apos;s card
              </S.Text>
            </Link>
          </S.Wrap>

        </Inner>
      </S.Container>
    </main>
  );
}
