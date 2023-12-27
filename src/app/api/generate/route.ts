import { NextResponse, NextRequest } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'icn1'; // 'nodejs' is the default
// execute this function on iad1 or hnd1, based on the connecting client location
export const preferredRegion = ['iad1', 'kix1'];

export async function POST(req: NextRequest) {
  const { content } = await req.json();

  const promp =
    content.drawingStyle +
    '이런 느낌' +
    '메인 컬러는' +
    content.color +
    content.keyword;
  console.log(promp);
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: promp,
      n: 1,
      size: '1024x1024',
    });

    console.log(response);
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse('Sever Error', { status: 500 });
  }
}
