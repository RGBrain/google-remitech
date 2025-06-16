"use server";

import configPromise from "@payload-config";
import { getPayload } from "payload";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const return_time_in_non_24_hour_format_with_am_pm = (ISOdate) => {
  const date = new Date(ISOdate);
  let time_to_return = String((date.getHours() + 24) % 12 || 12);
  time_to_return += "." + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  time_to_return += date.getHours() > 11 ? "pm" : "am";

  return time_to_return;
};

const emailCSV = async () => {
  await sleep(10000);
  // PAUSING SO THAT WHEN PULL FROM 'FORM SUBMISSIONS' COLLECTION, THE LATEST JUST ADDED ONE WITH BE THERE

  const payload = await getPayload({ config: configPromise });
  const formSubmissions = await payload.find({
    collection: "form-submissions",
    draft: false,
    limit: 1000,
    overrideAccess: true,
    pagination: true,
  });

  //   console.log("FORM PROPERTY:", formSubmissions.docs[0].form);  //? NOT NEEDED, IS JUST THE FORM STRUCTURE
  //   console.log("submissionData PROPERTY:", formSubmissions.docs[0].submissionData);  //! THIS IS THE SUBMITTED DATA

  //TODO INITIATING .CSV FILE
  let csvFile = "";

  //TODO

  //TODO First adding field Headings to the csvFile

  //first column: date
  csvFile += `date,`;

  for (let fieldData of formSubmissions.docs[0].submissionData) {
    // each iteration is one a fieldData

    if (fieldData.field === "agreement") {
      continue;
    }

    let fieldName = fieldData.field;
    csvFile += `${fieldName},`;
  }

  csvFile = csvFile.slice(0, -1);

  //TODO Add a blank row below field Headings
  csvFile += `\n,,,,,,`;

  //TODO NOW adding actual submitted Form data to the csvFile
  for (let submission of formSubmissions.docs) {
    // each iteration is one form Submission (many fields) from one user

    csvFile += `\n`; // new line for each form submission

    //adding submitted date value

    var dateObj = new Date(submission.createdAt);

    var dateStr = dateObj.getDate() + "/" + (dateObj.getMonth() + 1) + "/" + dateObj.getFullYear().toString().slice(2) + " " + return_time_in_non_24_hour_format_with_am_pm(submission.createdAt); // + dateObj.getHours() + ":" + dateObj.getMinutes();

    // 16-5-2015 9:50

    csvFile += `${dateStr},`;

    for (let fieldData of submission.submissionData) {
      // each iteration is an OBJECT - just one field e.g. 'eventSelect' or 'email'

      if (fieldData.field === "agreement") {
        continue;
      }

      let fieldValue = fieldData.value;
      csvFile += `${fieldValue},`;
    }
    csvFile = csvFile.slice(0, -1);
  }

  //  console.log("csvFile:", csvFile);

  //TODO NOW ACTUALLY SEND THE EMAIL

  //getting now's date

  var nowObj = new Date();

  var nowDateStr = nowObj.getDate() + "-" + (nowObj.getMonth() + 1) + "-" + nowObj.getFullYear().toString().slice(2) + " " + return_time_in_non_24_hour_format_with_am_pm(nowObj.toISOString()); // + dateObj.getHours() + ":" + dateObj.getMinutes();

  const email = await payload.sendEmail({
    to: process.env.EMAIL_TO,
    subject: `CSV - Remitech form submissions - ${nowDateStr}`,
    text: "Latest .csv file of all Remitech form submissions are attached \n\n\nBWD email services",
    attachments: [
      {
        filename: `remitech-form-submissions-${nowDateStr}.csv`,
        content: csvFile,
      },
    ],
  });

  await sleep(5000);

  console.log("CSV file emailed");
};

export default emailCSV;
