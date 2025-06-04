"use server"; // server action

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rEmail = process.env.R_EMAIL;
const mEmail = process.env.M_EMAIL;
const pass = process.env.EMAIL_PASSWORD;

const surveySubmitHandler = async (surveyData) => {
  // should it be async ?
  const results = JSON.stringify(surveyData);
  console.log("surveySubmitHandler", results);

  try {
    const response = await fetch(process.env.URL + "/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        surveyJSON: "testData",
      }),

      //   JSON.stringify({
      //     // email: "tarbousier@hotmail.co.uk",
      //     // message: "some text",
      //     surveyJSON: results,
      //   }),
    });

    // handle success
    if (response.ok) {
      console.log("Email Sent Successfully!");
    } else {
      console.log("There was a problem sending email. Pls try again!");
      console.log("response is:", response);
    }
  } catch (error) {
    //  return new NextResponse("Failed to send message.", { status: 500 });
    //! the above code is in contect of POST route
    console.log("Error sending email (outer catch):", error);
  }
};

export default surveySubmitHandler;
