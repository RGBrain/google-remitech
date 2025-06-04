import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  // body of our request - to be sent from the Client-side in our form above

  console.log("body:", body); // this works!     body: { surveyJSON: 'testData' }

  const { surveyJSON } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "tarbousier@hotmail.co.uk", // ["richard.brain@hotmail.co.uk", "mfbrain@outlook.com"], // can be an array of strings i think
      subject: "Hello world",
      react: EmailTemplate(),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
