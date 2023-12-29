import { NextResponse } from "next/server";
import fs from "fs";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";
import { GoogleGenerativeAI } from "@google/generative-ai";

const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro-vision",
  maxOutputTokens: 200,
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  temperature: 0.1,
});

// const genAI = new GoogleGenerativeAI(
//   process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string
// );
// const model = genAI.getGenerativeModel({ model: "google-pro-vision" });

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { base64Image, mimeType } = body;
    // const image = {
    //   inlineData: {
    //     data: base64Image,
    //     mimeType,
    //   },
    // };
    const prompt =
      "You're wittyPic an Intelligent AI caption creator. You'll analyse the input image and come up with quirky, funny, hilarious captions matching the image. Don't divert the topic and stick to the context. Analyse the image carefully and give the captions.Also include brief description of the image and your explanation for coming up with the caption. Be very creative in creating captions and make it extremely funny";

    const input2 = [
      new HumanMessage({
        content: [
          {
            type: "text",
            text: "You're wittyPic an AI caption creator. You'll analyse the image and come up with quirky, funny, hilarious captions suiting the input image. Don't divert the topic and stick to the context. Include very brief description of the image and also very briefly include the reasoning for your caption. Include only one caption per image, and remember to generate funny captions, that's your only sole purpose",
          },
          {
            type: "image_url",
            image_url: `${base64Image}`,
          },
        ],
      }),
    ];

    const res = await model.invoke(input2);

    console.log(res);

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
