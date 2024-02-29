import { NextResponse, NextRequest } from 'next/server';
import OpenAI from 'openai';

export const maxDuration = 300;
export const dynamic = 'force-dynamic';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { content } = await req.json();

  const promp =
    content.drawingStyle +
    '이런 느낌' +
    '메인 컬러는' +
    content.color +
    content.keyword;

  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: promp,
      n: 1,
      size: '1024x1024',
    });

    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse('Sever Error', { status: 500 });
  }
}
