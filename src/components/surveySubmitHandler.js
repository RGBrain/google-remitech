"use server"; // server action

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sendSurveyEmail from "./sendSurveyEmail";

const rEmail = process.env.R_EMAIL;
const mEmail = process.env.M_EMAIL;
const pass = process.env.EMAIL_PASSWORD;

const surveySubmitHandler = async (surveyData) => {
  // should it be async ?
  const results = JSON.stringify(surveyData);
  console.log("surveySubmitHandler", results);

  await sendSurveyEmail(results);
};

export default surveySubmitHandler;
