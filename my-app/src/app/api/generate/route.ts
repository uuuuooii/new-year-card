import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(res: Request) {
  const { content } = await res.json();

  console.log(content);
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: content,
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
