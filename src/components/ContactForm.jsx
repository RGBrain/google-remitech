"use client";

import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
// import cmsFormStructure from "./ContactFormStructure";
const ContactForm = () => {
  const [cmsForm, setCmsForm] = useState(null);
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

  //TODO 1) get the form from payload

  const formId = 1;

  useEffect(() => {
    // Fetch the form configuration
    fetch(`/api/forms/${formId}`)
      .then((res) => res.json())
      .then((data) => {
        setCmsForm(data);
        // console.log("cmsForm", data);
      })
      .catch((err) => setError("Error loading form"));
  }, [formId]);

  // console.log(cmsForm);
  // return;

  //TODO handle form submission

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
        form: formId,
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

  //! What is this...
  //! IMPORTANT LEAVE THIS IN, IF PULLED CMSFORM STRUCTURE FROM PAYLOAD FORMS COLLECTION
  if (!cmsForm) return <div>Loading...</div>;

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

  //TODO render the form based on field types

  return (
    <>
      <div className="p-8 px-0 py-2 pt-2 text-gray-600 text-sm">
        <form onSubmit={handleSubmit} ref={formRef}>
          {/* <label htmlFor={field.name}>{field.label}</label> */}
          <div className="flex flex-col items-start space-y-2">
            {cmsForm.fields.map((field) => (
              <div key={field.id}>
                {field.blockType !== "checkbox" ? (
                  <input type={field.blockType} name={field.name} id={field.name} className="h-6 p-5 py-4 bg-white outline-1 outline-gray-300 rounded-md" placeholder={field.label} required={field.required} />
                ) : (
                  <div className="mt-2 flex items-start">
                    <input type={field.blockType} name={field.name} id={field.name} className="p-5 py-4 bg-white rounded-md" placeholder={field.label} required={field.required} />
                    <label className="ml-3 pl-0 -mt-[2px] inline-block text-xs">{field.label}</label>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* note: it appears, that can to required={boolean} in React, but maybe not html */}

          <button className="p-1 px-5 mt-3 bg-gradient-to-tr from-remitech-purple to-remitech-turquoise transition text-white hover:to-remitech-purple font-bold text-base rounded-md cursor-pointer" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
