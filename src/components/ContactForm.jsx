"use client";

import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import cmsFormStructure from "./ContactFormStructure";
const ContactForm = () => {
  //  const [cmsForm, setCmsForm] = useState(null);
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

  // 1) get the form from payload

  // useEffect(() => {
  //   setCmsForm(cmsFormStructure);
  // }, [1]); // form id is in [ ]

  //* 2) render the form based on field types

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // convert the form data to a json object, for fields that are not files
    const dataToSend = Array.from(formData.entries()).map(([name, value]) => ({
      field: name,
      value: value.toString(),
    }));

    // send the form data to payload
    const response = await fetch("/api/form-submissions", {
      method: "POST",
      body: JSON.stringify({
        form: 1, // form id
        submissionData: dataToSend,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", response);
    if (response.ok) {
      setSuccess(true);
    } else {
      setError("Form submission failed");
      setSuccess(false);
    }

    // reset the form
    formRef.current?.reset();
  };

  //  if (!cmsForm) return <div>Loading...</div>;

  //  setCmsForm(cmsFormStructure);

  const cmsForm = cmsFormStructure;

  if (success && cmsForm.confirmationMessage) {
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
    return (
      <span className="block text-center mx-auto font-bold pb-8 pt-4 text-xl">
        <RichText data={cmsForm.confirmationMessage} />
      </span>
    );
  }

  // console.log("cmsForm object", cmsForm);

  //  console.log(cmsForm);

  //   return;

  //! JUST HARD CODING THE FORM STRUCTURE IN INSTEAD OF PULLING FROM DB

  // cmsForm.fields[0].blockType;

  // cmsForm = {}
  // cmsForm.fields = []
  // cmsForm.confirmationMessage = ''  // string????

  // log cmsform and copy console.log

  // cmsForm =

  return (
    <>
      <div className="p-8 px-0 pt-2 text-gray-600 text-sm">
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="flex flex-col justify-between items-stretch space-y-3">
            <input type={cmsForm.fields[0].blockType} name={cmsForm.fields[0].name} id={cmsForm.fields[0].name} className="h-6 p-5 bg-white outline-1 outline-gray-300 rounded-md" placeholder={cmsForm.fields[0].name} required />
            <div className="flex flex-col md:flex-row justify-between space-y-3 md:space-x-4 md:space-y-0">
              <input type={cmsForm.fields[1].blockType} name={cmsForm.fields[1].name} id={cmsForm.fields[1].name} size="10" className="h-6 p-5 bg-white outline-1 outline-gray-300 rounded-md grow-1" placeholder={cmsForm.fields[1].name} required />

              <input type={cmsForm.fields[2].blockType} name={cmsForm.fields[2].name} id={cmsForm.fields[2].name} size="10" className="h-6 p-5 bg-white outline-1 outline-gray-300 rounded-md grow-1" placeholder={cmsForm.fields[2].name} required />
            </div>
            <input type={cmsForm.fields[3].blockType} name={cmsForm.fields[3].name} id={cmsForm.fields[3].name} className="h-6 p-5 bg-white outline-1 outline-gray-300 rounded-md" placeholder={cmsForm.fields[3].name} required />
            <button className="p-2 px-5 bg-btn hover:bg-btn-hover transition text-white font-bold text-xl rounded-md cursor-pointer" type="submit">
              Send
            </button>
            ;
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
