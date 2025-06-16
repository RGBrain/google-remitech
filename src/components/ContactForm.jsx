"use client";

import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import emailCSV from "@/lib/emailCSV";

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
  console.log(cmsForm.fields);
  return (
    <>
      <div className="bg-white rounded-lg px-8 lg:px-12 pb-8 pt-2 text-remitech-turquoise text-sm">
        <h3 id="FormRegisterInterest" className="text-4xl mb-8 mt-8 text-gray-900">
          Register Interest
        </h3>
        <form onSubmit={handleSubmit} action={emailCSV} ref={formRef}>
          {/* <label htmlFor={field.name}>{field.label}</label> */}
          <div className="flex flex-col items-start space-y-2">
            {cmsForm.fields.map((field, i) => {
              //* UNCOMMENT ONLY FOR TESTING CSV emails field.required = false; //! TEMPORARY!!
              if (field.blockType === "checkbox") {
                return (
                  <div key={i} className="mt-2 flex items-start">
                    <input type={field.blockType} name={field.name} id={field.name} className="p-5 py-4 bg-white rounded-md" placeholder={field.label} required={field.required} />
                    <label className="ml-3 pl-0 -mt-[2px] inline-block text-xs text-gray-900">
                      I agree to my data being handled in line with
                      <a href="https://remitech.com/privacy/" className="whitespace-nowrap" target="_blank">
                        &nbsp;Remitech's privacy policy
                      </a>
                    </label>
                  </div>
                );
              } else if (field.blockType === "select") {
                return (
                  <select key={i} name={field.name} id={field.name} defaultValue="" required={field.required} className="cursor-pointer bg-btn py-2 px-4 text-white rounded-md mb-6 hover:bg-remitech-purple">
                    {/* <option value="">Choose Event</option> */}
                    <option hidden disabled value="">
                      Select Event
                    </option>
                    {field.options.map((eventObj, i) => (
                      <option key={i} value={eventObj.value}>
                        {eventObj.label}
                      </option>
                    ))}
                  </select>
                );
              } else {
                return (
                  <input
                    key={i}
                    type={field.blockType}
                    name={field.name}
                    id={field.name}
                    className="h-6 p-5 py-[18px] bg-white rounded-md w-full text-gray-900"
                    style={{ borderOpacity: "0.2", border: "solid 1px #7fa6fb" }}
                    placeholder={field.label}
                    required={field.required}
                  />
                  // NOTE THIS, IN REACT IS VALID, REACT IS SMART, AND JUST PUTS 'REQUIRED', IF REQUIRED=TRUE
                );
              }
            })}
          </div>

          {/* note: it appears, that can to required={boolean} in React, but maybe not html */}

          <button className="p-1 px-5 mt-5 bg-btn transition text-white hover:bg-remitech-purple font-bold text-base rounded-md cursor-pointer hover:scale-101 transform duration-200 ease-in" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
