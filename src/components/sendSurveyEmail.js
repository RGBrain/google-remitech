"use server";

import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendSurveyEmail = async (surveyData) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: process.env.RESEND_EMAIL, // can be an array
    subject: "Survey submission",
    react: EmailTemplate({ surveyData }),
  });

  if (error) {
    return console.log("error: ", error);
  } else {
    console.log("data: ", data);
  }
};

export default sendSurveyEmail;
